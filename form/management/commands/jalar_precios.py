import pandas as pd
import requests
import io  
import time
from datetime import datetime, timedelta
from django.core.management.base import BaseCommand
from form.models import PrecioAgricola 

class Command(BaseCommand):
    help = 'Extrae los precios del SNIIM con auto-reparación de tablas'

    def handle(self, *args, **kwargs):
        url = "http://www.economia-sniim.gob.mx/Nuevo/Consultas/MercadosNacionales/PreciosDeMercado/Agricolas/ResultadosConsultaFechaFrutasYHortalizas.aspx"
        
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
            'Accept-Language': 'es-MX,es;q=0.9,en-US;q=0.8,en;q=0.7',
            'Connection': 'keep-alive',
        }
        
        session = requests.Session()
        session.headers.update(headers)

        dias_maximos_busqueda = 7 
        
        for dias_atras in range(dias_maximos_busqueda):
            fecha_obj = datetime.now() - timedelta(days=dias_atras)
            fecha_str = fecha_obj.strftime("%d/%m/%Y")
            fecha_date = fecha_obj.date()
            
            self.stdout.write(f"Buscando precios para el {fecha_str}...")

            params = {
                'fechaInicio': fecha_str,
                'fechaFinal': fecha_str,
                'ProductoId': '-1',
                'OrigenId': '-1', 
                'DestinoId': '140', 
                'PreciosPorId': '2', 
                'RegistrosPorPagina': '1000' # Aumentamos por si acaso
            }

            try:
                response = session.get(url, params=params, timeout=20)
                response.raise_for_status() 
                
                try:
                    tablas = pd.read_html(io.StringIO(response.text), flavor='html5lib')
                except Exception:
                    self.stdout.write(self.style.WARNING(f'  -> Error de lectura. Intentando día anterior...'))
                    time.sleep(1)
                    continue 

                datos_guardados = False

                for tabla in tablas:
                    # 1. AUTO-REPARACIÓN DE ENCABEZADOS
                    encabezados_actuales = " ".join([str(c).lower() for c in tabla.columns])
                    
                    # Si los encabezados NO están en el lugar correcto, los buscamos dentro de las filas
                    if 'producto' not in encabezados_actuales or 'precio frec' not in encabezados_actuales:
                        fila_encabezado = -1
                        for i, fila in tabla.iterrows():
                            texto_fila = " ".join([str(val).lower() for val in fila.values])
                            if 'producto' in texto_fila and 'precio frec' in texto_fila:
                                fila_encabezado = i
                                break
                        
                        # Si los encontramos escondidos, reparamos la tabla
                        if fila_encabezado != -1:
                            tabla.columns = tabla.iloc[fila_encabezado] # Subimos la fila a encabezado
                            tabla = tabla.iloc[fila_encabezado + 1:].reset_index(drop=True) # Borramos la basura de arriba
                        else:
                            continue # Si de plano no está, saltamos a otra tabla
                    
                    # 2. LIMPIEZA FINAL Y GUARDADO
                    # Aseguramos que los nombres de columna no tengan espacios fantasma
                    tabla.columns = [str(col).strip() for col in tabla.columns]
                    
                    if 'Precio Frec' in tabla.columns and 'Producto' in tabla.columns:
                        # Hacemos una copia para no alterar la tabla original en memoria
                        df = tabla.copy()
                        df = df.dropna(subset=['Precio Frec']) 
                        df = df[df['Producto'] != 'Producto']
                        
                        if df.empty:
                            continue 
                            
                        for index, row in df.iterrows():
                            nombre = str(row.get('Producto', '')).strip()
                            calidad = str(row.get('Calidad', '')).strip()
                            presentacion = str(row.get('Presentación', '')).strip()
                            precio_raw = str(row.get('Precio Frec', ''))
                            
                            try:
                                precio_limpio = precio_raw.replace('$', '').replace(',', '')
                                precio_final = float(precio_limpio)
                            except ValueError:
                                continue 
                            
                            PrecioAgricola.objects.update_or_create(
                                producto=nombre,
                                calidad=calidad,
                                presentacion=presentacion,
                                fecha=fecha_date,
                                defaults={'precio_frec': precio_final}
                            )
                        
                        self.stdout.write(self.style.SUCCESS(f'¡ÉXITO! Precios del {fecha_str} encontrados y guardados en Base de Datos.'))
                        datos_guardados = True
                        break 
                
                if datos_guardados:
                    self.stdout.write(self.style.SUCCESS(f'Ya tenemos los datos más recientes. Proceso finalizado.'))
                    return 

            except Exception as e:
                self.stdout.write(self.style.ERROR(f'  -> Error técnico: {e}'))
                
            time.sleep(1.5) 

        self.stdout.write(self.style.ERROR(f'Proceso terminado. No se encontraron datos.'))