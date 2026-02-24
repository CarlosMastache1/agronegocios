import csv
import requests
from io import StringIO
from django.core.management.base import BaseCommand
from form.models import ProductoAbasto, HistorialPrecio
from datetime import date

class Command(BaseCommand):
    help = 'Descarga precios desde Google Sheets adaptado al formato exacto del CSV'

    def handle(self, *args, **kwargs):
        # Borramos los registros de hoy para evitar duplicados si el comando se corre varias veces
        HistorialPrecio.objects.filter(fecha__date=date.today()).delete()

        # Tu ID de Google Sheets
        id_documento = "2PACX-1vRVr0AkuXlVHMRn1cxFRlL1bL-cJhs8hR1Ry24ta5FPhzKXWNlFUMs2ME-tuwATLTLt95L6ZdDpo7D7"
        url = f"https://docs.google.com/spreadsheets/d/e/{id_documento}/pub?output=csv"
        
        self.stdout.write("Descargando base de datos de precios...")
        response = requests.get(url)
        response.encoding = 'utf-8' # Para que lea bien los acentos como "Limón"
        
        if response.status_code != 200:
            self.stdout.write(self.style.ERROR('Error al conectar con Google Sheets.'))
            return

        # El csv_data es tratado con StringIO para leer fila por fila correctamente
        csv_data = StringIO(response.text)
        lector = csv.reader(csv_data)
        
        try:
            encabezados = next(lector)
            # Buscamos dinámicamente en qué número de columna están los datos
            idx_producto = encabezados.index('Producto')
            idx_precio = encabezados.index('Precio')
        except ValueError:
            self.stdout.write(self.style.ERROR("Error: El archivo CSV cambió y ya no tiene las columnas 'Producto' o 'Precio'."))
            return

        nuevos_registros = 0
        
        for fila in lector:
            # Ignoramos filas rotas o que no tengan suficientes columnas
            if not fila or len(fila) <= idx_precio:
                continue
            
            nombre_prod = fila[idx_producto].strip()
            precio_texto = fila[idx_precio].replace('$', '').replace(',', '').strip()
            
            # Si la celda del precio o producto están vacías (como en los títulos "Frutas", "Hortalizas" del CSV), la saltamos
            if not nombre_prod or not precio_texto or precio_texto == '-' or nombre_prod == '-' or len(nombre_prod) < 2:
                continue
            
            try:
                # Convertimos el texto a número decimal
                precio_float = float(precio_texto)
                
                # Solo guardamos si es un precio mayor a 0
                if precio_float > 0:
                    producto, _ = ProductoAbasto.objects.get_or_create(nombre=nombre_prod)
                    HistorialPrecio.objects.create(producto_abasto=producto, precio=precio_float)
                    nuevos_registros += 1
                    
            except ValueError:
                # Si el precio dice algo como "-" o no es un número, lo ignoramos y pasamos al siguiente
                continue

        self.stdout.write(self.style.SUCCESS(f'¡Éxito total! Se actualizaron {nuevos_registros} precios perfectamente.'))