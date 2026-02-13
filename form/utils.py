import yfinance as yf
import requests
from datetime import datetime, timedelta
from bs4 import BeautifulSoup
from .models import ProductoPrecio


# Tickers de futuros
TICKERS = {
    'cafe': 'KC=F',   # Café Arábica
    'maiz': 'ZC=F',   # Maíz
    'trigo': 'ZW=F'   # Trigo
}

# Conversión de unidades del contrato a kilogramos
CONVERSION = {
    'cafe': 45.3592,   # 100 libras (lbs) → 45.3592 kg
    'maiz': 25.4012,   # 1 bushel ≈ 25.4 kg
    'trigo': 27.2155   # 1 bushel ≈ 27.2 kg
}

def get_usd_to_mxn_rate():
    """
    Devuelve un tipo de cambio fijo USD → MXN.
    Modifica el valor aquí según tus necesidades.
    """
    return 17.2  # <-- Puedes actualizar este valor manualmente cuando lo necesites


def get_data(ticker_key):
    """
    Descarga los precios históricos del ticker dado (últimos 3 meses),
    convierte los precios a pesos mexicanos por kilogramo,
    y los devuelve como lista de datos para gráfico tipo vela.
    """
    ticker = TICKERS[ticker_key]
    end = datetime.today()
    start = end - timedelta(days=90)

    print(f"📈 Descargando datos de {ticker_key.upper()} ({ticker})...")
    data = yf.download(ticker, start=start, end=end)

    if data.empty:
        print(f"❌ No se obtuvieron datos para {ticker_key}")
        return []

    usd_to_mxn = get_usd_to_mxn_rate()
    conversion_kg = CONVERSION[ticker_key]

    chart_data = []
    for index, row in data.iterrows():
        chart_data.append({
            'date': index.strftime('%Y-%m-%d'),
            'open': round(row['Open'] / conversion_kg * usd_to_mxn, 2),
            'close': round(row['Close'] / conversion_kg * usd_to_mxn, 2),
            'low': round(row['Low'] / conversion_kg * usd_to_mxn, 2),
            'high': round(row['High'] / conversion_kg * usd_to_mxn, 2),
        })

    return chart_data



