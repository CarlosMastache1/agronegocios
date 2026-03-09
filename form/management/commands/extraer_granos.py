import requests
from bs4 import BeautifulSoup
import datetime
import math
import os
from django.core.management.base import BaseCommand
from django.utils import timezone

# IMPORTANTE: Cambia 'tu_app' por el nombre de tu aplicación
from form.models import PrecioGrano 

class Command(BaseCommand):
    help = 'Extrae los precios frecuentes de granos del SNIIM y los guarda en la BD'

    def obtener_semana_mes_anio(self, fecha):
        primer_dia_mes = fecha.replace(day=1)
        semana = math.ceil((fecha.day + primer_dia_mes.weekday()) / 7.0)
        semana = min(semana, 5)
        return semana, fecha.month, fecha.year

    def get_real_name(self, soup, tag, id_ends_with):
        """Busca el atributo 'name' real de ASP.NET"""
        element = soup.find(tag, id=lambda x: x and x.endswith(id_ends_with))
        return element.get('name') if element else None

    def get_option_value(self, soup, select_id_ends_with, search_text):
        """Lee el menú desplegable y extrae el 'value' secreto buscando por texto"""
        select = soup.find('select', id=lambda x: x and x.endswith(select_id_ends_with))
        if select:
            for option in select.find_all('option'):
                if search_text.lower() in option.text.lower():
                    return option.get('value')
        return None

    def handle(self, *args, **kwargs):
        url_home = "http://www.economia-sniim.gob.mx/nuevo/Home.aspx"
        url_granos = "http://www.economia-sniim.gob.mx/nuevo/Consultas/MercadosNacionales/PreciosDeMercado/Agricolas/ConsultaGranos.aspx?SubOpcion=6|0"
        
        session = requests.Session()
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
            'Content-Type': 'application/x-www-form-urlencoded' 
        }
        
        try:
            self.stdout.write("Conectando al SNIIM para generar sesión...")
            session.get(url_home, headers=headers, timeout=10)
        except requests.exceptions.RequestException:
            self.stderr.write("Error: El servidor del SNIIM está caído.")
            return

        fecha_busqueda = datetime.datetime.now()
        intentos = 0
        
        while intentos < 5:
            semana, mes, anio = self.obtener_semana_mes_anio(fecha_busqueda)
            self.stdout.write(f"\nBuscando Granos: Sem {semana}, Mes {mes}, Año {anio}...")
            
            response = session.get(url_granos, headers=headers)
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # 1. Campos obligatorios de seguridad
            payload = {
                '__EVENTTARGET': '',
                '__EVENTARGUMENT': ''
            }
            
            for hidden in soup.find_all('input', type='hidden'):
                if hidden.get('name'):
                    payload[hidden.get('name')] = hidden.get('value', '')

            # 2. Extracción DINÁMICA de los nombres y valores
            name_prod = self.get_real_name(soup, 'select', 'ddlProducto')
            if name_prod: payload[name_prod] = self.get_option_value(soup, 'ddlProducto', 'todos') or '-1'

            name_ori = self.get_real_name(soup, 'select', 'ddlOrigen')
            if name_ori: payload[name_ori] = self.get_option_value(soup, 'ddlOrigen', 'todos') or '-1'

            # Buscamos la opción de Oaxaca Módulo de Abasto
            name_dest = self.get_real_name(soup, 'select', 'ddlDestino')
            val_dest = self.get_option_value(soup, 'ddlDestino', 'abasto') or self.get_option_value(soup, 'ddlDestino', 'oaxaca') or '200'
            if name_dest: payload[name_dest] = val_dest

            name_sem = self.get_real_name(soup, 'select', 'ddlSemana')
            val_sem = self.get_option_value(soup, 'ddlSemana', str(semana)) or str(semana)
            if name_sem: payload[name_sem] = val_sem

            name_mes = self.get_real_name(soup, 'select', 'ddlMes')
            meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
            mes_texto = meses[mes - 1]
            val_mes = self.get_option_value(soup, 'ddlMes', mes_texto) or str(mes)
            if name_mes: payload[name_mes] = val_mes

            name_anio = self.get_real_name(soup, 'select', 'ddlAnio')
            val_anio = self.get_option_value(soup, 'ddlAnio', str(anio)) or str(anio)
            if name_anio: payload[name_anio] = val_anio

            self.stdout.write(f"   -> Detectado: Destino_ID={val_dest}, Mes={val_mes} ({mes_texto}), Sem={val_sem}")
            
            # 3. Botón de Enviar (Agarramos el PRIMERO, que es el de Semanas)
            boton_semanal = soup.find('input', type='image')
            if boton_semanal and boton_semanal.get('name'):
                name_btn = boton_semanal.get('name')
                payload[f'{name_btn}.x'] = '15'
                payload[f'{name_btn}.y'] = '15'
            else:
                self.stderr.write("   -> Advertencia: No se encontró la imagen del botón Enviar.")

            # ENVIAR POST
            post_response = session.post(url_granos, data=payload, headers=headers)
            post_soup = BeautifulSoup(post_response.text, 'html.parser')
            
            tabla = None
            for t in post_soup.find_all('table'):
                texto_headers = t.text.lower()
                if 'producto' in texto_headers and 'origen' in texto_headers and 'precio frec' in texto_headers:
                    tabla = t
                    break
            
            if tabla:
                filas = tabla.find_all('tr')[1:] 
                if len(filas) > 0:
                    self.stdout.write(self.style.SUCCESS("¡Tabla encontrada con datos! Guardando en la BD..."))
                    hoy = timezone.now().date()
                    guardados = 0
                    
                    for fila in filas:
                        celdas = fila.find_all('td')
                        if len(celdas) >= 6:
                            try:
                                nombre_producto = celdas[1].text.strip()
                                origen_producto = celdas[2].text.strip()
                                precio_str = celdas[5].text.strip().replace('$', '').replace(',', '')
                                precio_float = float(precio_str) if precio_str else 0.0
                                
                                if precio_float > 0:
                                    PrecioGrano.objects.update_or_create(
                                        producto=nombre_producto,
                                        calidad=origen_producto,
                                        presentacion="Kilogramo",
                                        fecha_registro=hoy,
                                        defaults={'precio_actual': precio_float}
                                    )
                                    guardados += 1
                            except ValueError:
                                continue
                    
                    self.stdout.write(self.style.SUCCESS(f"Se guardaron {guardados} productos exitosamente."))
                    if os.path.exists('error_sniim.html'):
                        os.remove('error_sniim.html')
                    return 
            
            with open('error_sniim.html', 'w', encoding='utf-8') as f:
                f.write(post_response.text)

            self.stdout.write("Tabla vacía para esta fecha. Retrocediendo 7 días...")
            fecha_busqueda -= datetime.timedelta(days=7)
            intentos += 1
            
        self.stderr.write("Se superó el límite de intentos. Revisa el archivo 'error_sniim.html'.")