from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate
from django.http import HttpResponse, JsonResponse
from django.db import IntegrityError
from .forms import financieras, productosForm
from django.contrib import messages
from .models import entidadesFinancieras2, municipios, productos
from django.db.models import Sum, Count, Q
from django.http.response import JsonResponse
from random import randrange
from django.contrib.auth.decorators import login_required
from django.db.models.functions import ExtractYear, ExtractMonth
from django.core.mail import send_mail
import time
import yfinance as yf
import requests
from datetime import datetime, timedelta
import urllib.parse
from json import JSONDecodeError
import json 
import pandas as pd
import numpy as np
from decimal import Decimal
from .utils import get_data
from django.core.paginator import Paginator
from itertools import zip_longest

# Create your views here.

def maiz_precioMXN(request):
  maiz_futuros = yf.Ticker("ZC=F") 

  # Obtener el último precio de cierre (en centavos por bushel)
  ultimo_precio_centavos = maiz_futuros.history(period="1d")["Close"].iloc[-1]

  # Parámetros de conversión
  tipo_cambio = 19.30  # Pesos por dólar
  bushels_por_contrato = 5000  # Un contrato representa 5000 bushels
  kg_por_bushel = 25.40  # 1 bushel = 25.40 kg

  # Conversión a dólares por bushel
  ultimo_precio_dolares = ultimo_precio_centavos / 100

  # Conversión a pesos por bushel
  precio_pesos_bushel = ultimo_precio_dolares * tipo_cambio

  # Conversión a pesos por contrato (5000 bushels)
  precio_pesos_contrato = precio_pesos_bushel * bushels_por_contrato

  # Conversión a pesos por kilogramo
  precio_pesos_kg = precio_pesos_bushel / kg_por_bushel

  # Mostrar resultados
  print(f"Último precio de cierre: {ultimo_precio_centavos} centavos por bushel")
  print(f"Precio en pesos por bushel: {precio_pesos_bushel:.2f} MXN")
  print(f"Precio en pesos por contrato (5000 bushels): {precio_pesos_contrato:.2f} MXN")
  print(f"Precio en pesos por kilogramo: {precio_pesos_kg:.2f} MXN")

  return render(request,  'graficasBV.html')

def redondear_velas(velas):
    return [[round(valor, 2) for valor in fila] for fila in velas]

def precios_maiz(request):
    hoy = datetime.today().date()
    inicio = hoy - timedelta(days=90)

    df_maiz = yf.download("ZC=F", start=inicio, end=hoy + timedelta(days=1)).reset_index()
    df_cafe = yf.download("KC=F", start=inicio, end=hoy + timedelta(days=1)).reset_index()
    df_cacao = yf.download("CC=F", start=inicio, end=hoy + timedelta(days=1)).reset_index()
    df_arroz = yf.download("ZR=F", start=inicio, end=hoy + timedelta(days=1)).reset_index()
    df_soya = yf.download("ZS=F", start=inicio, end=hoy + timedelta(days=1)).reset_index()
    df_avena = yf.download("ZO=F", start=inicio, end=hoy + timedelta(days=1)).reset_index()
    df_azucar = yf.download("SB=F", start=inicio, end=hoy + timedelta(days=1)).reset_index()
    df_algodon = yf.download("CT=F", start=inicio, end=hoy + timedelta(days=1)).reset_index()
    df_gVacuno = yf.download("LE=F", start=inicio, end=hoy + timedelta(days=1)).reset_index()
    df_gJoven = yf.download("GF=F", start=inicio, end=hoy + timedelta(days=1)).reset_index()
    df_cMagro = yf.download("HE=F", start=inicio, end=hoy + timedelta(days=1)).reset_index()

    # Fechas y velas redondeadas
    fechas_maiz = df_maiz['Date'].dt.strftime('%Y-%m-%d').tolist()
    velas_maiz = redondear_velas(df_maiz[['Open', 'Close', 'Low', 'High']].values.tolist())

    fechas_cafe = df_cafe['Date'].dt.strftime('%Y-%m-%d').tolist()
    velas_cafe = redondear_velas(df_cafe[['Open', 'Close', 'Low', 'High']].values.tolist())

    fechas_cacao = df_cacao['Date'].dt.strftime('%Y-%m-%d').tolist()
    velas_cacao = redondear_velas(df_cacao[['Open', 'Close', 'Low', 'High']].values.tolist())

    fechas_arroz = df_arroz['Date'].dt.strftime('%Y-%m-%d').tolist()
    velas_arroz = redondear_velas(df_arroz[['Open', 'Close', 'Low', 'High']].values.tolist())

    fechas_soya = df_soya['Date'].dt.strftime('%Y-%m-%d').tolist()
    velas_soya = redondear_velas(df_soya[['Open', 'Close', 'Low', 'High']].values.tolist())

    fechas_avena = df_avena['Date'].dt.strftime('%Y-%m-%d').tolist()
    velas_avena = redondear_velas(df_avena[['Open', 'Close', 'Low', 'High']].values.tolist())

    fechas_azucar = df_azucar['Date'].dt.strftime('%Y-%m-%d').tolist()
    velas_azucar = redondear_velas(df_azucar[['Open', 'Close', 'Low', 'High']].values.tolist())

    fechas_algodon = df_algodon['Date'].dt.strftime('%Y-%m-%d').tolist()
    velas_algodon = redondear_velas(df_algodon[['Open', 'Close', 'Low', 'High']].values.tolist())

    fechas_gVacuno = df_gVacuno['Date'].dt.strftime('%Y-%m-%d').tolist()
    velas_gVacuno = redondear_velas(df_gVacuno[['Open', 'Close', 'Low', 'High']].values.tolist())

    fechas_gJoven = df_gJoven['Date'].dt.strftime('%Y-%m-%d').tolist()
    velas_gJoven = redondear_velas(df_gJoven[['Open', 'Close', 'Low', 'High']].values.tolist())

    fechas_cMagro = df_cMagro['Date'].dt.strftime('%Y-%m-%d').tolist()
    velas_cMagro = redondear_velas(df_cMagro[['Open', 'Close', 'Low', 'High']].values.tolist())

    ###### BLOQUE DE CODIGO PARA OBTENER PRECIOS POR PESOS MEXICANOS

    # Conversiones
    kg_por_libra = 0.4536
    kg_por_tonelada = 1000
    kg_por_bushel_maiz = 25.4016
    kg_por_bushel_soya = 27.216
    kg_por_bushel_avena = 14.52
    kg_por_cwt_arroz = 45.3592

    # Tipo de cambio
    dolar = yf.Ticker("USDMXN=X")
    datos_dolar = dolar.history(period="5d", interval="1h")
    tipo_cambio = datos_dolar["Close"].iloc[-1]

    # Café
    cafe = yf.Ticker("KC=F").history(period="5d", interval="4h")["Close"].iloc[-1]
    precio_cafe_mxn_kg = round((cafe / 100 * tipo_cambio) / kg_por_libra, 2)

    # Cacao
    cacao = yf.Ticker("CC=F").history(period="5d", interval="4h")["Close"].iloc[-1]
    precio_cacao_mxn_kg = round((cacao * tipo_cambio) / kg_por_tonelada, 2)

    # Maíz
    maiz = yf.Ticker("ZC=F").history(period="5d", interval="4h")["Close"].iloc[-1]
    precio_maiz_mxn_kg = round(((maiz / 100) * tipo_cambio) / kg_por_bushel_maiz, 2)

    # Soya
    soya = yf.Ticker("ZS=F").history(period="5d", interval="4h")["Close"].iloc[-1]
    precio_soya_mxn_kg = round(((soya / 100) * tipo_cambio) / kg_por_bushel_soya, 2)

    # Avena
    avena = yf.Ticker("ZO=F").history(period="5d", interval="4h")["Close"].iloc[-1]
    precio_avena_mxn_kg = round(((avena / 100) * tipo_cambio) / kg_por_bushel_avena, 2)

    # Arroz
    arroz = yf.Ticker("ZR=F").history(period="5d", interval="4h")["Close"].iloc[-1]
    precio_arroz_mxn_kg = round(((arroz / 100) * tipo_cambio) / kg_por_cwt_arroz, 2)

    # Azúcar
    azucar = yf.Ticker("SB=F").history(period="5d", interval="4h")["Close"].iloc[-1]
    precio_azucar_mxn_kg = round((azucar / 100 * tipo_cambio) / kg_por_libra, 2)

    # Algodón
    algodon = yf.Ticker("CT=F").history(period="5d", interval="4h")["Close"].iloc[-1]
    precio_algodon_mxn_kg = round((algodon / 100 * tipo_cambio) / kg_por_libra, 2)

    return render(request, 'graficasBV.html', {
        'fechas_maiz': json.dumps(fechas_maiz),
        'velas_maiz': json.dumps(velas_maiz),
        'fechas_cafe': json.dumps(fechas_cafe),
        'velas_cafe': json.dumps(velas_cafe),
        'fechas_cacao': json.dumps(fechas_cacao),
        'velas_cacao': json.dumps(velas_cacao),
        'fechas_arroz': json.dumps(fechas_arroz),
        'velas_arroz': json.dumps(velas_arroz),
        'fechas_cacao': json.dumps(fechas_cacao),
        'velas_cacao': json.dumps(velas_cacao),
        'fechas_soya': json.dumps(fechas_soya),
        'velas_soya': json.dumps(velas_soya),
        'fechas_avena': json.dumps(fechas_avena),
        'velas_avena': json.dumps(velas_avena),
        'fechas_azucar': json.dumps(fechas_azucar),
        'velas_azucar': json.dumps(velas_azucar),
        'fechas_algodon': json.dumps(fechas_algodon),
        'velas_algodon': json.dumps(velas_algodon),
        'fechas_gVacuno' : json.dumps(fechas_gVacuno),
        'velas_gVacuno' : json.dumps(velas_gVacuno),
        'fechas_gJoven' : json.dumps(fechas_gJoven),
        'velas_gJoven' : json.dumps(velas_gJoven),
        'fechas_cMagro' : json.dumps(fechas_cMagro),
        'velas_cMagro' : json.dumps(velas_cMagro),

        "precio_cafe_mxn_kg": "{:.2f}".format(precio_cafe_mxn_kg),
        "precio_cacao_mxn_kg": "{:.2f}".format(precio_cacao_mxn_kg),
        "precio_maiz_mxn_kg": "{:.2f}".format(precio_maiz_mxn_kg),
        "precio_soya_mxn_kg": "{:.2f}".format(precio_soya_mxn_kg),
        "precio_avena_mxn_kg": "{:.2f}".format(precio_avena_mxn_kg),
        "precio_arroz_mxn_kg": "{:.2f}".format(precio_arroz_mxn_kg),
        "precio_azucar_mxn_kg": "{:.2f}".format(precio_azucar_mxn_kg),
        "precio_algodon_mxn_kg": "{:.2f}".format(precio_algodon_mxn_kg),

        'rango_texto': f"{inicio} → {hoy}",
    })

@login_required
def home(request):
    finan = entidadesFinancieras2.objects.all()
    finanAcri = entidadesFinancieras2.objects.filter(intermediario_financiero = 'COOPERATIVA ACREIMEX, SOCIEDAD COOPERATIVA DE AHORRO Y PRESTAMO')
    finanFind = entidadesFinancieras2.objects.filter(intermediario_financiero = 'FINDECA, SOCIEDAD ANÓNIMA DE CAPITAL VARIABLE')
    finanFira = entidadesFinancieras2.objects.filter(intermediario_financiero = 'FIDEICOMISOS INSTITUIDOS EN RELACION CON LA AGRICULTURA (FIRA)')
    finanNego = entidadesFinancieras2.objects.filter(intermediario_financiero = 'NEGOCIOS EMPRESARIALES DE APOYO DE OAXACA, SOCIEDAD ANONIMA DE CAPITAL VARIABLE')
    finanCaja = entidadesFinancieras2.objects.filter(intermediario_financiero = 'CAJA SOLIDARIA SAN DIONISIO OCOTEPEC, SOCIEDAD COOPERATIVA DE AHORRO Y PRESTAMO')
    finanUcep = entidadesFinancieras2.objects.filter(intermediario_financiero = 'UNION DE CREDITO ESTATAL DE PRODUCTORES DE CAFE DE OAXACA, S.A. DE C.V.')

    return render(request, 'home.html', {
      'finan' : finan,
      'finanAcri' : finanAcri,
      'finanFind' : finanFind,
      'finanFira' : finanFira,
      'finanNego': finanNego,
      'finanCaja' : finanCaja,
      'finanUcep' : finanUcep })

def tiendaIndex(request):
  return render(request, 'tiendaHome.html')

def tiendaCategorias(request):
  return render(request, 'categoriasTiendas.html')

def catalogoProductos(request):
   return render(request, "catalogoProductos.html")

def tiendaAgricola(request):
  return render(request, 'agricolaTienda.html')

def tiendaProducAgri(request, categoria):
  busqueda = request.GET.get('busqueda', '')
  disponibilidad = request.GET.get('disponibilidad', '')
  volumen = request.GET.get('volumen', '')
  unidad = request.GET.get('unidad', '')
  municipio_id = request.GET.get('municipio', '')
  productos_filtrados = productos.objects.filter(
       subsector__iexact='AGRICOLA',
       categoria__iexact=categoria,
       estado=True
   )
  if busqueda:
       productos_filtrados = productos_filtrados.filter(nombreProductor__icontains=busqueda)
  if disponibilidad:
       productos_filtrados = productos_filtrados.filter(disponibilidad_entrega__iexact=disponibilidad)
  if volumen:
       productos_filtrados = productos_filtrados.filter(volumen_produccion__icontains=volumen)
  if unidad:
       productos_filtrados = productos_filtrados.filter(unidad_medidad__iexact=unidad)
  if municipio_id:
       productos_filtrados = productos_filtrados.filter(municipio__id=municipio_id)
  productos_filtrados = productos_filtrados.values(
       'nombreProductor', 'telefono', 'email'
   ).distinct()
  paginator = Paginator(productos_filtrados, 12)  # 9 productos por página
  page_number = request.GET.get('page')
  page_obj = paginator.get_page(page_number)

  todos_los_municipios = municipios.objects.all().order_by('nombre_municipio')

  return render(request, 'productoAgricultura.html',
  {
     'page_obj': page_obj, 
     'categoria' : categoria,
     'municipios': todos_los_municipios
     })


def tiendaProducInd(request, categoria):
  busqueda = request.GET.get('busqueda', '')
  disponibilidad = request.GET.get('disponibilidad', '')
  volumen = request.GET.get('volumen', '')
  unidad = request.GET.get('unidad', '')
  municipio_id = request.GET.get('municipio', '')
  productos_filtrados = productos.objects.filter(
       subsector__iexact='AGROINDUSTRIAL',
       estado=True
   )
  if busqueda:
       productos_filtrados = productos_filtrados.filter(nombreProductor__icontains=busqueda)
  if disponibilidad:
       productos_filtrados = productos_filtrados.filter(disponibilidad_entrega__iexact=disponibilidad)
  if volumen:
       productos_filtrados = productos_filtrados.filter(volumen_produccion__icontains=volumen)
  if unidad:
       productos_filtrados = productos_filtrados.filter(unidad_medidad__iexact=unidad)
  if municipio_id:
       productos_filtrados = productos_filtrados.filter(municipio__id=municipio_id)
  productos_filtrados = productos_filtrados.values(
       'nombreProductor', 'telefono', 'email'
   ).distinct()
  paginator = Paginator(productos_filtrados, 12)  # 9 productos por página
  page_number = request.GET.get('page')
  page_obj = paginator.get_page(page_number)

  todos_los_municipios = municipios.objects.all().order_by('nombre_municipio')

  return render(request, 'productoIndustrial.html',
  {
     'page_obj': page_obj, 
     'categoria' : categoria,
     'municipios': todos_los_municipios
     })

def productorProductorAgri(request, categoria, nombre):
  productos_filtrados = productos.objects.filter(subsector = 'AGRICOLA',  categoria = categoria, nombreProductor = nombre, estado=True)
  paginator = Paginator(productos_filtrados, 9)  # 9 productos por página
  page_number = request.GET.get('page')
  page_obj = paginator.get_page(page_number)
  return render(request, 'productosProductorAgri.html',
  {'page_obj': page_obj, 'categoria' : categoria, 'nombre' : nombre})

def tiendaPecuario(request):
  return render(request, 'pecuarioTienda.html')

def tiendaProducPecu(request, categoria):
  busqueda = request.GET.get('busqueda', '')
  disponibilidad = request.GET.get('disponibilidad', '')
  volumen = request.GET.get('volumen', '')
  unidad = request.GET.get('unidad', '')
  municipio_id = request.GET.get('municipio', '')
  productos_filtrados = productos.objects.filter(
       subsector__iexact='PECUARIO',
       categoria__iexact=categoria,
       estado=True
   )
  if busqueda:
       productos_filtrados = productos_filtrados.filter(nombreProductor__icontains=busqueda)
  if disponibilidad:
       productos_filtrados = productos_filtrados.filter(disponibilidad_entrega__iexact=disponibilidad)
  if volumen:
       productos_filtrados = productos_filtrados.filter(volumen_produccion__icontains=volumen)
  if unidad:
       productos_filtrados = productos_filtrados.filter(unidad_medidad__iexact=unidad)
  if municipio_id:
       productos_filtrados = productos_filtrados.filter(municipio__id=municipio_id)
  productos_filtrados = productos_filtrados.values(
       'nombreProductor', 'telefono', 'email'
   ).distinct()
  paginator = Paginator(productos_filtrados, 12)  # 9 productos por página
  page_number = request.GET.get('page')
  page_obj = paginator.get_page(page_number)

  todos_los_municipios = municipios.objects.all().order_by('nombre_municipio')

  return render(request, 'productoAgricultura.html',
  {
     'page_obj': page_obj, 
     'categoria' : categoria,
     'municipios': todos_los_municipios
     })

def productorProductorPecui(request, categoria, nombre):
  productos_filtrados = productos.objects.filter(subsector = 'PECUARIO',  categoria = categoria, nombreProductor = nombre, estado=True)
  paginator = Paginator(productos_filtrados, 9)  # 9 productos por página
  page_number = request.GET.get('page')
  page_obj = paginator.get_page(page_number)
  return render(request, 'productosProductorPecu.html',
  {'page_obj': page_obj, 'categoria' : categoria, 'nombre' : nombre})

def tiendaPesquero(request):
  productos_filtrados = productos.objects.filter(subsector = 'PESQUERO', estado=True)

  paginator = Paginator(productos_filtrados, 9)  # 9 productos por página
  page_number = request.GET.get('page')
  page_obj = paginator.get_page(page_number)

  return render(request, 'pesqueroTienda.html',
  {'page_obj': page_obj, 'tiendaPes' : tiendaPes})

def tiendaAcuicola(request):
  productos_filtrados = productos.objects.filter(subsector = 'ACUICOLA', estado=True)

  paginator = Paginator(productos_filtrados, 9)  # 9 productos por página
  page_number = request.GET.get('page')
  page_obj = paginator.get_page(page_number)

  return render(request, 'acuicolaTienda.html',
  {'page_obj': page_obj, 'tiendaAcu' : tiendaAcu})

def tiendaForestal(request):
  productos_filtrados = productos.objects.filter(subsector = 'FORESTAL', estado=True)

  paginator = Paginator(productos_filtrados, 9)  # 9 productos por página
  page_number = request.GET.get('page')
  page_obj = paginator.get_page(page_number)

  return render(request, 'forestalTienda.html',
  {'page_obj': page_obj, 'tiendaFor' : tiendaFor})

def tiendaIndustrial(request):
  busqueda = request.GET.get('busqueda', '')
  disponibilidad = request.GET.get('disponibilidad', '')
  volumen = request.GET.get('volumen', '')
  unidad = request.GET.get('unidad', '')
  municipio_id = request.GET.get('municipio', '')
  productos_filtrados = productos.objects.filter(
       subsector__iexact='AGROINDUSTRIAL',
       estado=True
   )
  if busqueda:
       productos_filtrados = productos_filtrados.filter(nombreProductor__icontains=busqueda)
  if disponibilidad:
       productos_filtrados = productos_filtrados.filter(disponibilidad_entrega__iexact=disponibilidad)
  if volumen:
       productos_filtrados = productos_filtrados.filter(volumen_produccion__icontains=volumen)
  if unidad:
       productos_filtrados = productos_filtrados.filter(unidad_medidad__iexact=unidad)
  if municipio_id:
       productos_filtrados = productos_filtrados.filter(municipio__id=municipio_id)
  productos_filtrados = productos_filtrados.values(
       'nombreProductor', 'telefono', 'email'
   ).distinct()
  paginator = Paginator(productos_filtrados, 12)  # 9 productos por página
  page_number = request.GET.get('page')
  page_obj = paginator.get_page(page_number)

  todos_los_municipios = municipios.objects.all().order_by('nombre_municipio')

  return render(request, 'productoIndustrial.html',
  {
     'page_obj': page_obj, 
     'categoria' : 'categoria',
     'municipios': todos_los_municipios
     })
"""   return render(request, 'industrialTienda.html') """

@login_required
def gestProd(request):
    prod = productos.objects.filter(estado = False)
    prodA = productos.objects.filter(estado = True)

    return render(request, 'productosGest.html', {
      'prod' : prod,
      'prodA' : prodA})

def productApproved(request, prod_id):
  prod = get_object_or_404(productos, pk= prod_id)
  if request.method == 'POST':
    prod.estado = True
    prod.save()
    messages.success(request, 'PRODUCTO APROBADO')
    return redirect('gestionProductos')

    
def productDesapproved(request, prodA_id):
  prod = get_object_or_404(productos, pk= prodA_id)
  if request.method == 'POST':
    prod.estado = False
    prod.save()
    messages.success(request, 'PRODUCTO DADO DE BAJA')
    return redirect('gestionProductos')

def signin(request):
    if request.method == 'GET':
        return render(request, 'login.html' , {
            'form' : AuthenticationForm
        })
    else:
        user = authenticate(request, username=request.POST['username'], password=request.POST['password'])
        if user is None:
             return render(request, 'login.html' , {
            'form' : AuthenticationForm,
            'error' : 'Usuario o Contraseña Incorrecto'
            })
        else: 
            login(request, user)
            return redirect('home')
 
@login_required
def signup(request):

    if request.method == 'GET':
        return render(request, 'signup.html', {
        'form': UserCreationForm
    })
    else: 
        if request.POST['password1'] == request.POST['password2']:
            try:
                user = User.objects.create_user(username=request.POST['username'], password=request.POST['password1'])
                user.save()
                login(request, user)
                return redirect('form')
            except IntegrityError: 
                return render(request, 'signup.html', {
                    'form': UserCreationForm, 
                    'error' : 'El usuario ya existe'
                })
        return render(request, 'signup.html', {
                    'form': UserCreationForm, 
                    'error' : 'LAS CONTRASEÑAS NO COINCIDEN '
                })

def signout(request):
    logout(request)
    return redirect('login')

@login_required
def form(request):
    if request.method == 'GET':
        muni = municipios.objects.all()
        return render(request, 'form.html', {
            'form' : financieras,
            'muni' : muni
        })
    else:
        form = financieras(request.POST)
        new_finan = form.save(commit=False)
        new_finan.save()
        messages.success(request, 'Registro guardado en la base de datos')
        return redirect('home')

def formProductos(request):
    if request.method == 'GET':
      muni = municipios.objects.all()
      return render(request, 'formProductos.html', {
          'form' : productosForm,
          'muni' : muni
      })
    else:
        nombreProductor = request.POST.get("nombreProductor")
        municipio = request.POST.get("municipio")
        localidad = request.POST.get("localidad")
        telefono = request.POST.get("telefono")
        email = request.POST.get("email") 

        nombreProducto = request.POST.getlist("nombreProducto[]")
        nombreMarca = request.POST.getlist("nombreMarca[]")
        subsectores = request.POST.getlist("subsector[]")
        categorias = request.POST.getlist("categoria[]")
        unidades = request.POST.getlist("unidad_medidad[]")
        volumenes = request.POST.getlist("volumen_produccion[]")
        disponibilidades = request.POST.getlist("disponibilidad_entrega[]")

        # Archivos
        imagenes = request.FILES.getlist("imagenProd[]")
        pdfs = request.FILES.getlist("archivo_pdf[]")

        comentarios = request.POST.get("comentarios[]")

        for i in range(len(nombreProducto)):
            categoria = categorias[i] if i < len(categorias) else None
            productoNew = productos.objects.create(
                nombreProductor=nombreProductor,
                municipio_id=municipio,
                localidad=localidad,
                telefono=telefono,
                email=email,
                comentarios=comentarios,
                nombreProducto=nombreProducto[i],
                nombreMarca=nombreMarca[i],
                subsector=subsectores[i],
                categoria=categoria,
                unidad_medidad=unidades[i],
                volumen_produccion=volumenes[i],
                disponibilidad_entrega=disponibilidades[i],
                imagenProd=imagenes[i] if i < len(imagenes) else None,
                archivo_pdf=pdfs[i] if i < len(pdfs) else None
            )
            
        #form = productosForm(request.POST, request.FILES)
        #new_prod = form.save(commit=False)
        #new_prod.save()
        # Enviar email de confirmación
        # subject = "SOLICITUD DE REGISTRO PRODUCTO EXITOSO"
        # message = f"Hola {new_prod.nombreProductor},\n\nHemos recibido tu solicitud para que publiquemos tu producto en la pagina ofical de Agronegocios:\n\n\n\nNos pondremos en contacto contigo cuando aprobemos tu producto y se pueda visualizar en la pagina web."
        # from_email = "agronegociossefader@gmail.com"
        # recipient_list = [new_prod.email]
        # send_mail(subject, message, from_email, recipient_list)
        messages.success(request, 'Producto registrado. Espere su autorización para que sea mostrado en la página web')
        return redirect('tiendaHome')



@login_required
def creditDetail(request, credit_id):
  credito = get_object_or_404(entidadesFinancieras2, pk=credit_id)
  return render(request, 'cred_detail.html', {
      'credito' : credito
  })

def prodDetail(request, product_id):
  product = get_object_or_404(productos, pk=product_id)
  return render(request, 'detailProducto.html', {
    'product' : product
  })

def indSec(request):
  return render(request, 'index.html')




def sectorAgri(request):
  return render(request, 'secAgricola.html')

def sectorPecu(request):
  return render(request, 'secPecuario.html')


def creditUpdate(request, credit_id):
  if request.method == 'GET':
    credito = get_object_or_404(entidadesFinancieras2, pk=credit_id)
    form = financieras(instance = credito)
    return render(request, 'cred_edit.html', {
        'credito' : credito,
        'form' : form
    })
  else:
    credito = get_object_or_404(entidadesFinancieras2, pk=credit_id)
    form = financieras(request.POST, instance=credito)
    form.save()
    return redirect('home')




@login_required
def reporte(request):
    bh = entidadesFinancieras2.objects.aggregate(bhsuma=Sum('beneficiarios_hombres'))
    bm = entidadesFinancieras2.objects.aggregate(bmsuma=Sum('beneficiarios_mujer'))
    valles_centrales = municipios.objects.get(region='VALLES CENTRALES')
    num_proyectos_VC = valles_centrales.entidades.Count()
    entidadesFINDECA = entidadesFinancieras2.objects.values("intermediario_financiero").filter(intermediario_financiero="'FINDECA', SOCIEDAD ANÓNIMA DE CAPITAL VARIABLE").count()
    entidadesACRIMEX = entidadesFinancieras2.objects.values("intermediario_financiero").filter(intermediario_financiero="COOPERATIVA ACREIMEX, SOCIEDAD COOPERATIVA DE AHORRO Y PRESTAMO").count()
    entidadesNEO = entidadesFinancieras2.objects.values("intermediario_financiero").filter(intermediario_financiero="NEGOCIOS EMPRESARIALES DE APOYO DE OAXACA, SOCIEDAD ANONIMA DE CAPITAL VARIABLE").count()
    entidadesFIRA = entidadesFinancieras2.objects.values("intermediario_financiero").filter(intermediario_financiero="FIDEICOMISOS INSTITUIDOS EN RELACION CON LA AGRICULTURA (FIRA)").count()
    entidadesOCO = entidadesFinancieras2.objects.values("intermediario_financiero").filter(intermediario_financiero="CAJA SOLIDARIA SAN DIONISIO OCOTEPEC, SOCIEDAD COOPERATIVA DE AHORRO Y PRESTAMO").count()

    total_creditos = entidadesFinancieras2.objects.values("id").count()

    region = municipios.objects.get()

    # region_istmo = entidadesFinancieras2.objects.values("region").filter(region="Istmo").count()
    # region_mixteca = entidadesFinancieras2.objects.values("region").filter(region="Mixteca").count() 
    #region_mixteca = entidadesFinancieras2.objects.annotate(region= Count('region')).filter()
    # region_costa = entidadesFinancieras2.objects.values("region").filter(region="Costa").count()   
    # region_sierra = entidadesFinancieras2.objects.values("region").filter(region="Sierra de Flores Magon").count()
    # region_sierraJuarez = entidadesFinancieras2.objects.values("region").filter(region="Sierra de Juarez").count()
    # region_sierraSur = entidadesFinancieras2.objects.values("region").filter(region="Sierra Sur").count()
    # region_valles = entidadesFinancieras2.objects.values("region").filter(region="Valles Centrales").count()

    concepto_infraestructuraAgroalimentaria = entidadesFinancieras2.objects.values("tipo_concepto").filter(tipo_concepto="Infraestructura Agroalimentaria").count()
    concepto_infraestructuraAgroindustrial = entidadesFinancieras2.objects.values("tipo_concepto").filter(tipo_concepto="Infraestructura Agroindustrial").count()
    concepto_mecanizacion = entidadesFinancieras2.objects.values("tipo_concepto").filter(tipo_concepto="Mecanizacion").count()
    concepto_equipamiento = entidadesFinancieras2.objects.values("tipo_concepto").filter(tipo_concepto="Equipamiento").count()
    concepto_agricultura = entidadesFinancieras2.objects.values("tipo_concepto").filter(tipo_concepto="Agricultura Protegida").count()
    concepto_rehabilitacion = entidadesFinancieras2.objects.values("tipo_concepto").filter(tipo_concepto="Rehabilitacion").count()
    prueba_nombre = entidadesFinancieras2.objects.get()

    bhtemplates = bh['bhsuma'] 
    bmtemplates = bm['bmsuma']    

    btotales = bhtemplates + bmtemplates   

    return render(request, 'reporte.html', {
        'total_creditos' : total_creditos,
        'bmtemplates' : bmtemplates,
        'bhtemplates' : bhtemplates,
        'btotales' : btotales,
        'entidadesFINDECA' : entidadesFINDECA,
        'entidadesACRIMEX' : entidadesACRIMEX,
        'entidadesNEO' : entidadesNEO,
        'entidadesFIRA' : entidadesFIRA,
        'entidadesOCO' : entidadesOCO,
        'concepto_infraestructuraAgroalimentaria' : concepto_infraestructuraAgroalimentaria,
        'concepto_infraestructuraAgroindustrial' : concepto_infraestructuraAgroindustrial,
        'concepto_mecanizacion' : concepto_mecanizacion,
        'concepto_equipamiento' : concepto_equipamiento,
        'concepto_agricultura' : concepto_agricultura,
        'concepto_rehabilitacion' : concepto_rehabilitacion,
        'num_proyectos_VC' : num_proyectos_VC

    })

@login_required
def graficas(request):


      #CANTIDAD DE PROYECTOS 
      conteo_VC = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES').values('municipio__region').annotate(total=Count('id')))
      conteo_IST = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO').values('municipio__region').annotate(total=Count('id')))
      conteo_MIX = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA').values('municipio__region').annotate(total=Count('id')))
      conteo_PAPA = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN').values('municipio__region').annotate(total=Count('id')))
      conteo_COS = (entidadesFinancieras2.objects.filter(municipio__region='COSTA').values('municipio__region').annotate(total=Count('id')))
      conteo_SJ = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ').values('municipio__region').annotate(total=Count('id')))
      conteo_SS = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR').values('municipio__region').annotate(total=Count('id')))
      conteo_SFM = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON').values('municipio__region').annotate(total=Count('id')))
      
      totalCPG = entidadesFinancieras2.objects.count()

      #MONTOS DE FINANCIAMIENTO
      monto_VC = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES').aggregate(sumatotal=Sum('monto_total')))
      monto_IST = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO').aggregate(sumatotal=Sum('monto_total')))
      monto_MIX = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA').aggregate(sumatotal=Sum('monto_total')))
      monto_PAPA = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN').aggregate(sumatotal=Sum('monto_total')))
      monto_COS = (entidadesFinancieras2.objects.filter(municipio__region='COSTA').aggregate(sumatotal=Sum('monto_total')))
      monto_SJ = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ').aggregate(sumatotal=Sum('monto_total')))
      monto_SS = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR').aggregate(sumatotal=Sum('monto_total')))
      monto_SFM = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON').aggregate(sumatotal=Sum('monto_total')))

      monto_VC_templates = monto_VC['sumatotal'] or 0
      monto_IST_templates = monto_IST['sumatotal'] or 0
      monto_MIX_templates = monto_MIX['sumatotal'] or 0
      monto_PAPA_templates = monto_PAPA['sumatotal'] or 0
      monto_COS_templates = monto_COS['sumatotal'] or 0
      monto_SJ_templates = monto_SJ['sumatotal'] or 0
      monto_SS_templates = monto_SS['sumatotal'] or 0
      monto_SFM_templates = monto_SFM['sumatotal'] or 0

      totalMFG = monto_VC_templates + monto_IST_templates + monto_MIX_templates + monto_PAPA_templates + monto_COS_templates + monto_SJ_templates + monto_SS_templates + monto_SFM_templates


      #GARANTIAS LIQUIDAS
      garantias_VC = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_IST = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_MIX = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_PAPA = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_COS = (entidadesFinancieras2.objects.filter(municipio__region='COSTA').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_SJ = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_SS = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_SFM = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      

      garantia_VC_templates = garantias_VC['sumatotal'] or 0
      garantia_IST_templates = garantias_IST['sumatotal'] or 0
      garantia_MIX_templates = garantias_MIX['sumatotal'] or 0
      garantia_PAPA_templates = garantias_PAPA['sumatotal'] or 0
      garantia_COS_templates = garantias_COS['sumatotal'] or 0
      garantia_SJ_templates = garantias_SJ['sumatotal'] or 0
      garantia_SS_templates = garantias_SS['sumatotal'] or 0
      garantia_SFM_templates = garantias_SFM['sumatotal']  or 0

      totalGLG = garantia_VC_templates + garantia_IST_templates + garantia_MIX_templates + garantia_PAPA_templates + garantia_COS_templates + garantia_SJ_templates + garantia_SS_templates + garantia_SFM_templates

      #BENEFICIARIOS 
      beneficiarios_VC = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_IST = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_MIX = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_PAPA = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_COS = (entidadesFinancieras2.objects.filter(municipio__region='COSTA').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_SJ = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_SS = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_SFM = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON').aggregate(sumatotal=Sum('total_beneficiarios')))

 
      beneficiarios_VC_T = beneficiarios_VC['sumatotal'] or 0
      beneficiarios_IST_T = beneficiarios_IST['sumatotal'] or 0
      beneficiarios_MIX_T = beneficiarios_MIX['sumatotal'] or 0
      beneficiarios_PAPA_T = beneficiarios_PAPA['sumatotal'] or 0
      beneficiarios_COS_T = beneficiarios_COS['sumatotal'] or 0
      beneficiarios_SJ_T = beneficiarios_SJ['sumatotal'] or 0
      beneficiarios_SS_T = beneficiarios_SS['sumatotal'] or 0
      beneficiarios_SFM_T = beneficiarios_SFM['sumatotal'] or 0

      totalBG = beneficiarios_VC_T + beneficiarios_IST_T + beneficiarios_MIX_T + beneficiarios_PAPA_T + beneficiarios_COS_T + beneficiarios_SJ_T + beneficiarios_SS_T + beneficiarios_SFM_T

      #E100
      E100_VC = (entidadesFinancieras2.objects.filter(municipio__eCien=True, municipio__region='VALLES CENTRALES').count())
      E100_IST = (entidadesFinancieras2.objects.filter(municipio__eCien=True, municipio__region='ISTMO').count())
      E100_MIX = (entidadesFinancieras2.objects.filter(municipio__eCien=True, municipio__region='MIXTECA').count())
      E100_PAPA = (entidadesFinancieras2.objects.filter(municipio__eCien=True, municipio__region='PAPALOAPAN').count())
      E100_COS = (entidadesFinancieras2.objects.filter(municipio__eCien=True, municipio__region='COSTA').count())
      E100_SJ = (entidadesFinancieras2.objects.filter(municipio__eCien=True, municipio__region='SIERRA DE JUAREZ').count())
      E100_SS = (entidadesFinancieras2.objects.filter(municipio__eCien=True, municipio__region='SIERRA SUR').count())
      E100_SFM = (entidadesFinancieras2.objects.filter(municipio__eCien=True, municipio__region='SIERRA DE FLORES MAGON').count())

      totalE100G = E100_VC + E100_IST + E100_MIX + E100_PAPA + E100_COS + E100_SJ + E100_SS + E100_SFM

      #PUEBLOSINDIGENAS
      PI_VC = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='VALLES CENTRALES').count())
      PI_IST = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='ISTMO').count())
      PI_MIX = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='MIXTECA').count())
      PI_PAPA = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='PAPALOAPAN').count())
      PI_COS = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='COSTA').count())
      PI_SJ = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='SIERRA DE JUAREZ').count())
      PI_SS = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='SIERRA SUR').count())
      PI_SFM = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='SIERRA DE FLORES MAGON').count())

      totalPIG = PI_VC + PI_IST + PI_MIX + PI_PAPA + PI_COS + PI_SJ + PI_SS + PI_SFM

      #EMPLEOS DIRECTOS
      empleos_VC = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES').aggregate(sumatotal=Sum('empleos_directos')))
      empleos_IST = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO').aggregate(sumatotal=Sum('empleos_directos')))
      empleos_MIX = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA').aggregate(sumatotal=Sum('empleos_directos')))
      empleos_PAPA = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN').aggregate(sumatotal=Sum('empleos_directos')))
      empleos_COS = (entidadesFinancieras2.objects.filter(municipio__region='COSTA').aggregate(sumatotal=Sum('empleos_directos')))
      empleos_SJ = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ').aggregate(sumatotal=Sum('empleos_directos')))
      empleos_SS = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR').aggregate(sumatotal=Sum('empleos_directos')))
      empleos_SFM = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON').aggregate(sumatotal=Sum('empleos_directos')))


      empleos_VC_T = empleos_VC['sumatotal'] or 0
      empleos_IST_T = empleos_IST['sumatotal'] or 0
      empleos_MIX_T = empleos_MIX['sumatotal'] or 0
      empleos_PAPA_T = empleos_PAPA['sumatotal'] or 0
      empleos_COS_T = empleos_COS['sumatotal'] or 0
      empleos_SJ_T = empleos_SJ['sumatotal'] or 0
      empleos_SS_T= empleos_SS['sumatotal'] or 0
      empleos_SFM_T = empleos_SFM['sumatotal'] or 0

      totalEDG = empleos_VC_T + empleos_IST_T + empleos_MIX_T + empleos_PAPA_T + empleos_COS_T + empleos_SJ_T + empleos_SS_T + empleos_SFM_T


      #CANTIDAD DE PROYECTOS 2023
      conteo_VC_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='VALLES CENTRALES').values('municipio__region').annotate(total=Count('id')))
      conteo_IST_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='ISTMO').values('municipio__region').annotate(total=Count('id')))
      conteo_MIX_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='MIXTECA').values('municipio__region').annotate(total=Count('id')))
      conteo_PAPA_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='PAPALOAPAN').values('municipio__region').annotate(total=Count('id')))
      conteo_COS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='COSTA').values('municipio__region').annotate(total=Count('id')))
      conteo_SJ_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA DE JUAREZ').values('municipio__region').annotate(total=Count('id')))
      conteo_SS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA SUR').values('municipio__region').annotate(total=Count('id')))
      conteo_SFM_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA DE FLORES MAGON').values('municipio__region').annotate(total=Count('id')))
      
      totalCPG_2023 = entidadesFinancieras2.objects.filter(fecha_inicio__year=2023).count()


      #MONTOS DE FINANCIAMIENTO 2023
      monto_VC_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='VALLES CENTRALES').aggregate(sumatotal=Sum('monto_total')))
      monto_IST_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='ISTMO').aggregate(sumatotal=Sum('monto_total')))
      monto_MIX_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='MIXTECA').aggregate(sumatotal=Sum('monto_total')))
      monto_PAPA_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='PAPALOAPAN').aggregate(sumatotal=Sum('monto_total')))
      monto_COS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='COSTA').aggregate(sumatotal=Sum('monto_total')))
      monto_SJ_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA DE JUAREZ').aggregate(sumatotal=Sum('monto_total')))
      monto_SS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA SUR').aggregate(sumatotal=Sum('monto_total')))
      monto_SFM_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA DE FLORES MAGON').aggregate(sumatotal=Sum('monto_total')))

      monto_VC_templates_2023 = monto_VC_2023['sumatotal'] or 0
      monto_IST_templates_2023 = monto_IST_2023['sumatotal'] or 0
      monto_MIX_templates_2023 = monto_MIX_2023['sumatotal'] or 0
      monto_PAPA_templates_2023 = monto_PAPA_2023['sumatotal'] or 0
      monto_COS_templates_2023 = monto_COS_2023['sumatotal'] or 0
      monto_SJ_templates_2023 = monto_SJ_2023['sumatotal'] or 0
      monto_SS_templates_2023 = monto_SS_2023['sumatotal'] or 0
      monto_SFM_templates_2023 = monto_SFM_2023['sumatotal'] or 0

      totalMFG_2023 = monto_VC_templates_2023 + monto_IST_templates_2023 + monto_MIX_templates_2023 + monto_PAPA_templates_2023 + monto_COS_templates_2023 + monto_SJ_templates_2023 + monto_SS_templates_2023 + monto_SFM_templates_2023


      #GARANTIAS LIQUIDAS 2023
      garantias_VC_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='VALLES CENTRALES').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_IST_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='ISTMO').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_MIX_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='MIXTECA').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_PAPA_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='PAPALOAPAN').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_COS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='COSTA').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_SJ_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA DE JUAREZ').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_SS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA SUR').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_SFM_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA DE FLORES MAGON').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      

      garantia_VC_templates_2023 = garantias_VC_2023['sumatotal'] or 0
      garantia_IST_templates_2023 = garantias_IST_2023['sumatotal'] or 0
      garantia_MIX_templates_2023 = garantias_MIX_2023['sumatotal'] or 0
      garantia_PAPA_templates_2023 = garantias_PAPA_2023['sumatotal'] or 0
      garantia_COS_templates_2023 = garantias_COS_2023['sumatotal'] or 0
      garantia_SJ_templates_2023 = garantias_SJ_2023['sumatotal'] or 0
      garantia_SS_templates_2023 = garantias_SS_2023['sumatotal'] or 0
      garantia_SFM_templates_2023 = garantias_SFM_2023['sumatotal'] or 0

      totalGLG_2023 = garantia_VC_templates_2023 + garantia_IST_templates_2023 + garantia_MIX_templates_2023 + garantia_PAPA_templates_2023 + garantia_COS_templates_2023 + garantia_SJ_templates_2023 + garantia_SS_templates_2023 + garantia_SFM_templates_2023



      #BENEFICIARIOS 2023
      beneficiarios_VC_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='VALLES CENTRALES').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_IST_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='ISTMO').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_MIX_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='MIXTECA').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_PAPA_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='PAPALOAPAN').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_COS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='COSTA').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_SJ_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA DE JUAREZ').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_SS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA SUR').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_SFM_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA DE FLORES MAGON').aggregate(sumatotal=Sum('total_beneficiarios')))

 
      beneficiarios_VC_T_2023 = beneficiarios_VC_2023['sumatotal'] or 0
      beneficiarios_IST_T_2023 = beneficiarios_IST_2023['sumatotal'] or 0
      beneficiarios_MIX_T_2023 = beneficiarios_MIX_2023['sumatotal'] or 0
      beneficiarios_PAPA_T_2023 = beneficiarios_PAPA_2023['sumatotal'] or 0
      beneficiarios_COS_T_2023 = beneficiarios_COS_2023['sumatotal'] or 0
      beneficiarios_SJ_T_2023 = beneficiarios_SJ_2023['sumatotal'] or 0
      beneficiarios_SS_T_2023 = beneficiarios_SS_2023['sumatotal'] or 0
      beneficiarios_SFM_T_2023 = beneficiarios_SFM_2023['sumatotal'] or 0

      totalBG_2023 = beneficiarios_VC_T_2023 + beneficiarios_IST_T_2023 + beneficiarios_MIX_T_2023 + beneficiarios_PAPA_T_2023 + beneficiarios_COS_T_2023 + beneficiarios_SJ_T_2023 + beneficiarios_SS_T_2023 + beneficiarios_SFM_T_2023



      #E1002023
      E100_VC_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__eCien=True, municipio__region='VALLES CENTRALES').count())
      E100_IST_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__eCien=True, municipio__region='ISTMO').count())
      E100_MIX_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__eCien=True, municipio__region='MIXTECA').count())
      E100_PAPA_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__eCien=True, municipio__region='PAPALOAPAN').count())
      E100_COS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__eCien=True, municipio__region='COSTA').count())
      E100_SJ_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__eCien=True, municipio__region='SIERRA DE JUAREZ').count())
      E100_SS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__eCien=True, municipio__region='SIERRA SUR').count())
      E100_SFM_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__eCien=True, municipio__region='SIERRA DE FLORES MAGON').count())

      totalE100G_2023 = E100_VC_2023 + E100_IST_2023 + E100_MIX_2023 + E100_PAPA_2023 + E100_COS_2023 + E100_SJ_2023 + E100_SS_2023 + E100_SFM_2023


      #PUEBLOSINDIGENAS 2023
      PI_VC_2023 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='VALLES CENTRALES', fecha_inicio__year=2023).count())
      PI_IST_2023 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='ISTMO', fecha_inicio__year=2023).count())
      PI_MIX_2023 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='MIXTECA', fecha_inicio__year=2023).count())
      PI_PAPA_2023 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='PAPALOAPAN', fecha_inicio__year=2023).count())
      PI_COS_2023 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='COSTA', fecha_inicio__year=2023).count())
      PI_SJ_2023 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='SIERRA DE JUAREZ', fecha_inicio__year=2023).count())
      PI_SS_2023 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='SIERRA SUR', fecha_inicio__year=2023).count())
      PI_SFM_2023 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='SIERRA DE FLORES MAGON', fecha_inicio__year=2023).count())

      totalPIG_2023 = PI_VC_2023 + PI_IST_2023 + PI_MIX_2023 + PI_PAPA_2023 + PI_COS_2023 + PI_SJ_2023 + PI_SS_2023 + PI_SFM_2023


      #EMPLEOS DIRECTOS 2023
      empleos_VC_2023 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', fecha_inicio__year=2023).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_IST_2023 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', fecha_inicio__year=2023).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_MIX_2023 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', fecha_inicio__year=2023).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_PAPA_2023 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', fecha_inicio__year=2023).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_COS_2023 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', fecha_inicio__year=2023).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_SJ_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', fecha_inicio__year=2023).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_SS_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', fecha_inicio__year=2023).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_SFM_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', fecha_inicio__year=2023).aggregate(sumatotal=Sum('empleos_directos')))

      empleos_VC_T_2023 = empleos_VC_2023['sumatotal'] or 0
      empleos_IST_T_2023 = empleos_IST_2023['sumatotal'] or 0
      empleos_MIX_T_2023 = empleos_MIX_2023['sumatotal'] or 0
      empleos_PAPA_T_2023 = empleos_PAPA_2023['sumatotal'] or 0
      empleos_COS_T_2023 = empleos_COS_2023['sumatotal'] or 0
      empleos_SJ_T_2023 = empleos_SJ_2023['sumatotal'] or 0
      empleos_SS_T_2023 = empleos_SS_2023['sumatotal'] or 0
      empleos_SFM_T_2023 = empleos_SFM_2023['sumatotal'] or 0

      totalEDG_2023 = empleos_VC_T_2023 + empleos_IST_T_2023 + empleos_MIX_T_2023 + empleos_PAPA_T_2023 + empleos_COS_T_2023 + empleos_SJ_T_2023 + empleos_SS_T_2023 + empleos_SFM_T_2023


      #CANTIDAD DE PROYECTOS 2024
      conteo_VC_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='VALLES CENTRALES').values('municipio__region').annotate(total=Count('id')))
      conteo_IST_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='ISTMO').values('municipio__region').annotate(total=Count('id')))
      conteo_MIX_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='MIXTECA').values('municipio__region').annotate(total=Count('id')))
      conteo_PAPA_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='PAPALOAPAN').values('municipio__region').annotate(total=Count('id')))
      conteo_COS_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='COSTA').values('municipio__region').annotate(total=Count('id')))
      conteo_SJ_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='SIERRA DE JUAREZ').values('municipio__region').annotate(total=Count('id')))
      conteo_SS_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='SIERRA SUR').values('municipio__region').annotate(total=Count('id')))
      conteo_SFM_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='SIERRA DE FLORES MAGON').values('municipio__region').annotate(total=Count('id')))
      
      totalCPG_2024 = entidadesFinancieras2.objects.filter(fecha_inicio__year=2024).count()

      #MONTOS DE FINANCIAMIENTO 2024
      monto_VC_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='VALLES CENTRALES').aggregate(sumatotal=Sum('monto_total')))
      monto_IST_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='ISTMO').aggregate(sumatotal=Sum('monto_total')))
      monto_MIX_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='MIXTECA').aggregate(sumatotal=Sum('monto_total')))
      monto_PAPA_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='PAPALOAPAN').aggregate(sumatotal=Sum('monto_total')))
      monto_COS_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='COSTA').aggregate(sumatotal=Sum('monto_total')))
      monto_SJ_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='SIERRA DE JUAREZ').aggregate(sumatotal=Sum('monto_total')))
      monto_SS_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='SIERRA SUR').aggregate(sumatotal=Sum('monto_total')))
      monto_SFM_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='SIERRA DE FLORES MAGON').aggregate(sumatotal=Sum('monto_total')))

      monto_VC_templates_2024 = monto_VC_2024['sumatotal'] or 0
      monto_IST_templates_2024 = monto_IST_2024['sumatotal'] or 0
      monto_MIX_templates_2024 = monto_MIX_2024['sumatotal'] or 0
      monto_PAPA_templates_2024 = monto_PAPA_2024['sumatotal'] or 0
      monto_COS_templates_2024 = monto_COS_2024['sumatotal'] or 0
      monto_SJ_templates_2024 = monto_SJ_2024['sumatotal'] or 0
      monto_SS_templates_2024 = monto_SS_2024['sumatotal'] or 0
      monto_SFM_templates_2024 = monto_SFM_2024['sumatotal'] or 0


      totalMFG_2024 = monto_VC_templates_2024 + monto_IST_templates_2024 + monto_MIX_templates_2024 + monto_PAPA_templates_2024 + monto_COS_templates_2024 + monto_SJ_templates_2024 + monto_SS_templates_2024 + monto_SFM_templates_2024


      #GARANTIAS LIQUIDAS 2024
      garantias_VC_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='VALLES CENTRALES').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_IST_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='ISTMO').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_MIX_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='MIXTECA').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_PAPA_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='PAPALOAPAN').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_COS_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='COSTA').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_SJ_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='SIERRA DE JUAREZ').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_SS_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='SIERRA SUR').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_SFM_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='SIERRA DE FLORES MAGON').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      

      garantia_VC_templates_2024 = garantias_VC_2024['sumatotal'] or 0
      garantia_IST_templates_2024 = garantias_IST_2024['sumatotal'] or 0
      garantia_MIX_templates_2024 = garantias_MIX_2024['sumatotal'] or 0
      garantia_PAPA_templates_2024 = garantias_PAPA_2024['sumatotal'] or 0
      garantia_COS_templates_2024 = garantias_COS_2024['sumatotal'] or 0
      garantia_SJ_templates_2024 = garantias_SJ_2024['sumatotal'] or 0
      garantia_SS_templates_2024 = garantias_SS_2024['sumatotal'] or 0
      garantia_SFM_templates_2024 = garantias_SFM_2024['sumatotal'] or 0

      totalGLG_2024 = garantia_VC_templates_2024 + garantia_IST_templates_2024 + garantia_MIX_templates_2024 + garantia_PAPA_templates_2024 + garantia_COS_templates_2024 + garantia_SJ_templates_2024 + garantia_SS_templates_2024 + garantia_SFM_templates_2024


      #BENEFICIARIOS 2024
      beneficiarios_VC_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='VALLES CENTRALES').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_IST_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='ISTMO').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_MIX_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='MIXTECA').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_PAPA_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='PAPALOAPAN').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_COS_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='COSTA').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_SJ_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='SIERRA DE JUAREZ').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_SS_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='SIERRA SUR').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_SFM_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='SIERRA DE FLORES MAGON').aggregate(sumatotal=Sum('total_beneficiarios')))

 
      beneficiarios_VC_T_2024 = beneficiarios_VC_2024['sumatotal'] or 0 
      beneficiarios_IST_T_2024 = beneficiarios_IST_2024['sumatotal'] or 0 
      beneficiarios_MIX_T_2024 = beneficiarios_MIX_2024['sumatotal'] or 0 
      beneficiarios_PAPA_T_2024 = beneficiarios_PAPA_2024['sumatotal'] or 0 
      beneficiarios_COS_T_2024 = beneficiarios_COS_2024['sumatotal'] or 0 
      beneficiarios_SJ_T_2024 = beneficiarios_SJ_2024['sumatotal'] or 0 
      beneficiarios_SS_T_2024 = beneficiarios_SS_2024['sumatotal'] or 0 
      beneficiarios_SFM_T_2024 = beneficiarios_SFM_2024['sumatotal'] or 0 

      totalBG_2024 = beneficiarios_VC_T_2024 + beneficiarios_IST_T_2024 + beneficiarios_MIX_T_2024 + beneficiarios_PAPA_T_2024 + beneficiarios_COS_T_2024 + beneficiarios_SJ_T_2024 + beneficiarios_SS_T_2024 + beneficiarios_SFM_T_2024



      #E1002024
      E100_VC_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__eCien=True, municipio__region='VALLES CENTRALES').count())
      E100_IST_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__eCien=True, municipio__region='ISTMO').count())
      E100_MIX_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__eCien=True, municipio__region='MIXTECA').count())
      E100_PAPA_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__eCien=True, municipio__region='PAPALOAPAN').count())
      E100_COS_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__eCien=True, municipio__region='COSTA').count())
      E100_SJ_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__eCien=True, municipio__region='SIERRA DE JUAREZ').count())
      E100_SS_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__eCien=True, municipio__region='SIERRA SUR').count())
      E100_SFM_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__eCien=True, municipio__region='SIERRA DE FLORES MAGON').count())

      totalE100G_2024 = E100_VC_2024 + E100_IST_2024 + E100_MIX_2024 + E100_PAPA_2024 + E100_COS_2024 + E100_SJ_2024 + E100_SS_2024 + E100_SFM_2024


      #PUEBLOSINDIGENAS 2024
      PI_VC_2024 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='VALLES CENTRALES', fecha_inicio__year=2024).count())
      PI_IST_2024 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='ISTMO', fecha_inicio__year=2024).count())
      PI_MIX_2024 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='MIXTECA', fecha_inicio__year=2024).count())
      PI_PAPA_2024 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='PAPALOAPAN', fecha_inicio__year=2024).count())
      PI_COS_2024 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='COSTA', fecha_inicio__year=2024).count())
      PI_SJ_2024 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='SIERRA DE JUAREZ', fecha_inicio__year=2024).count())
      PI_SS_2024 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='SIERRA SUR', fecha_inicio__year=2024).count())
      PI_SFM_2024 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='SIERRA DE FLORES MAGON', fecha_inicio__year=2024).count())

      totalPIG_2024 = PI_VC_2024 + PI_IST_2024 + PI_MIX_2024 + PI_PAPA_2024 + PI_COS_2024 + PI_SJ_2024 + PI_SS_2024 + PI_SFM_2024


      #EMPLEOS DIRECTOS 2024
      empleos_VC_2024 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', fecha_inicio__year=2024).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_IST_2024 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', fecha_inicio__year=2024).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_MIX_2024 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', fecha_inicio__year=2024).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_PAPA_2024 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', fecha_inicio__year=2024).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_COS_2024 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', fecha_inicio__year=2024).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_SJ_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', fecha_inicio__year=2024).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_SS_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', fecha_inicio__year=2024).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_SFM_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', fecha_inicio__year=2024).aggregate(sumatotal=Sum('empleos_directos')))

      empleos_VC_T_2024 = empleos_VC_2024['sumatotal'] or 0
      empleos_IST_T_2024 = empleos_IST_2024['sumatotal'] or 0
      empleos_MIX_T_2024 = empleos_MIX_2024['sumatotal'] or 0
      empleos_PAPA_T_2024 = empleos_PAPA_2024['sumatotal'] or 0
      empleos_COS_T_2024 = empleos_COS_2024['sumatotal'] or 0
      empleos_SJ_T_2024 = empleos_SJ_2024['sumatotal'] or 0
      empleos_SS_T_2024 = empleos_SS_2024['sumatotal'] or 0
      empleos_SFM_T_2024 = empleos_SFM_2024['sumatotal'] or 0       

      totalEDG_2024 = empleos_VC_T_2024 + empleos_IST_T_2024 + empleos_MIX_T_2024 + empleos_PAPA_T_2024 + empleos_COS_T_2024 + empleos_SJ_T_2024 + empleos_SS_T_2024 + empleos_SFM_T_2024



      #CANTIDAD DE MUNICIPIOS GENERAL
      can_municipios_VC = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES').values('municipio').distinct().count())
      can_municipios_IST = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO').values('municipio').distinct().count())
      can_municipios_MIX = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA').values('municipio').distinct().count())
      can_municipios_PAPA = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN').values('municipio').distinct().count())
      can_municipios_COS = (entidadesFinancieras2.objects.filter(municipio__region='COSTA').values('municipio').distinct().count())
      can_municipios_SJ = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ').values('municipio').distinct().count())
      can_municipios_SS = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR').values('municipio').distinct().count())
      can_municipios_SFM = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON').values('municipio').distinct().count())

      totalCMG = can_municipios_VC + can_municipios_IST + can_municipios_MIX + can_municipios_PAPA + can_municipios_COS + can_municipios_SJ + can_municipios_SS + can_municipios_SFM


      #CANTIDAD DE MUNICIPIOS GENERAL 2023
      can_municipios_VC_2023 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', fecha_inicio__year=2023).values('municipio').distinct().count())
      can_municipios_IST_2023 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', fecha_inicio__year=2023).values('municipio').distinct().count())
      can_municipios_MIX_2023 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', fecha_inicio__year=2023).values('municipio').distinct().count())
      can_municipios_PAPA_2023 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', fecha_inicio__year=2023).values('municipio').distinct().count())
      can_municipios_COS_2023 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', fecha_inicio__year=2023).values('municipio').distinct().count())
      can_municipios_SJ_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', fecha_inicio__year=2023).values('municipio').distinct().count())
      can_municipios_SS_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', fecha_inicio__year=2023).values('municipio').distinct().count())
      can_municipios_SFM_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', fecha_inicio__year=2023).values('municipio').distinct().count())

      totalCMG_2023 = can_municipios_VC_2023 + can_municipios_IST_2023 + can_municipios_MIX_2023 + can_municipios_PAPA_2023 + can_municipios_COS_2023 + can_municipios_SJ_2023 + can_municipios_SS_2023 + can_municipios_SFM_2023



      #CANTIDAD DE MUNICIPIOS GENERAL 2024
      can_municipios_VC_2024 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', fecha_inicio__year=2024).values('municipio').distinct().count())
      can_municipios_IST_2024 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', fecha_inicio__year=2024).values('municipio').distinct().count())
      can_municipios_MIX_2024 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', fecha_inicio__year=2024).values('municipio').distinct().count())
      can_municipios_PAPA_2024 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', fecha_inicio__year=2024).values('municipio').distinct().count())
      can_municipios_COS_2024 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', fecha_inicio__year=2024).values('municipio').distinct().count())
      can_municipios_SJ_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', fecha_inicio__year=2024).values('municipio').distinct().count())
      can_municipios_SS_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', fecha_inicio__year=2024).values('municipio').distinct().count())
      can_municipios_SFM_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', fecha_inicio__year=2024).values('municipio').distinct().count())

      totalCMG_2024 = can_municipios_VC_2024 + can_municipios_IST_2024 + can_municipios_MIX_2024 + can_municipios_PAPA_2024 + can_municipios_COS_2024 + can_municipios_SJ_2024 + can_municipios_SS_2024 + can_municipios_SFM_2024


      #CANTIDAD POR CONCEPTOS DE APOYO 

      cantidad_ct = (entidadesFinancieras2.objects.filter(tipo_concepto='CAPITAL DE TRABAJO').count())
      cantidad_eq = (entidadesFinancieras2.objects.filter(tipo_concepto='EQUIPAMIENTO').count())
      cantidad_iaa = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROALIMENTARIA').count())
      cantidad_iai = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROINDUSTRIAL').count())
      cantidad_ap = (entidadesFinancieras2.objects.filter(tipo_concepto='AGRICULTURA PROTEGIDA').count())
      cantidad_mec = (entidadesFinancieras2.objects.filter(tipo_concepto='MECANIZACION').count())
      cantidad_re = (entidadesFinancieras2.objects.filter(tipo_concepto='REHABILITACION').count())

      total_concepto = cantidad_ct + cantidad_eq + cantidad_iaa + cantidad_iai + cantidad_ap + cantidad_mec + cantidad_re



      #MONTO DE FINANCIAMIENTO POR CONCEPTO DE APOYO
      monto_ct = (entidadesFinancieras2.objects.filter(tipo_concepto='CAPITAL DE TRABAJO').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_eq = (entidadesFinancieras2.objects.filter(tipo_concepto='EQUIPAMIENTO').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_iaa = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROALIMENTARIA').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_iai = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROINDUSTRIAL').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_ap = (entidadesFinancieras2.objects.filter(tipo_concepto='AGRICULTURA PROTEGIDA').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_mec = (entidadesFinancieras2.objects.filter(tipo_concepto='MECANIZACION').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_re = (entidadesFinancieras2.objects.filter(tipo_concepto='REHABILITACION').aggregate(sumatotal=Sum('monto_total')))['sumatotal']

      #GARANTIAS POR CONCEPTO DE APOYO
      garantias_ct = (entidadesFinancieras2.objects.filter(tipo_concepto='CAPITAL DE TRABAJO').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_eq = (entidadesFinancieras2.objects.filter(tipo_concepto='EQUIPAMIENTO').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_iaa = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROALIMENTARIA').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_iai = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROINDUSTRIAL').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_ap = (entidadesFinancieras2.objects.filter(tipo_concepto='AGRICULTURA PROTEGIDA').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_mec = (entidadesFinancieras2.objects.filter(tipo_concepto='MECANIZACION').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_re = (entidadesFinancieras2.objects.filter(tipo_concepto='REHABILITACION').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']




     #CANTIDAD POR CONCEPTOS DE APOYO 2023
      cantidad_ct_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='CAPITAL DE TRABAJO', fecha_inicio__year=2023).count())
      cantidad_eq_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='EQUIPAMIENTO', fecha_inicio__year=2023).count())
      cantidad_iaa_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROALIMENTARIA', fecha_inicio__year=2023).count())
      cantidad_iai_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROINDUSTRIAL', fecha_inicio__year=2023).count())
      cantidad_ap_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='AGRICULTURA PROTEGIDA', fecha_inicio__year=2023).count())
      cantidad_mec_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='MECANIZACION', fecha_inicio__year=2023).count())
      cantidad_re_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='REHABILITACION', fecha_inicio__year=2023).count())


      #MONTO DE FINANCIAMIENTO POR CONCEPTO DE APOYO 2023
      monto_ct_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='CAPITAL DE TRABAJO', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_eq_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='EQUIPAMIENTO', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_iaa_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROALIMENTARIA', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_iai_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROINDUSTRIAL', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_ap_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='AGRICULTURA PROTEGIDA', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_mec_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='MECANIZACION', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_re_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='REHABILITACION', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']

      #GARANTIAS POR CONCEPTO DE APOYO 2023
      garantias_ct_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='CAPITAL DE TRABAJO', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_eq_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='EQUIPAMIENTO', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_iaa_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROALIMENTARIA', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_iai_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROINDUSTRIAL', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_ap_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='AGRICULTURA PROTEGIDA', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_mec_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='MECANIZACION', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_re_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='REHABILITACION', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']





 #CANTIDAD POR CONCEPTOS DE APOYO 2024
      cantidad_ct_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='CAPITAL DE TRABAJO', fecha_inicio__year=2024).count())
      cantidad_eq_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='EQUIPAMIENTO', fecha_inicio__year=2024).count())
      cantidad_iaa_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROALIMENTARIA', fecha_inicio__year=2024).count())
      cantidad_iai_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROINDUSTRIAL', fecha_inicio__year=2024).count())
      cantidad_ap_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='AGRICULTURA PROTEGIDA', fecha_inicio__year=2024).count())
      cantidad_mec_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='MECANIZACION', fecha_inicio__year=2024).count())
      cantidad_re_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='REHABILITACION', fecha_inicio__year=2024).count())


      #MONTO DE FINANCIAMIENTO POR CONCEPTO DE APOYO 2024
      monto_ct_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='CAPITAL DE TRABAJO', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_eq_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='EQUIPAMIENTO', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_iaa_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROALIMENTARIA', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_iai_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROINDUSTRIAL', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_ap_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='AGRICULTURA PROTEGIDA', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_mec_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='MECANIZACION', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_re_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='REHABILITACION', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']

      #GARANTIAS POR CONCEPTO DE APOYO 2024
      garantias_ct_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='CAPITAL DE TRABAJO', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_eq_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='EQUIPAMIENTO', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_iaa_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROALIMENTARIA', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_iai_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROINDUSTRIAL', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_ap_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='AGRICULTURA PROTEGIDA', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_mec_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='MECANIZACION', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_re_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='REHABILITACION', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']






      #PROYECTOS DE INVERSIÓN POR SUBSECTOR Y POR REGION
      valles_agri = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Agricola').count())
      istmo_agri = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Agricola').count())
      costa_agri = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Agricola').count())
      papa_agri = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Agricola').count())
      mix_agri = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Agricola').count())
      sjua_agri = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Agricola').count())
      ssur_agri = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Agricola').count())
      sflm_agri = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Agricola').count())
      total_agri = (entidadesFinancieras2.objects.filter(subsector='Agricola').count())

      valles_pec = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Pecuario').count())
      istmo_pec = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Pecuario').count())
      costa_pec = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Pecuario').count())
      papa_pec = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Pecuario').count())
      mix_pec = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Pecuario').count())
      sjua_pec = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Pecuario').count())
      ssur_pec = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Pecuario').count())
      sflm_pec = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Pecuario').count())
      total_pec = (entidadesFinancieras2.objects.filter(subsector='Pecuario').count())

      valles_acu = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Acuicola').count())
      istmo_acu = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Acuicola').count())
      costa_acu = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Acuicola').count())
      papa_acu = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Acuicola').count())
      mix_acu = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Acuicola').count())
      sjua_acu = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Acuicola').count())
      ssur_acu = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Acuicola').count())
      sflm_acu = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Acuicola').count())
      total_acu = (entidadesFinancieras2.objects.filter(subsector='Acuicola').count())


      valles_pes = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Pesquero').count())
      istmo_pes = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Pesquero').count())
      costa_pes = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Pesquero').count())
      papa_pes = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Pesquero').count())
      mix_pes = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Pesquero').count())
      sjua_pes = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Pesquero').count())
      ssur_pes = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Pesquero').count())
      sflm_pes = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Pesquero').count())
      total_pes = (entidadesFinancieras2.objects.filter(subsector='Pesquero').count())

      valles_for = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Forestal').count())
      istmo_for = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Forestal').count())
      costa_for = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Forestal').count())
      papa_for = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Forestal').count())
      mix_for = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Forestal').count())
      sjua_for = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Forestal').count())
      ssur_for = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Forestal').count())
      sflm_for = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Forestal').count())
      total_for = (entidadesFinancieras2.objects.filter(subsector='Forestal').count())




      #PROYECTOS DE INVERSIÓN POR SUBSECTOR Y POR REGION 2023
      valles_agri_2023 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Agricola', fecha_inicio__year=2023).count())
      istmo_agri_2023 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Agricola', fecha_inicio__year=2023).count())
      costa_agri_2023 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Agricola', fecha_inicio__year=2023).count())
      papa_agri_2023 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Agricola', fecha_inicio__year=2023).count())
      mix_agri_2023 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Agricola', fecha_inicio__year=2023).count())
      sjua_agri_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Agricola', fecha_inicio__year=2023).count())
      ssur_agri_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Agricola', fecha_inicio__year=2023).count())
      sflm_agri_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Agricola', fecha_inicio__year=2023).count())
      total_agri_2023 = (entidadesFinancieras2.objects.filter(subsector='Agricola', fecha_inicio__year=2023).count())

      valles_pec_2023 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Pecuario', fecha_inicio__year=2023).count())
      istmo_pec_2023 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Pecuario', fecha_inicio__year=2023).count())
      costa_pec_2023 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Pecuario', fecha_inicio__year=2023).count())
      papa_pec_2023 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Pecuario', fecha_inicio__year=2023).count())
      mix_pec_2023 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Pecuario', fecha_inicio__year=2023).count())
      sjua_pec_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Pecuario', fecha_inicio__year=2023).count())
      ssur_pec_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Pecuario', fecha_inicio__year=2023).count())
      sflm_pec_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Pecuario', fecha_inicio__year=2023).count())
      total_pec_2023 = (entidadesFinancieras2.objects.filter(subsector='Pecuario', fecha_inicio__year=2023).count())

      valles_acu_2023 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Acuicola', fecha_inicio__year=2023).count())
      istmo_acu_2023 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Acuicola', fecha_inicio__year=2023).count())
      costa_acu_2023 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Acuicola', fecha_inicio__year=2023).count())
      papa_acu_2023 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Acuicola', fecha_inicio__year=2023).count())
      mix_acu_2023 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Acuicola', fecha_inicio__year=2023).count())
      sjua_acu_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Acuicola', fecha_inicio__year=2023).count())
      ssur_acu_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Acuicola', fecha_inicio__year=2023).count())
      sflm_acu_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Acuicola', fecha_inicio__year=2023).count())
      total_acu_2023 = (entidadesFinancieras2.objects.filter(subsector='Acuicola', fecha_inicio__year=2023).count())


      valles_pes_2023 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Pesquero', fecha_inicio__year=2023).count())
      istmo_pes_2023 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Pesquero', fecha_inicio__year=2023).count())
      costa_pes_2023 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Pesquero', fecha_inicio__year=2023).count())
      papa_pes_2023 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Pesquero', fecha_inicio__year=2023).count())
      mix_pes_2023 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Pesquero', fecha_inicio__year=2023).count())
      sjua_pes_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Pesquero', fecha_inicio__year=2023).count())
      ssur_pes_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Pesquero', fecha_inicio__year=2023).count())
      sflm_pes_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Pesquero', fecha_inicio__year=2023).count())
      total_pes_2023 = (entidadesFinancieras2.objects.filter(subsector='Pesquero', fecha_inicio__year=2023).count())

      valles_for_2023 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Forestal', fecha_inicio__year=2023).count())
      istmo_for_2023 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Forestal', fecha_inicio__year=2023).count())
      costa_for_2023 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Forestal', fecha_inicio__year=2023).count())
      papa_for_2023 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Forestal', fecha_inicio__year=2023).count())
      mix_for_2023 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Forestal', fecha_inicio__year=2023).count())
      sjua_for_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Forestal', fecha_inicio__year=2023).count())
      ssur_for_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Forestal', fecha_inicio__year=2023).count())
      sflm_for_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Forestal', fecha_inicio__year=2023).count())
      total_for_2023 = (entidadesFinancieras2.objects.filter(subsector='Forestal', fecha_inicio__year=2023).count())



      #PROYECTOS DE INVERSIÓN POR SUBSECTOR Y POR REGION 2024
      valles_agri_2024 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Agricola', fecha_inicio__year=2024).count())
      istmo_agri_2024 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Agricola', fecha_inicio__year=2024).count())
      costa_agri_2024 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Agricola', fecha_inicio__year=2024).count())
      papa_agri_2024 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Agricola', fecha_inicio__year=2024).count())
      mix_agri_2024 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Agricola', fecha_inicio__year=2024).count())
      sjua_agri_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Agricola', fecha_inicio__year=2024).count())
      ssur_agri_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Agricola', fecha_inicio__year=2024).count())
      sflm_agri_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Agricola', fecha_inicio__year=2024).count())
      total_agri_2024 = (entidadesFinancieras2.objects.filter(subsector='Agricola', fecha_inicio__year=2024).count())

      valles_pec_2024 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Pecuario', fecha_inicio__year=2024).count())
      istmo_pec_2024 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Pecuario', fecha_inicio__year=2024).count())
      costa_pec_2024 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Pecuario', fecha_inicio__year=2024).count())
      papa_pec_2024 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Pecuario', fecha_inicio__year=2024).count())
      mix_pec_2024 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Pecuario', fecha_inicio__year=2024).count())
      sjua_pec_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Pecuario', fecha_inicio__year=2024).count())
      ssur_pec_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Pecuario', fecha_inicio__year=2024).count())
      sflm_pec_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Pecuario', fecha_inicio__year=2024).count())
      total_pec_2024 = (entidadesFinancieras2.objects.filter(subsector='Pecuario', fecha_inicio__year=2024).count())

      valles_acu_2024 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Acuicola', fecha_inicio__year=2024).count())
      istmo_acu_2024 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Acuicola', fecha_inicio__year=2024).count())
      costa_acu_2024 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Acuicola', fecha_inicio__year=2024).count())
      papa_acu_2024 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Acuicola', fecha_inicio__year=2024).count())
      mix_acu_2024 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Acuicola', fecha_inicio__year=2024).count())
      sjua_acu_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Acuicola', fecha_inicio__year=2024).count())
      ssur_acu_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Acuicola', fecha_inicio__year=2024).count())
      sflm_acu_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Acuicola', fecha_inicio__year=2024).count())
      total_acu_2024 = (entidadesFinancieras2.objects.filter(subsector='Acuicola', fecha_inicio__year=2024).count())


      valles_pes_2024 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Pesquero', fecha_inicio__year=2024).count())
      istmo_pes_2024 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Pesquero', fecha_inicio__year=2024).count())
      costa_pes_2024 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Pesquero', fecha_inicio__year=2024).count())
      papa_pes_2024 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Pesquero', fecha_inicio__year=2024).count())
      mix_pes_2024 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Pesquero', fecha_inicio__year=2024).count())
      sjua_pes_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Pesquero', fecha_inicio__year=2024).count())
      ssur_pes_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Pesquero', fecha_inicio__year=2024).count())
      sflm_pes_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Pesquero', fecha_inicio__year=2024).count())
      total_pes_2024 = (entidadesFinancieras2.objects.filter(subsector='Pesquero', fecha_inicio__year=2024).count())

      valles_for_2024 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Forestal', fecha_inicio__year=2024).count())
      istmo_for_2024 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Forestal', fecha_inicio__year=2024).count())
      costa_for_2024 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Forestal', fecha_inicio__year=2024).count())
      papa_for_2024 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Forestal', fecha_inicio__year=2024).count())
      mix_for_2024 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Forestal', fecha_inicio__year=2024).count())
      sjua_for_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Forestal', fecha_inicio__year=2024).count())
      ssur_for_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Forestal', fecha_inicio__year=2024).count())
      sflm_for_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Forestal', fecha_inicio__year=2024).count())
      total_for_2024 = (entidadesFinancieras2.objects.filter(subsector='Forestal', fecha_inicio__year=2024).count())



      #MONTO TOTAL DE LOS CREDITOS POR SUBSECTOR Y POR REGION
      valles_agri_monto = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Agricola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_agri_monto = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Agricola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_agri_monto = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Agricola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_agri_monto = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Agricola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_agri_monto = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Agricola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_agri_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Agricola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_agri_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Agricola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_agri_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Agricola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_agri_monto = (entidadesFinancieras2.objects.filter(subsector='Agricola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']

      valles_pec_monto = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Pecuario').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_pec_monto = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Pecuario').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_pec_monto = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Pecuario').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_pec_monto = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Pecuario').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_pec_monto = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Pecuario').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_pec_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Pecuario').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_pec_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Pecuario').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_pec_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Pecuario').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_pec_monto = (entidadesFinancieras2.objects.filter(subsector='Pecuario').aggregate(sumatotal=Sum('monto_total')))['sumatotal']

      valles_acu_monto = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Acuicola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_acu_monto = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Acuicola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_acu_monto = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Acuicola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_acu_monto = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Acuicola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_acu_monto = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Acuicola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_acu_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Acuicola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_acu_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Acuicola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_acu_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Acuicola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_acu_monto = (entidadesFinancieras2.objects.filter(subsector='Acuicola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']

      valles_pes_monto = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Pesquero').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_pes_monto = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Pesquero').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_pes_monto = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Pesquero').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_pes_monto = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Pesquero').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_pes_monto = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Pesquero').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_pes_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Pesquero').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_pes_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Pesquero').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_pes_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Pesquero').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_pes_monto = (entidadesFinancieras2.objects.filter(subsector='Pesquero').aggregate(sumatotal=Sum('monto_total')))['sumatotal']

      valles_for_monto = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Forestal').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_for_monto = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Forestal').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_for_monto = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Forestal').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_for_monto = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Forestal').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_for_monto = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Forestal').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_for_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Forestal').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_for_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Forestal').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_for_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Forestal').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_for_monto = (entidadesFinancieras2.objects.filter(subsector='Forestal').aggregate(sumatotal=Sum('monto_total')))['sumatotal']




      #MONTO TOTAL DE LOS CREDITOS POR SUBSECTOR Y POR REGION 2023
      valles_agri_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Agricola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_agri_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Agricola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_agri_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Agricola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_agri_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Agricola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_agri_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Agricola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_agri_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Agricola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_agri_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Agricola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_agri_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Agricola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_agri_monto_2023 = (entidadesFinancieras2.objects.filter(subsector='Agricola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']

      valles_pec_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Pecuario', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_pec_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Pecuario', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_pec_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Pecuario', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_pec_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Pecuario', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_pec_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Pecuario', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_pec_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Pecuario', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_pec_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Pecuario', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_pec_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Pecuario', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_pec_monto_2023 = (entidadesFinancieras2.objects.filter(subsector='Pecuario', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']

      valles_acu_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Acuicola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_acu_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Acuicola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_acu_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Acuicola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_acu_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Acuicola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_acu_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Acuicola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_acu_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Acuicola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_acu_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Acuicola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_acu_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Acuicola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_acu_monto_2023 = (entidadesFinancieras2.objects.filter(subsector='Acuicola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']


      valles_pes_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Pesquero', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_pes_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Pesquero', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_pes_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Pesquero', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_pes_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Pesquero', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_pes_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Pesquero', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_pes_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Pesquero', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_pes_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Pesquero', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_pes_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Pesquero', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_pes_monto_2023 = (entidadesFinancieras2.objects.filter(subsector='Pesquero', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']

      valles_for_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Forestal', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_for_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Forestal', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_for_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Forestal', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_for_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Forestal', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_for_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Forestal', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_for_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Forestal', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_for_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Forestal', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_for_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Forestal', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_for_monto_2023 = (entidadesFinancieras2.objects.filter(subsector='Forestal', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']





      #MONTO TOTAL DE LOS CREDITOS POR SUBSECTOR Y POR REGION 2024
      valles_agri_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Agricola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_agri_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Agricola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_agri_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Agricola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_agri_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Agricola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_agri_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Agricola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_agri_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Agricola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_agri_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Agricola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_agri_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Agricola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_agri_monto_2024 = (entidadesFinancieras2.objects.filter(subsector='Agricola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']

      valles_pec_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Pecuario', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_pec_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Pecuario', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_pec_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Pecuario', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_pec_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Pecuario', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_pec_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Pecuario', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_pec_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Pecuario', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_pec_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Pecuario', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_pec_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Pecuario', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_pec_monto_2024 = (entidadesFinancieras2.objects.filter(subsector='Pecuario', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']

      valles_acu_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Acuicola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_acu_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Acuicola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_acu_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Acuicola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_acu_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Acuicola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_acu_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Acuicola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_acu_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Acuicola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_acu_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Acuicola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_acu_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Acuicola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_acu_monto_2024 = (entidadesFinancieras2.objects.filter(subsector='Acuicola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']


      valles_pes_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Pesquero', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_pes_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Pesquero', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_pes_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Pesquero', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_pes_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Pesquero', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_pes_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Pesquero', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_pes_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Pesquero', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_pes_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Pesquero', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_pes_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Pesquero', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_pes_monto_2024 = (entidadesFinancieras2.objects.filter(subsector='Pesquero', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']

      valles_for_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Forestal', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_for_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Forestal', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_for_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Forestal', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_for_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Forestal', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_for_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Forestal', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_for_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Forestal', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_for_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Forestal', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_for_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Forestal', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_for_monto_2024 = (entidadesFinancieras2.objects.filter(subsector='Forestal', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']


      return render(request, 'graficas.html',{
        'conteo_VC' : conteo_VC, 
        'conteo_IST' : conteo_IST, 
        'conteo_MIX' : conteo_MIX,
        'conteo_PAPA' : conteo_PAPA,
        'conteo_COS' : conteo_COS,
        'conteo_SJ' : conteo_SJ,
        'conteo_SS' : conteo_SS, 
        'conteo_SFM' : conteo_SFM,
        'monto_VC_templates' : monto_VC_templates,
        'monto_IST_templates' : monto_IST_templates,
        'monto_MIX_templates' : monto_MIX_templates,
        'monto_PAPA_templates' : monto_PAPA_templates,
        'monto_COS_templates' : monto_COS_templates,
        'monto_SJ_templates' : monto_SJ_templates,
        'monto_SS_templates' : monto_SS_templates,
        'monto_SFM_templates' : monto_SFM_templates,
        'garantia_VC_templates' :  garantia_VC_templates, 
        'garantia_IST_templates'  : garantia_IST_templates,  
        'garantia_MIX_templates'  : garantia_MIX_templates,  
        'garantia_PAPA_templates' : garantia_PAPA_templates, 
        'garantia_COS_templates'  : garantia_COS_templates,  
        'garantia_SJ_templates' : garantia_SJ_templates, 
        'garantia_SS_templates' : garantia_SS_templates, 
        'garantia_SFM_templates' : garantia_SFM_templates,
        'beneficiarios_VC_T' : beneficiarios_VC_T,
        'beneficiarios_IST_T' : beneficiarios_IST_T,
        'beneficiarios_MIX_T' : beneficiarios_MIX_T,
        'beneficiarios_PAPA_T' : beneficiarios_PAPA_T,
        'beneficiarios_COS_T' : beneficiarios_COS_T,
        'beneficiarios_SJ_T' : beneficiarios_SJ_T,
        'beneficiarios_SS_T' : beneficiarios_SS_T,
        'beneficiarios_SFM_T' : beneficiarios_SFM_T,
        'E100_VC' : E100_VC,
        'E100_IST' : E100_IST,
        'E100_MIX' : E100_MIX,
        'E100_PAPA' : E100_PAPA,
        'E100_COS' : E100_COS,
        'E100_SJ' : E100_SJ,
        'E100_SS' : E100_SS,
        'E100_SFM' : E100_SFM,
        'PI_VC' : PI_VC,
        'PI_IST' : PI_IST,
        'PI_MIX' : PI_MIX,
        'PI_PAPA' : PI_PAPA,
        'PI_COS' : PI_COS,
        'PI_SJ' : PI_SJ,
        'PI_SS' : PI_SS, 
        'PI_SFM' : PI_SFM,
        'empleos_VC_T' :  empleos_VC_T,
        'empleos_IST_T' : empleos_IST_T, 
        'empleos_MIX_T' : empleos_MIX_T,
        'empleos_PAPA_T' : empleos_PAPA_T,
        'empleos_COS_T' :  empleos_COS_T,
        'empleos_SJ_T' :  empleos_SJ_T,
        'empleos_SS_T' : empleos_SS_T,
        'empleos_SFM_T' :  empleos_SFM_T,
        'conteo_VC_2023' : conteo_VC_2023, 
        'conteo_IST_2023' : conteo_IST_2023, 
        'conteo_MIX_2023' : conteo_MIX_2023,
        'conteo_PAPA_2023' : conteo_PAPA_2023,
        'conteo_COS_2023' : conteo_COS_2023,
        'conteo_SJ_2023' : conteo_SJ_2023,
        'conteo_SS_2023' : conteo_SS_2023, 
        'conteo_SFM_2023' : conteo_SFM_2023,
        'monto_VC_templates_2023' : monto_VC_templates_2023,
        'monto_IST_templates_2023' : monto_IST_templates_2023,
        'monto_MIX_templates_2023' : monto_MIX_templates_2023,
        'monto_PAPA_templates_2023' : monto_PAPA_templates_2023,
        'monto_COS_templates_2023' : monto_COS_templates_2023,
        'monto_SJ_templates_2023' : monto_SJ_templates_2023,
        'monto_SS_templates_2023' : monto_SS_templates_2023,
        'monto_SFM_templates_2023' : monto_SFM_templates_2023,
        'garantia_VC_templates_2023' :  garantia_VC_templates_2023, 
        'garantia_IST_templates_2023'  : garantia_IST_templates_2023,  
        'garantia_MIX_templates_2023'  : garantia_MIX_templates_2023,  
        'garantia_PAPA_templates_2023' : garantia_PAPA_templates_2023, 
        'garantia_COS_templates_2023'  : garantia_COS_templates_2023,  
        'garantia_SJ_templates_2023' : garantia_SJ_templates_2023, 
        'garantia_SS_templates_2023' : garantia_SS_templates_2023, 
        'garantia_SFM_templates_2023' : garantia_SFM_templates_2023,
        'beneficiarios_VC_T_2023' : beneficiarios_VC_T_2023,
        'beneficiarios_IST_T_2023' : beneficiarios_IST_T_2023,
        'beneficiarios_MIX_T_2023' : beneficiarios_MIX_T_2023,
        'beneficiarios_PAPA_T_2023' : beneficiarios_PAPA_T_2023,
        'beneficiarios_COS_T_2023' : beneficiarios_COS_T_2023,
        'beneficiarios_SJ_T_2023' : beneficiarios_SJ_T_2023,
        'beneficiarios_SS_T_2023' : beneficiarios_SS_T_2023,
        'beneficiarios_SFM_T_2023' : beneficiarios_SFM_T_2023,
        'E100_VC_2023' : E100_VC_2023,
        'E100_IST_2023' : E100_IST_2023,
        'E100_MIX_2023' : E100_MIX_2023,
        'E100_PAPA_2023' : E100_PAPA_2023,
        'E100_COS_2023' : E100_COS_2023,
        'E100_SJ_2023' : E100_SJ_2023,
        'E100_SS_2023' : E100_SS_2023,
        'E100_SFM_2023' : E100_SFM_2023,
        'PI_VC_2023' : PI_VC_2023,
        'PI_IST_2023' : PI_IST_2023,
        'PI_MIX_2023' : PI_MIX_2023,
        'PI_PAPA_2023' : PI_PAPA_2023,
        'PI_COS_2023' : PI_COS_2023,
        'PI_SJ_2023' : PI_SJ_2023,
        'PI_SS_2023' : PI_SS_2023, 
        'PI_SFM_2023' : PI_SFM_2023,
        'empleos_VC_T_2023' :  empleos_VC_T_2023,
        'empleos_IST_T_2023' : empleos_IST_T_2023, 
        'empleos_MIX_T_2023' : empleos_MIX_T_2023,
        'empleos_PAPA_T_2023' : empleos_PAPA_T_2023,
        'empleos_COS_T_2023' :  empleos_COS_T_2023,
        'empleos_SJ_T_2023' :  empleos_SJ_T_2023,
        'empleos_SS_T_2023' : empleos_SS_T_2023,
        'empleos_SFM_T_2023' :  empleos_SFM_T_2023,
        'conteo_VC_2024' : conteo_VC_2024, 
        'conteo_IST_2024' : conteo_IST_2024, 
        'conteo_MIX_2024' : conteo_MIX_2024,
        'conteo_PAPA_2024' : conteo_PAPA_2024,
        'conteo_COS_2024' : conteo_COS_2024,
        'conteo_SJ_2024' : conteo_SJ_2024,
        'conteo_SS_2024' : conteo_SS_2024, 
        'conteo_SFM_2024' : conteo_SFM_2024,
        'monto_VC_templates_2024' : monto_VC_templates_2024,
        'monto_IST_templates_2024' : monto_IST_templates_2024,
        'monto_MIX_templates_2024' : monto_MIX_templates_2024,
        'monto_PAPA_templates_2024' : monto_PAPA_templates_2024,
        'monto_COS_templates_2024' : monto_COS_templates_2024,
        'monto_SJ_templates_2024' : monto_SJ_templates_2024,
        'monto_SS_templates_2024' : monto_SS_templates_2024,
        'monto_SFM_templates_2024' : monto_SFM_templates_2024,
        'garantia_VC_templates_2024' :  garantia_VC_templates_2024, 
        'garantia_IST_templates_2024'  : garantia_IST_templates_2024,  
        'garantia_MIX_templates_2024'  : garantia_MIX_templates_2024,  
        'garantia_PAPA_templates_2024' : garantia_PAPA_templates_2024, 
        'garantia_COS_templates_2024'  : garantia_COS_templates_2024,  
        'garantia_SJ_templates_2024' : garantia_SJ_templates_2024, 
        'garantia_SS_templates_2024' : garantia_SS_templates_2024, 
        'garantia_SFM_templates_2024' : garantia_SFM_templates_2024,
        'beneficiarios_VC_T_2024' : beneficiarios_VC_T_2024,
        'beneficiarios_IST_T_2024' : beneficiarios_IST_T_2024,
        'beneficiarios_MIX_T_2024' : beneficiarios_MIX_T_2024,
        'beneficiarios_PAPA_T_2024' : beneficiarios_PAPA_T_2024,
        'beneficiarios_COS_T_2024' : beneficiarios_COS_T_2024,
        'beneficiarios_SJ_T_2024' : beneficiarios_SJ_T_2024,
        'beneficiarios_SS_T_2024' : beneficiarios_SS_T_2024,
        'beneficiarios_SFM_T_2024' : beneficiarios_SFM_T_2024,
        'E100_VC_2024' : E100_VC_2024,
        'E100_IST_2024' : E100_IST_2024,
        'E100_MIX_2024' : E100_MIX_2024,
        'E100_PAPA_2024' : E100_PAPA_2024,
        'E100_COS_2024' : E100_COS_2024,
        'E100_SJ_2024' : E100_SJ_2024,
        'E100_SS_2024' : E100_SS_2024,
        'E100_SFM_2024' : E100_SFM_2024,
        'PI_VC_2024' : PI_VC_2024,
        'PI_IST_2024' : PI_IST_2024,
        'PI_MIX_2024' : PI_MIX_2024,
        'PI_PAPA_2024' : PI_PAPA_2024,
        'PI_COS_2024' : PI_COS_2024,
        'PI_SJ_2024' : PI_SJ_2024,
        'PI_SS_2024' : PI_SS_2024, 
        'PI_SFM_2024' : PI_SFM_2024,
        'empleos_VC_T_2024' :  empleos_VC_T_2024,
        'empleos_IST_T_2024' : empleos_IST_T_2024, 
        'empleos_MIX_T_2024' : empleos_MIX_T_2024,
        'empleos_PAPA_T_2024' : empleos_PAPA_T_2024,
        'empleos_COS_T_2024' :  empleos_COS_T_2024,
        'empleos_SJ_T_2024' :  empleos_SJ_T_2024,
        'empleos_SS_T_2024' : empleos_SS_T_2024,
        'empleos_SFM_T_2024' :  empleos_SFM_T_2024,

        'cantidad_ct' : cantidad_ct,
        'cantidad_eq' : cantidad_eq,
        'cantidad_iaa' : cantidad_iaa,
        'cantidad_iai' : cantidad_iai,
        'cantidad_ap' : cantidad_ap,
        'cantidad_mec' : cantidad_mec,
        'cantidad_re' : cantidad_re,


        'cantidad_ct_2023' : cantidad_ct_2023,
        'cantidad_eq_2023' : cantidad_eq_2023,
        'cantidad_iaa_2023' : cantidad_iaa_2023,
        'cantidad_iai_2023' : cantidad_iai_2023,
        'cantidad_ap_2023' : cantidad_ap_2023,
        'cantidad_mec_2023' : cantidad_mec_2023,
        'cantidad_re_2023' : cantidad_re_2023,

        'monto_ct' : monto_ct,
        'monto_eq' : monto_eq,
        'monto_iaa' : monto_iaa,
        'monto_iai' : monto_iai,
        'monto_ap' : monto_ap,
        'monto_mec' : monto_mec,
        'monto_re' : monto_re,

        'monto_ct_2023' : monto_ct_2023,
        'monto_eq_2023' : monto_eq_2023,
        'monto_iaa_2023' : monto_iaa_2023,
        'monto_iai_2023' : monto_iai_2023,
        'monto_ap_2023' : monto_ap_2023,
        'monto_mec_2023' : monto_mec_2023,
        'monto_re_2023' : monto_re_2023,


        'garantias_ct' : garantias_ct,
        'garantias_eq' : garantias_eq,
        'garantias_iaa' : garantias_iaa,
        'garantias_iai' : garantias_iai,
        'garantias_ap' : garantias_ap,
        'garantias_mec' : garantias_mec,
        'garantias_re' : garantias_re,


        'garantias_ct_2023' : garantias_ct_2023,
        'garantias_eq_2023' : garantias_eq_2023,
        'garantias_iaa_2023' : garantias_iaa_2023,
        'garantias_iai_2023' : garantias_iai_2023,
        'garantias_ap_2023' : garantias_ap_2023,
        'garantias_mec_2023' : garantias_mec_2023,
        'garantias_re_2023' : garantias_re_2023,

        'valles_agri' : valles_agri,
        'istmo_agri' : istmo_agri,
        'costa_agri' : costa_agri,
        'papa_agri' : papa_agri,
        'mix_agri' : mix_agri,
        'sjua_agri' : sjua_agri,
        'ssur_agri' : ssur_agri,
        'sflm_agri' : sflm_agri,
        'valles_pec' : valles_pec,
        'istmo_pec' : istmo_pec,
        'costa_pec' : costa_pec,
        'papa_pec' : papa_pec,
        'mix_pec' : mix_pec,
        'sjua_pec' : sjua_pec,
        'ssur_pec' : ssur_pec,
        'sflm_pec' : sflm_pec,
        'valles_acu' : valles_acu,
        'istmo_acu' : istmo_acu,
        'costa_acu' : costa_acu,
        'papa_acu' : papa_acu,
        'mix_acu' : mix_acu,
        'sjua_acu' : sjua_acu,
        'ssur_acu' : ssur_acu,
        'sflm_acu' : sflm_acu,
        'valles_pes' : valles_pes,
        'istmo_pes' : istmo_pes,
        'costa_pes' : costa_pes,
        'papa_pes' : papa_pes,
        'mix_pes' : mix_pes,
        'sjua_pes' : sjua_pes,
        'ssur_pes' : ssur_pes,
        'sflm_pes' : sflm_pes,
        'valles_for' : valles_for,
        'istmo_for' : istmo_for,
        'costa_for' : costa_for,
        'papa_for' : papa_for,
        'mix_for' : mix_for,
        'sjua_for' : sjua_for,
        'ssur_for' : ssur_for,
        'sflm_for' : sflm_for,
        'total_agri' : total_agri,
        'total_pec' : total_pec, 
        'total_acu' : total_acu,
        'total_pes' : total_pes,
        'total_for' : total_for,



        'valles_agri_2023' : valles_agri_2023,
        'istmo_agri_2023' : istmo_agri_2023,
        'costa_agri_2023' : costa_agri_2023,
        'papa_agri_2023' : papa_agri_2023,
        'mix_agri_2023' : mix_agri_2023,
        'sjua_agri_2023' : sjua_agri_2023,
        'ssur_agri_2023' : ssur_agri_2023,
        'sflm_agri_2023' : sflm_agri_2023,
        'valles_pec_2023' : valles_pec_2023,
        'istmo_pec_2023' : istmo_pec_2023,
        'costa_pec_2023' : costa_pec_2023,
        'papa_pec_2023' : papa_pec_2023,
        'mix_pec_2023' : mix_pec_2023,
        'sjua_pec_2023' : sjua_pec_2023,
        'ssur_pec_2023' : ssur_pec_2023,
        'sflm_pec_2023' : sflm_pec_2023,
        'valles_acu_2023' : valles_acu_2023,
        'istmo_acu_2023' : istmo_acu_2023,
        'costa_acu_2023' : costa_acu_2023,
        'papa_acu_2023' : papa_acu_2023,
        'mix_acu_2023' : mix_acu_2023,
        'sjua_acu_2023' : sjua_acu_2023,
        'ssur_acu_2023' : ssur_acu_2023,
        'sflm_acu_2023' : sflm_acu_2023,
        'valles_pes_2023' : valles_pes_2023,
        'istmo_pes_2023' : istmo_pes_2023,
        'costa_pes_2023' : costa_pes_2023,
        'papa_pes_2023' : papa_pes_2023,
        'mix_pes_2023' : mix_pes_2023,
        'sjua_pes_2023' : sjua_pes_2023,
        'ssur_pes_2023' : ssur_pes_2023,
        'sflm_pes_2023' : sflm_pes_2023,
        'valles_for_2023' : valles_for_2023,
        'istmo_for_2023' : istmo_for_2023,
        'costa_for_2023' : costa_for_2023,
        'papa_for_2023' : papa_for_2023,
        'mix_for_2023' : mix_for_2023,
        'sjua_for_2023' : sjua_for_2023,
        'ssur_for_2023' : ssur_for_2023,
        'sflm_for_2023' : sflm_for_2023,
        'total_agri_2023' : total_agri_2023,
        'total_pec_2023' : total_pec_2023, 
        'total_acu_2023' : total_acu_2023,
        'total_pes_2023' : total_pes_2023,
        'total_for_2023' : total_for_2023,



        'valles_agri_2024' : valles_agri_2024,
        'istmo_agri_2024' : istmo_agri_2024,
        'costa_agri_2024' : costa_agri_2024,
        'papa_agri_2024' : papa_agri_2024,
        'mix_agri_2024' : mix_agri_2024,
        'sjua_agri_2024' : sjua_agri_2024,
        'ssur_agri_2024' : ssur_agri_2024,
        'sflm_agri_2024' : sflm_agri_2024,
        'valles_pec_2024' : valles_pec_2024,
        'istmo_pec_2024' : istmo_pec_2024,
        'costa_pec_2024' : costa_pec_2024,
        'papa_pec_2024' : papa_pec_2024,
        'mix_pec_2024' : mix_pec_2024,
        'sjua_pec_2024' : sjua_pec_2024,
        'ssur_pec_2024' : ssur_pec_2024,
        'sflm_pec_2024' : sflm_pec_2024,
        'valles_acu_2024' : valles_acu_2024,
        'istmo_acu_2024' : istmo_acu_2024,
        'costa_acu_2024' : costa_acu_2024,
        'papa_acu_2024' : papa_acu_2024,
        'mix_acu_2024' : mix_acu_2024,
        'sjua_acu_2024' : sjua_acu_2024,
        'ssur_acu_2024' : ssur_acu_2024,
        'sflm_acu_2024' : sflm_acu_2024,
        'valles_pes_2024' : valles_pes_2024,
        'istmo_pes_2024' : istmo_pes_2024,
        'costa_pes_2024' : costa_pes_2024,
        'papa_pes_2024' : papa_pes_2024,
        'mix_pes_2024' : mix_pes_2024,
        'sjua_pes_2024' : sjua_pes_2024,
        'ssur_pes_2024' : ssur_pes_2024,
        'sflm_pes_2024' : sflm_pes_2024,
        'valles_for_2024' : valles_for_2024,
        'istmo_for_2024' : istmo_for_2024,
        'costa_for_2024' : costa_for_2024,
        'papa_for_2024' : papa_for_2024,
        'mix_for_2024' : mix_for_2024,
        'sjua_for_2024' : sjua_for_2024,
        'ssur_for_2024' : ssur_for_2024,
        'sflm_for_2024' : sflm_for_2024,
        'total_agri_2024' : total_agri_2024,
        'total_pec_2024' : total_pec_2024, 
        'total_acu_2024' : total_acu_2024,
        'total_pes_2024' : total_pes_2024,
        'total_for_2024' : total_for_2024,



        'c' : total_concepto,

        'valles_agri_monto' : valles_agri_monto,
        'istmo_agri_monto' : istmo_agri_monto,
        'costa_agri_monto' : costa_agri_monto,
        'papa_agri_monto' : papa_agri_monto,
        'mix_agri_monto' : mix_agri_monto,
        'sjua_agri_monto' : sjua_agri_monto,
        'ssur_agri_monto' : ssur_agri_monto,
        'sflm_agri_monto' : sflm_agri_monto,
        'valles_pec_monto' : valles_pec_monto,
        'istmo_pec_monto' : istmo_pec_monto,
        'costa_pec_monto' : costa_pec_monto,
        'papa_pec_monto' : papa_pec_monto,
        'mix_pec_monto' : mix_pec_monto,
        'sjua_pec_monto' : sjua_pec_monto,
        'ssur_pec_monto' : ssur_pec_monto,
        'sflm_pec_monto' : sflm_pec_monto,
        'valles_acu_monto' : valles_acu_monto,
        'istmo_acu_monto' : istmo_acu_monto,
        'costa_acu_monto' : costa_acu_monto,
        'papa_acu_monto' : papa_acu_monto,
        'mix_acu_monto' : mix_acu_monto,
        'sjua_acu_monto' : sjua_acu_monto,
        'ssur_acu_monto' : ssur_acu_monto,
        'sflm_acu_monto' : sflm_acu_monto,
        'valles_pes_monto' : valles_pes_monto,
        'istmo_pes_monto' : istmo_pes_monto,
        'costa_pes_monto' : costa_pes_monto,
        'papa_pes_monto' : papa_pes_monto,
        'mix_pes_monto' : mix_pes_monto,
        'sjua_pes_monto' : sjua_pes_monto,
        'ssur_pes_monto' : ssur_pes_monto,
        'sflm_pes_monto' : sflm_pes_monto,
        'valles_for_monto' : valles_for_monto,
        'istmo_for_monto' : istmo_for_monto,
        'costa_for_monto' : costa_for_monto,
        'papa_for_monto' : papa_for_monto,
        'mix_for_monto' : mix_for_monto,
        'sjua_for_monto' : sjua_for_monto,
        'ssur_for_monto' : ssur_for_monto,
        'sflm_for_monto' : sflm_for_monto,
        'total_agri_monto' : total_agri_monto,
        'total_pec_monto' : total_pec_monto, 
        'total_acu_monto' : total_acu_monto,
        'total_pes_monto' : total_pes_monto,
        'total_for_monto' : total_for_monto,




      #monto 2023
        'valles_agri_monto_2023' : valles_agri_monto_2023,
        'istmo_agri_monto_2023' : istmo_agri_monto_2023,
        'costa_agri_monto_2023' : costa_agri_monto_2023,
        'papa_agri_monto_2023' : papa_agri_monto_2023,
        'mix_agri_monto_2023' : mix_agri_monto_2023,
        'sjua_agri_monto_2023' : sjua_agri_monto_2023,
        'ssur_agri_monto_2023' : ssur_agri_monto_2023,
        'sflm_agri_monto_2023' : sflm_agri_monto_2023,
        'valles_pec_monto_2023' : valles_pec_monto_2023,
        'istmo_pec_monto_2023' : istmo_pec_monto_2023,
        'costa_pec_monto_2023' : costa_pec_monto_2023,
        'papa_pec_monto_2023' : papa_pec_monto_2023,
        'mix_pec_monto_2023' : mix_pec_monto_2023,
        'sjua_pec_monto_2023' : sjua_pec_monto_2023,
        'ssur_pec_monto_2023' : ssur_pec_monto_2023,
        'sflm_pec_monto_2023' : sflm_pec_monto_2023,
        'valles_acu_monto_2023' : valles_acu_monto_2023,
        'istmo_acu_monto_2023' : istmo_acu_monto_2023,
        'costa_acu_monto_2023' : costa_acu_monto_2023,
        'papa_acu_monto_2023' : papa_acu_monto_2023,
        'mix_acu_monto_2023' : mix_acu_monto_2023,
        'sjua_acu_monto_2023' : sjua_acu_monto_2023,
        'ssur_acu_monto_2023' : ssur_acu_monto_2023,
        'sflm_acu_monto_2023' : sflm_acu_monto_2023,
        'valles_pes_monto_2023' : valles_pes_monto_2023,
        'istmo_pes_monto_2023' : istmo_pes_monto_2023,
        'costa_pes_monto_2023' : costa_pes_monto_2023,
        'papa_pes_monto_2023' : papa_pes_monto_2023,
        'mix_pes_monto_2023' : mix_pes_monto_2023,
        'sjua_pes_monto_2023' : sjua_pes_monto_2023,
        'ssur_pes_monto_2023' : ssur_pes_monto_2023,
        'sflm_pes_monto_2023' : sflm_pes_monto_2023,
        'valles_for_monto_2023' : valles_for_monto_2023,
        'istmo_for_monto_2023' : istmo_for_monto_2023,
        'costa_for_monto_2023' : costa_for_monto_2023,
        'papa_for_monto_2023' : papa_for_monto_2023,
        'mix_for_monto_2023' : mix_for_monto_2023,
        'sjua_for_monto_2023' : sjua_for_monto_2023,
        'ssur_for_monto_2023' : ssur_for_monto_2023,
        'sflm_for_monto_2023' : sflm_for_monto_2023,
        'total_agri_monto_2023' : total_agri_monto_2023,
        'total_pec_monto_2023' : total_pec_monto_2023, 
        'total_acu_monto_2023' : total_acu_monto_2023,
        'total_pes_monto_2023' : total_pes_monto_2023,
        'total_for_monto_2023' : total_for_monto_2023,



        
      #monto 2024
        'valles_agri_monto_2024' : valles_agri_monto_2024,
        'istmo_agri_monto_2024' : istmo_agri_monto_2024,
        'costa_agri_monto_2024' : costa_agri_monto_2024,
        'papa_agri_monto_2024' : papa_agri_monto_2024,
        'mix_agri_monto_2024' : mix_agri_monto_2024,
        'sjua_agri_monto_2024' : sjua_agri_monto_2024,
        'ssur_agri_monto_2024' : ssur_agri_monto_2024,
        'sflm_agri_monto_2024' : sflm_agri_monto_2024,
        'valles_pec_monto_2024' : valles_pec_monto_2024,
        'istmo_pec_monto_2024' : istmo_pec_monto_2024,
        'costa_pec_monto_2024' : costa_pec_monto_2024,
        'papa_pec_monto_2024' : papa_pec_monto_2024,
        'mix_pec_monto_2024' : mix_pec_monto_2024,
        'sjua_pec_monto_2024' : sjua_pec_monto_2024,
        'ssur_pec_monto_2024' : ssur_pec_monto_2024,
        'sflm_pec_monto_2024' : sflm_pec_monto_2024,
        'valles_acu_monto_2024' : valles_acu_monto_2024,
        'istmo_acu_monto_2024' : istmo_acu_monto_2024,
        'costa_acu_monto_2024' : costa_acu_monto_2024,
        'papa_acu_monto_2024' : papa_acu_monto_2024,
        'mix_acu_monto_2024' : mix_acu_monto_2024,
        'sjua_acu_monto_2024' : sjua_acu_monto_2024,
        'ssur_acu_monto_2024' : ssur_acu_monto_2024,
        'sflm_acu_monto_2024' : sflm_acu_monto_2024,
        'valles_pes_monto_2024' : valles_pes_monto_2024,
        'istmo_pes_monto_2024' : istmo_pes_monto_2024,
        'costa_pes_monto_2024' : costa_pes_monto_2024,
        'papa_pes_monto_2024' : papa_pes_monto_2024,
        'mix_pes_monto_2024' : mix_pes_monto_2024,
        'sjua_pes_monto_2024' : sjua_pes_monto_2024,
        'ssur_pes_monto_2024' : ssur_pes_monto_2024,
        'sflm_pes_monto_2024' : sflm_pes_monto_2024,
        'valles_for_monto_2024' : valles_for_monto_2024,
        'istmo_for_monto_2024' : istmo_for_monto_2024,
        'costa_for_monto_2024' : costa_for_monto_2024,
        'papa_for_monto_2024' : papa_for_monto_2024,
        'mix_for_monto_2024' : mix_for_monto_2024,
        'sjua_for_monto_2024' : sjua_for_monto_2024,
        'ssur_for_monto_2024' : ssur_for_monto_2024,
        'sflm_for_monto_2024' : sflm_for_monto_2024,
        'total_agri_monto_2024' : total_agri_monto_2024,
        'total_pec_monto_2024' : total_pec_monto_2024, 
        'total_acu_monto_2024' : total_acu_monto_2024,
        'total_pes_monto_2024' : total_pes_monto_2024,
        'total_for_monto_2024' : total_for_monto_2024,





        'can_municipios_VC' : can_municipios_VC,
        'can_municipios_IST' : can_municipios_IST,
        'can_municipios_MIX' : can_municipios_MIX,
        'can_municipios_PAPA' : can_municipios_PAPA,
        'can_municipios_COS' : can_municipios_COS,
        'can_municipios_SJ' : can_municipios_SJ,
        'can_municipios_SS' : can_municipios_SS,
        'can_municipios_SFM' : can_municipios_SFM,

        'can_municipios_VC_2023' : can_municipios_VC_2023,
        'can_municipios_IST_2023' : can_municipios_IST_2023,
        'can_municipios_MIX_2023' : can_municipios_MIX_2023,
        'can_municipios_PAPA_2023' : can_municipios_PAPA_2023,
        'can_municipios_COS_2023' : can_municipios_COS_2023,
        'can_municipios_SJ_2023' : can_municipios_SJ_2023,
        'can_municipios_SS_2023' : can_municipios_SS_2023,
        'can_municipios_SFM_2023' : can_municipios_SFM_2023, 

        'can_municipios_VC_2024' : can_municipios_VC_2024,
        'can_municipios_IST_2024' : can_municipios_IST_2024,
        'can_municipios_MIX_2024' : can_municipios_MIX_2024,
        'can_municipios_PAPA_2024' : can_municipios_PAPA_2024,
        'can_municipios_COS_2024' : can_municipios_COS_2024,
        'can_municipios_SJ_2024' : can_municipios_SJ_2024,
        'can_municipios_SS_2024' : can_municipios_SS_2024,
        'can_municipios_SFM_2024' : can_municipios_SFM_2024, 
        'totalCPG' : totalCPG,
        'totalMFG' : totalMFG,
        'totalGLG' : totalGLG, 
        'totalBG' : totalBG, 
        'totalE100G' : totalE100G, 
        'totalPIG' : totalPIG,
        'totalEDG' : totalEDG, 
        'totalCMG' : totalCMG, 

        'totalCPG_2023' : totalCPG_2023,
        'totalMFG_2023' : totalMFG_2023,
        'totalGLG_2023' : totalGLG_2023, 
        'totalBG_2023' : totalBG_2023, 
        'totalE100G_2023' : totalE100G_2023, 
        'totalPIG_2023' : totalPIG_2023,
        'totalEDG_2023' : totalEDG_2023, 
        'totalCMG_2023' : totalCMG_2023, 

        'totalCPG_2024' : totalCPG_2024,
        'totalMFG_2024' : totalMFG_2024,
        'totalGLG_2024' : totalGLG_2024, 
        'totalBG_2024' : totalBG_2024, 
        'totalE100G_2024' : totalE100G_2024, 
        'totalPIG_2024' : totalPIG_2024,
        'totalEDG_2024' : totalEDG_2024, 
        'totalCMG_2024' : totalCMG_2024







        })



def get_chart(request):
      #MONTOS DE FINANCIAMIENTO
    monto_VC = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES').aggregate(sumatotal=Sum('monto_total')))
    monto_IST = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO').aggregate(sumatotal=Sum('monto_total')))
    monto_MIX = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA').aggregate(sumatotal=Sum('monto_total')))
    monto_PAPA = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN').aggregate(sumatotal=Sum('monto_total')))
    monto_COS = (entidadesFinancieras2.objects.filter(municipio__region='COSTA').aggregate(sumatotal=Sum('monto_total')))
    monto_SJ = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ').aggregate(sumatotal=Sum('monto_total')))
    monto_SS = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR').aggregate(sumatotal=Sum('monto_total')))
    monto_SFM = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON').aggregate(sumatotal=Sum('monto_total')))

    monto_VC_templates = monto_VC['sumatotal'] 
    monto_IST_templates = monto_IST['sumatotal'] 
    monto_MIX_templates = monto_MIX['sumatotal'] 
    monto_PAPA_templates = monto_PAPA['sumatotal'] 
    monto_COS_templates = monto_COS['sumatotal'] 
    monto_SJ_templates = monto_SJ['sumatotal'] 
    monto_SS_templates = monto_SS['sumatotal']
    monto_SFM_templates = monto_SFM['sumatotal'] 

    serie=[monto_VC_templates, monto_IST_templates, monto_MIX_templates, monto_PAPA_templates,
    monto_COS_templates, monto_SJ_templates, monto_SS_templates, monto_SFM_templates]
    
    chart = {
    'tooltip': {
    'trigger': 'axis',
    'axisPointer': {
      'type': 'shadow'
    }
  },
  'grid': {
    'left': '3%',
    'right': '4%',
    'bottom': '3%',
    'containLabel': 'true'
  },
  'xAxis': [
    {
      'type': 'category',
      'data': ['VALLES CENTRALES', 'ISTMO', 'MIXTECA', 'PAPALOAPAN', 'COSTA', 'SIERRA JUAREZ', 'SIERRA SUR', 'SIERRA DE FLORES MAGON'],
      'axisLabel': {
                    'rotate': 30,                },
      'axisTick': {
        'alignWithLabel': 'true'
      }
    }
  ],
  'yAxis': [
    {
      'type': 'value'
    }
  ],
    'series': [
      {
        'name': 'MONTO DE FINANCIAMIENTO POR REGIÓN (Millones de pesos)',
        'type': 'bar',
        'barWidth': '60%',
        'data': serie,
        'color' : '#753232'
      }
    ]

    }

    return JsonResponse(chart)


def get_chart_2023_1(request):
      #MONTOS DE FINANCIAMIENTO 2023
    monto_VC = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))
    monto_IST = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))
    monto_MIX = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))
    monto_PAPA = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))
    monto_COS = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))
    monto_SJ = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))
    monto_SS = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))
    monto_SFM = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))

    monto_VC_templates = monto_VC['sumatotal'] 
    monto_IST_templates = monto_IST['sumatotal'] 
    monto_MIX_templates = monto_MIX['sumatotal'] 
    monto_PAPA_templates = monto_PAPA['sumatotal'] 
    monto_COS_templates = monto_COS['sumatotal'] 
    monto_SJ_templates = monto_SJ['sumatotal'] 
    monto_SS_templates = monto_SS['sumatotal']
    monto_SFM_templates = monto_SFM['sumatotal'] 

    serie12023=[monto_VC_templates, monto_IST_templates, monto_MIX_templates, monto_PAPA_templates,
    monto_COS_templates, monto_SJ_templates, monto_SS_templates, monto_SFM_templates]
    
    chart = {
    'tooltip': {
    'trigger': 'axis',
    'axisPointer': {
      'type': 'shadow'
    }
  },
  'grid': {
    'left': '3%',
    'right': '4%',
    'bottom': '3%',
    'containLabel': 'true'
  },
  'xAxis': [
    {
      'type': 'category',
      'data': ['VALLES CENTRALES', 'ISTMO', 'MIXTECA', 'PAPALOAPAN', 'COSTA', 'SIERRA JUAREZ', 'SIERRA SUR', 'SIERRA DE FLORES MAGON'],
      'axisLabel': {
                    'rotate': 30,                },
      'axisTick': {
        'alignWithLabel': 'true'
      }
    }
  ],
  'yAxis': [
    {
      'type': 'value'
    }
  ],
    'series': [
      {
        'name': 'MONTO DE FINANCIAMIENTO POR REGIÓN EN 2023 (Millones de pesos)',
        'type': 'bar',
        'barWidth': '60%',
        'data': serie12023,
        'color' : '#753232'
      }
    ]

    }

    return JsonResponse(chart)



def get_chart_2024_1(request):
      #MONTOS DE FINANCIAMIENTO 2024
    monto_VC = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))
    monto_IST = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))
    monto_MIX = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))
    monto_PAPA = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))
    monto_COS = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))
    monto_SJ = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))
    monto_SS = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))
    monto_SFM = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))

    monto_VC_templates = monto_VC['sumatotal'] 
    monto_IST_templates = monto_IST['sumatotal'] 
    monto_MIX_templates = monto_MIX['sumatotal'] 
    monto_PAPA_templates = monto_PAPA['sumatotal'] 
    monto_COS_templates = monto_COS['sumatotal'] 
    monto_SJ_templates = monto_SJ['sumatotal'] 
    monto_SS_templates = monto_SS['sumatotal']
    monto_SFM_templates = monto_SFM['sumatotal'] 

    serie12023=[monto_VC_templates, monto_IST_templates, monto_MIX_templates, monto_PAPA_templates,
    monto_COS_templates, monto_SJ_templates, monto_SS_templates, monto_SFM_templates]
    
    chart = {
    'tooltip': {
    'trigger': 'axis',
    'axisPointer': {
      'type': 'shadow'
    }
  },
  'grid': {
    'left': '3%',
    'right': '4%',
    'bottom': '3%',
    'containLabel': 'true'
  },
  'xAxis': [
    {
      'type': 'category',
      'data': ['VALLES CENTRALES', 'ISTMO', 'MIXTECA', 'PAPALOAPAN', 'COSTA', 'SIERRA JUAREZ', 'SIERRA SUR', 'SIERRA DE FLORES MAGON'],
      'axisLabel': {
                    'rotate': 30,                },
      'axisTick': {
        'alignWithLabel': 'true'
      }
    }
  ],
  'yAxis': [
    {
      'type': 'value'
    }
  ],
    'series': [
      {
        'name': 'MONTO DE FINANCIAMIENTO POR REGIÓN EN 2023 (Millones de pesos)',
        'type': 'bar',
        'barWidth': '60%',
        'data': serie12023,
        'color' : '#753232'
      }
    ]

    }

    return JsonResponse(chart)



def get_chart2(request):

    persona_moral = (entidadesFinancieras2.objects.filter(tipo_persona='PERSONA MORAL').count())
    persona_fisica = (entidadesFinancieras2.objects.filter(tipo_persona='PERSONA FISICA').count())

    chart = {
    'tooltip': {
    'trigger': 'item'
  },
  'legend': {
    'top': '5%',
    'left': 'center'
  },
  'series': [
    {
      'name': 'PROYECTOS POR TIPO DE PERSONA FISICA O MORAL',
      'type': 'pie',
      'radius': ['40%', '70%'],
      'avoidLabelOverlap': 'false',
      'label': {
        'show': 'false',
        'position': 'center'
      },
      'emphasis': {
        'label': {
          'show': 'true',
          'fontSize': '40',
          'fontWeight': 'bold'
        }
      },
      'labelLine': {
        'show': 'false'
      },
      'data': [
        { 'value': persona_moral, 'name': 'Persona Moral' },
        { 'value': persona_fisica, 'name': 'Persona Fisica'}
      ]
    }
  ]

    }

    return JsonResponse(chart)


#Grafica 2 2023
def get_chart22023(request):

    persona_moral = (entidadesFinancieras2.objects.filter(tipo_persona='PERSONA MORAL', fecha_inicio__year=2023).count())
    persona_fisica = (entidadesFinancieras2.objects.filter(tipo_persona='PERSONA FISICA', fecha_inicio__year=2023).count())

    chart = {
    'tooltip': {
    'trigger': 'item'
  },
  'legend': {
    'top': '5%',
    'left': 'center'
  },
  'series': [
    {
      'name': 'PROYECTOS POR TIPO DE PERSONA FISICA O MORAL',
      'type': 'pie',
      'radius': ['40%', '70%'],
      'avoidLabelOverlap': 'false',
      'label': {
        'show': 'false',
        'position': 'center'
      },
      'emphasis': {
        'label': {
          'show': 'true',
          'fontSize': '40',
          'fontWeight': 'bold'
        }
      },
      'labelLine': {
        'show': 'false'
      },
      'data': [
        { 'value': persona_moral, 'name': 'Persona Moral' },
        { 'value': persona_fisica, 'name': 'Persona Fisica'}
      ]
    }
  ]

    }

    return JsonResponse(chart)


#Grafica 2 2024
def get_chart22024(request):

    persona_moral = (entidadesFinancieras2.objects.filter(tipo_persona='PERSONA MORAL', fecha_inicio__year=2024).count())
    persona_fisica = (entidadesFinancieras2.objects.filter(tipo_persona='PERSONA FISICA', fecha_inicio__year=2024).count())

    chart = {
    'tooltip': {
    'trigger': 'item'
  },
  'legend': {
    'top': '5%',
    'left': 'center'
  },
  'series': [
    {
      'name': 'PROYECTOS POR TIPO DE PERSONA FISICA O MORAL',
      'type': 'pie',
      'radius': ['40%', '70%'],
      'avoidLabelOverlap': 'false',
      'label': {
        'show': 'false',
        'position': 'center'
      },
      'emphasis': {
        'label': {
          'show': 'true',
          'fontSize': '40',
          'fontWeight': 'bold'
        }
      },
      'labelLine': {
        'show': 'false'
      },
      'data': [
        { 'value': persona_moral, 'name': 'Persona Moral' },
        { 'value': persona_fisica, 'name': 'Persona Fisica'}
      ]
    }
  ]

    }

    return JsonResponse(chart)




def get_chart3(request):
  monto_fira = (entidadesFinancieras2.objects.filter(intermediario_financiero='FIDEICOMISOS INSTITUIDOS EN RELACION CON LA AGRICULTURA (FIRA)').aggregate(sumatotal=Sum('monto_total')))
  monto_acre = (entidadesFinancieras2.objects.filter(intermediario_financiero='COOPERATIVA ACREIMEX, SOCIEDAD COOPERATIVA DE AHORRO Y PRESTAMO').aggregate(sumatotal=Sum('monto_total')))
  monto_finde = (entidadesFinancieras2.objects.filter(intermediario_financiero='FINDECA, SOCIEDAD ANÓNIMA DE CAPITAL VARIABLE').aggregate(sumatotal=Sum('monto_total')))
  monto_nea = (entidadesFinancieras2.objects.filter(intermediario_financiero='NEGOCIOS EMPRESARIALES DE APOYO DE OAXACA, SOCIEDAD ANONIMA DE CAPITAL VARIABLE').aggregate(sumatotal=Sum('monto_total')))
  monto_csd = (entidadesFinancieras2.objects.filter(intermediario_financiero='CAJA SOLIDARIA SAN DIONISIO OCOTEPEC, SOCIEDAD COOPERATIVA DE AHORRO Y PRESTAMO').aggregate(sumatotal=Sum('monto_total')))
  monto_uce  = (entidadesFinancieras2.objects.filter(intermediario_financiero='UNION DE CREDITO ESTATAL DE PRODUCTORES DE CAFE DE OAXACA, S.A. DE C.V.').aggregate(sumatotal=Sum('monto_total')))

  monto_fira_t = monto_fira['sumatotal'] 
  monto_acre_t = monto_acre['sumatotal'] 
  monto_finde_t = monto_finde['sumatotal'] 
  monto_nea_t = monto_nea['sumatotal']
  monto_csd_t = monto_csd['sumatotal'] 
  monto_uce_t = monto_uce['sumatotal'] 

  serie = [monto_fira_t, monto_acre_t, monto_finde_t, monto_nea_t, monto_csd_t, monto_uce_t]

  chart = {
    'tooltip': {
    'trigger': 'axis',
    'axisPointer': {
      'type': 'shadow'
    }
  },
  'grid': {
    'left': '3%',
    'right': '4%',
    'bottom': '3%',
    'containLabel': 'true'
  },
  'xAxis': [
    {
      'type': 'category',
      'data': ['FIRA', 'ACREIMEX', 'FINDECA', 'NEGOCIOS EMPRESARIALES DE APOYO DE OAXACA', 'CAJA SOLIDARIA SAN DIONISIO OCOTEPEC', 'UNION DE CREDITO ESTATAL DE PRODUCTORES DE CAFE DE OAXACA'],
      'axisLabel': {
                    'rotate': 30,                },
      'axisTick': {
        'alignWithLabel': 'true'
      }
    }
  ],
  'yAxis': [
    {
      'type': 'value'
    }
  ],
    'series': [
      {
        'name': 'MONTO DE FINANCIAMIENTO POR INTERMEDIARIO FINANCIERO',
        'type': 'bar',
        'barWidth': '60%',
        'data': serie,
        'color' : '#753232'
      }
    ]

    }

  return JsonResponse(chart)


#GRAFICA3 2023
def get_chart32023(request):
  monto_fira = (entidadesFinancieras2.objects.filter(intermediario_financiero='FIDEICOMISOS INSTITUIDOS EN RELACION CON LA AGRICULTURA (FIRA)', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))
  monto_acre = (entidadesFinancieras2.objects.filter(intermediario_financiero='COOPERATIVA ACREIMEX, SOCIEDAD COOPERATIVA DE AHORRO Y PRESTAMO', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))
  monto_finde = (entidadesFinancieras2.objects.filter(intermediario_financiero='FINDECA, SOCIEDAD ANÓNIMA DE CAPITAL VARIABLE', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))
  monto_nea = (entidadesFinancieras2.objects.filter(intermediario_financiero='NEGOCIOS EMPRESARIALES DE APOYO DE OAXACA, SOCIEDAD ANONIMA DE CAPITAL VARIABLE', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))
  monto_csd = (entidadesFinancieras2.objects.filter(intermediario_financiero='CAJA SOLIDARIA SAN DIONISIO OCOTEPEC, SOCIEDAD COOPERATIVA DE AHORRO Y PRESTAMO', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))
  monto_uce  = (entidadesFinancieras2.objects.filter(intermediario_financiero='UNION DE CREDITO ESTATAL DE PRODUCTORES DE CAFE DE OAXACA, S.A. DE C.V.', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))

  monto_fira_t = monto_fira['sumatotal'] 
  monto_acre_t = monto_acre['sumatotal'] 
  monto_finde_t = monto_finde['sumatotal'] 
  monto_nea_t = monto_nea['sumatotal']
  monto_csd_t = monto_csd['sumatotal'] 
  monto_uce_t = monto_uce['sumatotal'] 

  serie = [monto_fira_t, monto_acre_t, monto_finde_t, monto_nea_t, monto_csd_t, monto_uce_t]

  chart = {
    'tooltip': {
    'trigger': 'axis',
    'axisPointer': {
      'type': 'shadow'
    }
  },
  'grid': {
    'left': '3%',
    'right': '4%',
    'bottom': '3%',
    'containLabel': 'true'
  },
  'xAxis': [
    {
      'type': 'category',
      'data': ['FIRA', 'ACREIMEX', 'FINDECA', 'NEGOCIOS EMPRESARIALES DE APOYO DE OAXACA', 'CAJA SOLIDARIA SAN DIONISIO OCOTEPEC', 'UNION DE CREDITO ESTATAL DE PRODUCTORES DE CAFE DE OAXACA'],
      'axisLabel': {
                    'rotate': 30,                },
      'axisTick': {
        'alignWithLabel': 'true'
      }
    }
  ],
  'yAxis': [
    {
      'type': 'value'
    }
  ],
    'series': [
      {
        'name': 'MONTO DE FINANCIAMIENTO POR INTERMEDIARIO FINANCIERO',
        'type': 'bar',
        'barWidth': '60%',
        'data': serie,
        'color' : '#753232'
      }
    ]

    }

  return JsonResponse(chart)



#GRAFICA3 2024
def get_chart32024(request):
  monto_fira = (entidadesFinancieras2.objects.filter(intermediario_financiero='FIDEICOMISOS INSTITUIDOS EN RELACION CON LA AGRICULTURA (FIRA)', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))
  monto_acre = (entidadesFinancieras2.objects.filter(intermediario_financiero='COOPERATIVA ACREIMEX, SOCIEDAD COOPERATIVA DE AHORRO Y PRESTAMO', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))
  monto_finde = (entidadesFinancieras2.objects.filter(intermediario_financiero='FINDECA, SOCIEDAD ANÓNIMA DE CAPITAL VARIABLE', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))
  monto_nea = (entidadesFinancieras2.objects.filter(intermediario_financiero='NEGOCIOS EMPRESARIALES DE APOYO DE OAXACA, SOCIEDAD ANONIMA DE CAPITAL VARIABLE', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))
  monto_csd = (entidadesFinancieras2.objects.filter(intermediario_financiero='CAJA SOLIDARIA SAN DIONISIO OCOTEPEC, SOCIEDAD COOPERATIVA DE AHORRO Y PRESTAMO', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))
  monto_uce  = (entidadesFinancieras2.objects.filter(intermediario_financiero='UNION DE CREDITO ESTATAL DE PRODUCTORES DE CAFE DE OAXACA, S.A. DE C.V.', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))

  monto_fira_t = monto_fira['sumatotal'] 
  monto_acre_t = monto_acre['sumatotal'] 
  monto_finde_t = monto_finde['sumatotal'] 
  monto_nea_t = monto_nea['sumatotal']
  monto_csd_t = monto_csd['sumatotal'] 
  monto_uce_t = monto_uce['sumatotal'] 

  serie = [monto_fira_t, monto_acre_t, monto_finde_t, monto_nea_t, monto_csd_t, monto_uce_t]

  chart = {
    'tooltip': {
    'trigger': 'axis',
    'axisPointer': {
      'type': 'shadow'
    }
  },
  'grid': {
    'left': '3%',
    'right': '4%',
    'bottom': '3%',
    'containLabel': 'true'
  },
  'xAxis': [
    {
      'type': 'category',
      'data': ['FIRA', 'ACREIMEX', 'FINDECA', 'NEGOCIOS EMPRESARIALES DE APOYO DE OAXACA', 'CAJA SOLIDARIA SAN DIONISIO OCOTEPEC', 'UNION DE CREDITO ESTATAL DE PRODUCTORES DE CAFE DE OAXACA'],
      'axisLabel': {
                    'rotate': 30,                },
      'axisTick': {
        'alignWithLabel': 'true'
      }
    }
  ],
  'yAxis': [
    {
      'type': 'value'
    }
  ],
    'series': [
      {
        'name': 'MONTO DE FINANCIAMIENTO POR INTERMEDIARIO FINANCIERO',
        'type': 'bar',
        'barWidth': '60%',
        'data': serie,
        'color' : '#753232'
      }
    ]

    }

  return JsonResponse(chart)


def get_chart4(request):
  mayo2023 = (entidadesFinancieras2.objects.annotate(mes=ExtractMonth('fecha_inicio'), anio=ExtractYear('fecha_inicio')).filter(mes=5, anio=2023).aggregate(sumatotal=Sum('monto_total')))
  junio2023 = (entidadesFinancieras2.objects.annotate(mes=ExtractMonth('fecha_inicio'), anio=ExtractYear('fecha_inicio')).filter(mes=6, anio=2023).aggregate(sumatotal=Sum('monto_total')))
  julio2023 = (entidadesFinancieras2.objects.annotate(mes=ExtractMonth('fecha_inicio'), anio=ExtractYear('fecha_inicio')).filter(mes=7, anio=2023).aggregate(sumatotal=Sum('monto_total')))
  agosto2023 = (entidadesFinancieras2.objects.annotate(mes=ExtractMonth('fecha_inicio'), anio=ExtractYear('fecha_inicio')).filter(mes=8, anio=2023).aggregate(sumatotal=Sum('monto_total')))
  septiembre2023 = (entidadesFinancieras2.objects.annotate(mes=ExtractMonth('fecha_inicio'), anio=ExtractYear('fecha_inicio')).filter(mes=9, anio=2023).aggregate(sumatotal=Sum('monto_total')))
  octubre2023 = (entidadesFinancieras2.objects.annotate(mes=ExtractMonth('fecha_inicio'), anio=ExtractYear('fecha_inicio')).filter(mes=10, anio=2023).aggregate(sumatotal=Sum('monto_total')))
  noviembre2023 = (entidadesFinancieras2.objects.annotate(mes=ExtractMonth('fecha_inicio'), anio=ExtractYear('fecha_inicio')).filter(mes=11, anio=2023).aggregate(sumatotal=Sum('monto_total')))
  diciembre2023 = (entidadesFinancieras2.objects.annotate(mes=ExtractMonth('fecha_inicio'), anio=ExtractYear('fecha_inicio')).filter(mes=12, anio=2023).aggregate(sumatotal=Sum('monto_total')))
  enero2024 = (entidadesFinancieras2.objects.annotate(mes=ExtractMonth('fecha_inicio'), anio=ExtractYear('fecha_inicio')).filter(mes=1, anio=2024).aggregate(sumatotal=Sum('monto_total')))
  febrero2024 = (entidadesFinancieras2.objects.annotate(mes=ExtractMonth('fecha_inicio'), anio=ExtractYear('fecha_inicio')).filter(mes=2, anio=2024).aggregate(sumatotal=Sum('monto_total')))
  marzo2024 = (entidadesFinancieras2.objects.annotate(mes=ExtractMonth('fecha_inicio'), anio=ExtractYear('fecha_inicio')).filter(mes=3, anio=2024).aggregate(sumatotal=Sum('monto_total')))
  abril2024 = (entidadesFinancieras2.objects.annotate(mes=ExtractMonth('fecha_inicio'), anio=ExtractYear('fecha_inicio')).filter(mes=4, anio=2024).aggregate(sumatotal=Sum('monto_total')))
  mayo2024 = (entidadesFinancieras2.objects.annotate(mes=ExtractMonth('fecha_inicio'), anio=ExtractYear('fecha_inicio')).filter(mes=5, anio=2024).aggregate(sumatotal=Sum('monto_total')))
  junio2024 = (entidadesFinancieras2.objects.annotate(mes=ExtractMonth('fecha_inicio'), anio=ExtractYear('fecha_inicio')).filter(mes=6, anio=2024).aggregate(sumatotal=Sum('monto_total')))
  julio2024 = (entidadesFinancieras2.objects.annotate(mes=ExtractMonth('fecha_inicio'), anio=ExtractYear('fecha_inicio')).filter(mes=7, anio=2024).aggregate(sumatotal=Sum('monto_total')))
  agosto2024 = (entidadesFinancieras2.objects.annotate(mes=ExtractMonth('fecha_inicio'), anio=ExtractYear('fecha_inicio')).filter(mes=8, anio=2024).aggregate(sumatotal=Sum('monto_total')))
  septiembre2024 = (entidadesFinancieras2.objects.annotate(mes=ExtractMonth('fecha_inicio'), anio=ExtractYear('fecha_inicio')).filter(mes=9, anio=2024).aggregate(sumatotal=Sum('monto_total')))
  octubre2024 = (entidadesFinancieras2.objects.annotate(mes=ExtractMonth('fecha_inicio'), anio=ExtractYear('fecha_inicio')).filter(mes=10, anio=2024).aggregate(sumatotal=Sum('monto_total')))
  noviembre2024 = (entidadesFinancieras2.objects.annotate(mes=ExtractMonth('fecha_inicio'), anio=ExtractYear('fecha_inicio')).filter(mes=11, anio=2024).aggregate(sumatotal=Sum('monto_total')))
  diciembre2024 = (entidadesFinancieras2.objects.annotate(mes=ExtractMonth('fecha_inicio'), anio=ExtractYear('fecha_inicio')).filter(mes=12, anio=2024).aggregate(sumatotal=Sum('monto_total')))



  mayo2023T = mayo2023['sumatotal'] 
  junio2023T = junio2023['sumatotal']
  julio2023T = julio2023['sumatotal']
  agosto2023T = agosto2023['sumatotal']
  septiembre2023T = septiembre2023['sumatotal']
  octubre2023T = octubre2023['sumatotal']
  noviembre2023T = noviembre2023['sumatotal']
  diciembre2023T = diciembre2023['sumatotal']
  enero2024T = enero2024['sumatotal']
  febrero2024T = febrero2024['sumatotal']
  marzo2024T = marzo2024['sumatotal']
  abril2024T = abril2024['sumatotal']
  mayo2024T = mayo2024['sumatotal']
  junio2024T = junio2024['sumatotal']
  julio2024T = julio2024['sumatotal']
  agosto2024T = agosto2024['sumatotal']
  septiembre2024T = septiembre2024['sumatotal']
  octubre2024T = octubre2024['sumatotal']
  noviembre2024T = noviembre2024['sumatotal']
  diciembre2024T = diciembre2024['sumatotal']

  serie = [mayo2023T, junio2023T, julio2023T, agosto2023T, septiembre2023T, octubre2023T, noviembre2023T, diciembre2023T, enero2024T, febrero2024T, marzo2024T, abril2024T, mayo2024T, junio2024T, julio2024T, agosto2024T, septiembre2024T, octubre2024T, noviembre2024T, diciembre2024T ]

  chart = {
    'tooltip': {
    'trigger': 'axis',
    'axisPointer': {
      'type': 'shadow'
    }
  },
  'grid': {
    'left': '3%',
    'right': '4%',
    'bottom': '3%',
    'containLabel': 'true'
  },
  'xAxis': [
    {
      'type': 'category',
      'data': ['MAYO 2023', 'JUNIO 2023', 'JULIO 2023', 'AGOSTO 2023', 'SEPTIEMBRE 2023', 'OCTUBRE 2023', 'NOVIEMBRE 2023', 'DICIEMBRE 2023', 'ENERO 2024', 'FEBRERO 2024', 'MARZO 2024', 'ABRIL 2024', 'MAYO 2024', 'JUNIO 2024', 'JULIO 2024', 'AGOSTO 2024', 'SEPTIEMBRE 2024', 'OCTUBRE 2024', 'NOVIEMBRE 2024', 'DICIEMBRE 2024'],
      'axisLabel': {
                    'rotate': 30,                },
      'axisTick': {
        'alignWithLabel': 'true'
      }
    }
  ],
  'yAxis': [
    {
      'type': 'value'
    }
  ],
    'series': [
      {
        'name': 'HISTORIAL DE FINANCIAMIENTO',
        'type': 'bar',
        'barWidth': '60%',
        'data': serie,
        'color' : '#753232'
      }
    ]

    }

  return JsonResponse(chart)


def delete_credit(request, id):
  credit = get_object_or_404(entidadesFinancieras2, pk= id)
  credit.delete()
  messages.success(request, 'Registro eliminado en la base de datos')
  return redirect('home')


def delete_product(request, id):
  product = get_object_or_404(productos, pk= id)
  product.delete()
  messages.success(request, 'Producto eliminado en la base de datos')
  return redirect('gestionProductos')



def get_chart5(request):

#PROYECTOS DE INVERSIÓN POR SUBSECTOR

  sub_agricola = (entidadesFinancieras2.objects.filter(subsector='Agricola').count())
  sub_pecuario = (entidadesFinancieras2.objects.filter(subsector='Pecuario').count())
  sub_acuicola = (entidadesFinancieras2.objects.filter(subsector='Acuicola').count())
  sub_pesquero = (entidadesFinancieras2.objects.filter(subsector='Pesquero').count())
  sub_forestal = (entidadesFinancieras2.objects.filter(subsector='Forestal').count())


  chart = {
    'tooltip': {
    'trigger': 'item'
  },
  'legend': {
    'top': '5%',
    'left': 'center'
  },
  'series': [
    {
      'name': 'PROYECTOS DE INVERSIÓN POR SUBSECTOR',
      'type': 'pie',
      'radius': ['40%', '60%'],
      'avoidLabelOverlap': 'false',
      'emphasis': {
        'label': {
          'show': 'true',
          'fontSize': '40',
          'fontWeight': 'bold'
        }
      },
      'labelLine': {
        'show': 'false'
      },
      'data': [
        { 'value': sub_agricola, 'name': 'Agricola' },
        { 'value': sub_pecuario, 'name': 'Pecuario' },
        { 'value': sub_acuicola, 'name': 'Acuicola' },
        { 'value': sub_pesquero, 'name': 'Pesquero' },
        { 'value': sub_forestal, 'name': 'Forestal' }
      ]
    }
  ]
  }

  return JsonResponse(chart)
  


def get_chart52023(request):

#PROYECTOS DE INVERSIÓN POR SUBSECTOR 2023

  sub_agricola = (entidadesFinancieras2.objects.filter(subsector='Agricola', fecha_inicio__year=2023).count())
  sub_pecuario = (entidadesFinancieras2.objects.filter(subsector='Pecuario', fecha_inicio__year=2023).count())
  sub_acuicola = (entidadesFinancieras2.objects.filter(subsector='Acuicola', fecha_inicio__year=2023).count())
  sub_pesquero = (entidadesFinancieras2.objects.filter(subsector='Pesquero', fecha_inicio__year=2023).count())
  sub_forestal = (entidadesFinancieras2.objects.filter(subsector='Forestal', fecha_inicio__year=2023).count())


  chart = {
    'tooltip': {
    'trigger': 'item'
  },
  'legend': {
    'top': '5%',
    'left': 'center'
  },
  'series': [
    {
      'name': 'PROYECTOS DE INVERSIÓN POR SUBSECTOR',
      'type': 'pie',
      'radius': ['40%', '60%'],
      'avoidLabelOverlap': 'false',
      'emphasis': {
        'label': {
          'show': 'true',
          'fontSize': '40',
          'fontWeight': 'bold'
        }
      },
      'labelLine': {
        'show': 'false'
      },
      'data': [
        { 'value': sub_agricola, 'name': 'Agricola' },
        { 'value': sub_pecuario, 'name': 'Pecuario' },
        { 'value': sub_acuicola, 'name': 'Acuicola' },
        { 'value': sub_pesquero, 'name': 'Pesquero' },
        { 'value': sub_forestal, 'name': 'Forestal' }
      ]
    }
  ]
  }

  return JsonResponse(chart)



def get_chart52024(request):

#PROYECTOS DE INVERSIÓN POR SUBSECTOR 2024

  sub_agricola = (entidadesFinancieras2.objects.filter(subsector='Agricola', fecha_inicio__year=2024).count())
  sub_pecuario = (entidadesFinancieras2.objects.filter(subsector='Pecuario', fecha_inicio__year=2024).count())
  sub_acuicola = (entidadesFinancieras2.objects.filter(subsector='Acuicola', fecha_inicio__year=2024).count())
  sub_pesquero = (entidadesFinancieras2.objects.filter(subsector='Pesquero', fecha_inicio__year=2024).count())
  sub_forestal = (entidadesFinancieras2.objects.filter(subsector='Forestal', fecha_inicio__year=2024).count())


  chart = {
    'tooltip': {
    'trigger': 'item'
  },
  'legend': {
    'top': '5%',
    'left': 'center'
  },
  'series': [
    {
      'name': 'PROYECTOS DE INVERSIÓN POR SUBSECTOR',
      'type': 'pie',
      'radius': ['40%', '60%'],
      'avoidLabelOverlap': 'false',
      'emphasis': {
        'label': {
          'show': 'true',
          'fontSize': '40',
          'fontWeight': 'bold'
        }
      },
      'labelLine': {
        'show': 'false'
      },
      'data': [
        { 'value': sub_agricola, 'name': 'Agricola' },
        { 'value': sub_pecuario, 'name': 'Pecuario' },
        { 'value': sub_acuicola, 'name': 'Acuicola' },
        { 'value': sub_pesquero, 'name': 'Pesquero' },
        { 'value': sub_forestal, 'name': 'Forestal' }
      ]
    }
  ]
  }

  return JsonResponse(chart)




def graficasPublicas(request):



      #CANTIDAD DE PROYECTOS 
      conteo_VC = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES').values('municipio__region').annotate(total=Count('id')))
      conteo_IST = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO').values('municipio__region').annotate(total=Count('id')))
      conteo_MIX = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA').values('municipio__region').annotate(total=Count('id')))
      conteo_PAPA = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN').values('municipio__region').annotate(total=Count('id')))
      conteo_COS = (entidadesFinancieras2.objects.filter(municipio__region='COSTA').values('municipio__region').annotate(total=Count('id')))
      conteo_SJ = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ').values('municipio__region').annotate(total=Count('id')))
      conteo_SS = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR').values('municipio__region').annotate(total=Count('id')))
      conteo_SFM = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON').values('municipio__region').annotate(total=Count('id')))
      
      totalCPG = entidadesFinancieras2.objects.count()

      #MONTOS DE FINANCIAMIENTO
      monto_VC = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES').aggregate(sumatotal=Sum('monto_total')))
      monto_IST = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO').aggregate(sumatotal=Sum('monto_total')))
      monto_MIX = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA').aggregate(sumatotal=Sum('monto_total')))
      monto_PAPA = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN').aggregate(sumatotal=Sum('monto_total')))
      monto_COS = (entidadesFinancieras2.objects.filter(municipio__region='COSTA').aggregate(sumatotal=Sum('monto_total')))
      monto_SJ = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ').aggregate(sumatotal=Sum('monto_total')))
      monto_SS = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR').aggregate(sumatotal=Sum('monto_total')))
      monto_SFM = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON').aggregate(sumatotal=Sum('monto_total')))

      monto_VC_templates = monto_VC['sumatotal'] or 0
      monto_IST_templates = monto_IST['sumatotal'] or 0
      monto_MIX_templates = monto_MIX['sumatotal'] or 0
      monto_PAPA_templates = monto_PAPA['sumatotal'] or 0
      monto_COS_templates = monto_COS['sumatotal'] or 0
      monto_SJ_templates = monto_SJ['sumatotal'] or 0
      monto_SS_templates = monto_SS['sumatotal'] or 0
      monto_SFM_templates = monto_SFM['sumatotal'] or 0

      totalMFG = monto_VC_templates + monto_IST_templates + monto_MIX_templates + monto_PAPA_templates + monto_COS_templates + monto_SJ_templates + monto_SS_templates + monto_SFM_templates


      #GARANTIAS LIQUIDAS
      garantias_VC = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_IST = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_MIX = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_PAPA = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_COS = (entidadesFinancieras2.objects.filter(municipio__region='COSTA').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_SJ = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_SS = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_SFM = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      

      garantia_VC_templates = garantias_VC['sumatotal'] or 0
      garantia_IST_templates = garantias_IST['sumatotal'] or 0
      garantia_MIX_templates = garantias_MIX['sumatotal'] or 0
      garantia_PAPA_templates = garantias_PAPA['sumatotal'] or 0
      garantia_COS_templates = garantias_COS['sumatotal'] or 0
      garantia_SJ_templates = garantias_SJ['sumatotal'] or 0
      garantia_SS_templates = garantias_SS['sumatotal'] or 0
      garantia_SFM_templates = garantias_SFM['sumatotal']  or 0

      totalGLG = garantia_VC_templates + garantia_IST_templates + garantia_MIX_templates + garantia_PAPA_templates + garantia_COS_templates + garantia_SJ_templates + garantia_SS_templates + garantia_SFM_templates

      #BENEFICIARIOS 
      beneficiarios_VC = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_IST = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_MIX = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_PAPA = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_COS = (entidadesFinancieras2.objects.filter(municipio__region='COSTA').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_SJ = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_SS = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_SFM = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON').aggregate(sumatotal=Sum('total_beneficiarios')))

 
      beneficiarios_VC_T = beneficiarios_VC['sumatotal'] or 0
      beneficiarios_IST_T = beneficiarios_IST['sumatotal'] or 0
      beneficiarios_MIX_T = beneficiarios_MIX['sumatotal'] or 0
      beneficiarios_PAPA_T = beneficiarios_PAPA['sumatotal'] or 0
      beneficiarios_COS_T = beneficiarios_COS['sumatotal'] or 0
      beneficiarios_SJ_T = beneficiarios_SJ['sumatotal'] or 0
      beneficiarios_SS_T = beneficiarios_SS['sumatotal'] or 0
      beneficiarios_SFM_T = beneficiarios_SFM['sumatotal'] or 0

      totalBG = beneficiarios_VC_T + beneficiarios_IST_T + beneficiarios_MIX_T + beneficiarios_PAPA_T + beneficiarios_COS_T + beneficiarios_SJ_T + beneficiarios_SS_T + beneficiarios_SFM_T

      #E100
      E100_VC = (entidadesFinancieras2.objects.filter(municipio__eCien=True, municipio__region='VALLES CENTRALES').count())
      E100_IST = (entidadesFinancieras2.objects.filter(municipio__eCien=True, municipio__region='ISTMO').count())
      E100_MIX = (entidadesFinancieras2.objects.filter(municipio__eCien=True, municipio__region='MIXTECA').count())
      E100_PAPA = (entidadesFinancieras2.objects.filter(municipio__eCien=True, municipio__region='PAPALOAPAN').count())
      E100_COS = (entidadesFinancieras2.objects.filter(municipio__eCien=True, municipio__region='COSTA').count())
      E100_SJ = (entidadesFinancieras2.objects.filter(municipio__eCien=True, municipio__region='SIERRA DE JUAREZ').count())
      E100_SS = (entidadesFinancieras2.objects.filter(municipio__eCien=True, municipio__region='SIERRA SUR').count())
      E100_SFM = (entidadesFinancieras2.objects.filter(municipio__eCien=True, municipio__region='SIERRA DE FLORES MAGON').count())

      totalE100G = E100_VC + E100_IST + E100_MIX + E100_PAPA + E100_COS + E100_SJ + E100_SS + E100_SFM

      #PUEBLOSINDIGENAS
      PI_VC = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='VALLES CENTRALES').count())
      PI_IST = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='ISTMO').count())
      PI_MIX = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='MIXTECA').count())
      PI_PAPA = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='PAPALOAPAN').count())
      PI_COS = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='COSTA').count())
      PI_SJ = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='SIERRA DE JUAREZ').count())
      PI_SS = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='SIERRA SUR').count())
      PI_SFM = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='SIERRA DE FLORES MAGON').count())

      totalPIG = PI_VC + PI_IST + PI_MIX + PI_PAPA + PI_COS + PI_SJ + PI_SS + PI_SFM

      #EMPLEOS DIRECTOS
      empleos_VC = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES').aggregate(sumatotal=Sum('empleos_directos')))
      empleos_IST = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO').aggregate(sumatotal=Sum('empleos_directos')))
      empleos_MIX = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA').aggregate(sumatotal=Sum('empleos_directos')))
      empleos_PAPA = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN').aggregate(sumatotal=Sum('empleos_directos')))
      empleos_COS = (entidadesFinancieras2.objects.filter(municipio__region='COSTA').aggregate(sumatotal=Sum('empleos_directos')))
      empleos_SJ = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ').aggregate(sumatotal=Sum('empleos_directos')))
      empleos_SS = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR').aggregate(sumatotal=Sum('empleos_directos')))
      empleos_SFM = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON').aggregate(sumatotal=Sum('empleos_directos')))


      empleos_VC_T = empleos_VC['sumatotal'] or 0
      empleos_IST_T = empleos_IST['sumatotal'] or 0
      empleos_MIX_T = empleos_MIX['sumatotal'] or 0
      empleos_PAPA_T = empleos_PAPA['sumatotal'] or 0
      empleos_COS_T = empleos_COS['sumatotal'] or 0
      empleos_SJ_T = empleos_SJ['sumatotal'] or 0
      empleos_SS_T= empleos_SS['sumatotal'] or 0
      empleos_SFM_T = empleos_SFM['sumatotal'] or 0

      totalEDG = empleos_VC_T + empleos_IST_T + empleos_MIX_T + empleos_PAPA_T + empleos_COS_T + empleos_SJ_T + empleos_SS_T + empleos_SFM_T


      #CANTIDAD DE PROYECTOS 2023
      conteo_VC_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='VALLES CENTRALES').values('municipio__region').annotate(total=Count('id')))
      conteo_IST_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='ISTMO').values('municipio__region').annotate(total=Count('id')))
      conteo_MIX_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='MIXTECA').values('municipio__region').annotate(total=Count('id')))
      conteo_PAPA_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='PAPALOAPAN').values('municipio__region').annotate(total=Count('id')))
      conteo_COS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='COSTA').values('municipio__region').annotate(total=Count('id')))
      conteo_SJ_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA DE JUAREZ').values('municipio__region').annotate(total=Count('id')))
      conteo_SS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA SUR').values('municipio__region').annotate(total=Count('id')))
      conteo_SFM_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA DE FLORES MAGON').values('municipio__region').annotate(total=Count('id')))
      
      totalCPG_2023 = entidadesFinancieras2.objects.filter(fecha_inicio__year=2023).count()


      #MONTOS DE FINANCIAMIENTO 2023
      monto_VC_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='VALLES CENTRALES').aggregate(sumatotal=Sum('monto_total')))
      monto_IST_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='ISTMO').aggregate(sumatotal=Sum('monto_total')))
      monto_MIX_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='MIXTECA').aggregate(sumatotal=Sum('monto_total')))
      monto_PAPA_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='PAPALOAPAN').aggregate(sumatotal=Sum('monto_total')))
      monto_COS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='COSTA').aggregate(sumatotal=Sum('monto_total')))
      monto_SJ_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA DE JUAREZ').aggregate(sumatotal=Sum('monto_total')))
      monto_SS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA SUR').aggregate(sumatotal=Sum('monto_total')))
      monto_SFM_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA DE FLORES MAGON').aggregate(sumatotal=Sum('monto_total')))

      monto_VC_templates_2023 = monto_VC_2023['sumatotal'] or 0
      monto_IST_templates_2023 = monto_IST_2023['sumatotal'] or 0
      monto_MIX_templates_2023 = monto_MIX_2023['sumatotal'] or 0
      monto_PAPA_templates_2023 = monto_PAPA_2023['sumatotal'] or 0
      monto_COS_templates_2023 = monto_COS_2023['sumatotal'] or 0
      monto_SJ_templates_2023 = monto_SJ_2023['sumatotal'] or 0
      monto_SS_templates_2023 = monto_SS_2023['sumatotal'] or 0
      monto_SFM_templates_2023 = monto_SFM_2023['sumatotal'] or 0

      totalMFG_2023 = monto_VC_templates_2023 + monto_IST_templates_2023 + monto_MIX_templates_2023 + monto_PAPA_templates_2023 + monto_COS_templates_2023 + monto_SJ_templates_2023 + monto_SS_templates_2023 + monto_SFM_templates_2023


      #GARANTIAS LIQUIDAS 2023
      garantias_VC_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='VALLES CENTRALES').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_IST_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='ISTMO').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_MIX_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='MIXTECA').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_PAPA_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='PAPALOAPAN').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_COS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='COSTA').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_SJ_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA DE JUAREZ').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_SS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA SUR').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_SFM_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA DE FLORES MAGON').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      

      garantia_VC_templates_2023 = garantias_VC_2023['sumatotal'] or 0
      garantia_IST_templates_2023 = garantias_IST_2023['sumatotal'] or 0
      garantia_MIX_templates_2023 = garantias_MIX_2023['sumatotal'] or 0
      garantia_PAPA_templates_2023 = garantias_PAPA_2023['sumatotal'] or 0
      garantia_COS_templates_2023 = garantias_COS_2023['sumatotal'] or 0
      garantia_SJ_templates_2023 = garantias_SJ_2023['sumatotal'] or 0
      garantia_SS_templates_2023 = garantias_SS_2023['sumatotal'] or 0
      garantia_SFM_templates_2023 = garantias_SFM_2023['sumatotal'] or 0

      totalGLG_2023 = garantia_VC_templates_2023 + garantia_IST_templates_2023 + garantia_MIX_templates_2023 + garantia_PAPA_templates_2023 + garantia_COS_templates_2023 + garantia_SJ_templates_2023 + garantia_SS_templates_2023 + garantia_SFM_templates_2023



      #BENEFICIARIOS 2023
      beneficiarios_VC_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='VALLES CENTRALES').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_IST_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='ISTMO').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_MIX_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='MIXTECA').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_PAPA_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='PAPALOAPAN').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_COS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='COSTA').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_SJ_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA DE JUAREZ').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_SS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA SUR').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_SFM_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA DE FLORES MAGON').aggregate(sumatotal=Sum('total_beneficiarios')))

 
      beneficiarios_VC_T_2023 = beneficiarios_VC_2023['sumatotal'] or 0
      beneficiarios_IST_T_2023 = beneficiarios_IST_2023['sumatotal'] or 0
      beneficiarios_MIX_T_2023 = beneficiarios_MIX_2023['sumatotal'] or 0
      beneficiarios_PAPA_T_2023 = beneficiarios_PAPA_2023['sumatotal'] or 0
      beneficiarios_COS_T_2023 = beneficiarios_COS_2023['sumatotal'] or 0
      beneficiarios_SJ_T_2023 = beneficiarios_SJ_2023['sumatotal'] or 0
      beneficiarios_SS_T_2023 = beneficiarios_SS_2023['sumatotal'] or 0
      beneficiarios_SFM_T_2023 = beneficiarios_SFM_2023['sumatotal'] or 0

      totalBG_2023 = beneficiarios_VC_T_2023 + beneficiarios_IST_T_2023 + beneficiarios_MIX_T_2023 + beneficiarios_PAPA_T_2023 + beneficiarios_COS_T_2023 + beneficiarios_SJ_T_2023 + beneficiarios_SS_T_2023 + beneficiarios_SFM_T_2023



      #E1002023
      E100_VC_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__eCien=True, municipio__region='VALLES CENTRALES').count())
      E100_IST_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__eCien=True, municipio__region='ISTMO').count())
      E100_MIX_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__eCien=True, municipio__region='MIXTECA').count())
      E100_PAPA_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__eCien=True, municipio__region='PAPALOAPAN').count())
      E100_COS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__eCien=True, municipio__region='COSTA').count())
      E100_SJ_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__eCien=True, municipio__region='SIERRA DE JUAREZ').count())
      E100_SS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__eCien=True, municipio__region='SIERRA SUR').count())
      E100_SFM_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__eCien=True, municipio__region='SIERRA DE FLORES MAGON').count())

      totalE100G_2023 = E100_VC_2023 + E100_IST_2023 + E100_MIX_2023 + E100_PAPA_2023 + E100_COS_2023 + E100_SJ_2023 + E100_SS_2023 + E100_SFM_2023


      #PUEBLOSINDIGENAS 2023
      PI_VC_2023 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='VALLES CENTRALES', fecha_inicio__year=2023).count())
      PI_IST_2023 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='ISTMO', fecha_inicio__year=2023).count())
      PI_MIX_2023 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='MIXTECA', fecha_inicio__year=2023).count())
      PI_PAPA_2023 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='PAPALOAPAN', fecha_inicio__year=2023).count())
      PI_COS_2023 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='COSTA', fecha_inicio__year=2023).count())
      PI_SJ_2023 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='SIERRA DE JUAREZ', fecha_inicio__year=2023).count())
      PI_SS_2023 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='SIERRA SUR', fecha_inicio__year=2023).count())
      PI_SFM_2023 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='SIERRA DE FLORES MAGON', fecha_inicio__year=2023).count())

      totalPIG_2023 = PI_VC_2023 + PI_IST_2023 + PI_MIX_2023 + PI_PAPA_2023 + PI_COS_2023 + PI_SJ_2023 + PI_SS_2023 + PI_SFM_2023


      #EMPLEOS DIRECTOS 2023
      empleos_VC_2023 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', fecha_inicio__year=2023).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_IST_2023 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', fecha_inicio__year=2023).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_MIX_2023 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', fecha_inicio__year=2023).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_PAPA_2023 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', fecha_inicio__year=2023).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_COS_2023 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', fecha_inicio__year=2023).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_SJ_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', fecha_inicio__year=2023).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_SS_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', fecha_inicio__year=2023).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_SFM_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', fecha_inicio__year=2023).aggregate(sumatotal=Sum('empleos_directos')))

      empleos_VC_T_2023 = empleos_VC_2023['sumatotal'] or 0
      empleos_IST_T_2023 = empleos_IST_2023['sumatotal'] or 0
      empleos_MIX_T_2023 = empleos_MIX_2023['sumatotal'] or 0
      empleos_PAPA_T_2023 = empleos_PAPA_2023['sumatotal'] or 0
      empleos_COS_T_2023 = empleos_COS_2023['sumatotal'] or 0
      empleos_SJ_T_2023 = empleos_SJ_2023['sumatotal'] or 0
      empleos_SS_T_2023 = empleos_SS_2023['sumatotal'] or 0
      empleos_SFM_T_2023 = empleos_SFM_2023['sumatotal'] or 0

      totalEDG_2023 = empleos_VC_T_2023 + empleos_IST_T_2023 + empleos_MIX_T_2023 + empleos_PAPA_T_2023 + empleos_COS_T_2023 + empleos_SJ_T_2023 + empleos_SS_T_2023 + empleos_SFM_T_2023


      #CANTIDAD DE PROYECTOS 2024
      conteo_VC_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='VALLES CENTRALES').values('municipio__region').annotate(total=Count('id')))
      conteo_IST_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='ISTMO').values('municipio__region').annotate(total=Count('id')))
      conteo_MIX_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='MIXTECA').values('municipio__region').annotate(total=Count('id')))
      conteo_PAPA_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='PAPALOAPAN').values('municipio__region').annotate(total=Count('id')))
      conteo_COS_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='COSTA').values('municipio__region').annotate(total=Count('id')))
      conteo_SJ_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='SIERRA DE JUAREZ').values('municipio__region').annotate(total=Count('id')))
      conteo_SS_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='SIERRA SUR').values('municipio__region').annotate(total=Count('id')))
      conteo_SFM_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='SIERRA DE FLORES MAGON').values('municipio__region').annotate(total=Count('id')))
      
      totalCPG_2024 = entidadesFinancieras2.objects.filter(fecha_inicio__year=2024).count()

      #MONTOS DE FINANCIAMIENTO 2024
      monto_VC_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='VALLES CENTRALES').aggregate(sumatotal=Sum('monto_total')))
      monto_IST_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='ISTMO').aggregate(sumatotal=Sum('monto_total')))
      monto_MIX_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='MIXTECA').aggregate(sumatotal=Sum('monto_total')))
      monto_PAPA_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='PAPALOAPAN').aggregate(sumatotal=Sum('monto_total')))
      monto_COS_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='COSTA').aggregate(sumatotal=Sum('monto_total')))
      monto_SJ_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='SIERRA DE JUAREZ').aggregate(sumatotal=Sum('monto_total')))
      monto_SS_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='SIERRA SUR').aggregate(sumatotal=Sum('monto_total')))
      monto_SFM_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='SIERRA DE FLORES MAGON').aggregate(sumatotal=Sum('monto_total')))

      monto_VC_templates_2024 = monto_VC_2024['sumatotal'] or 0
      monto_IST_templates_2024 = monto_IST_2024['sumatotal'] or 0
      monto_MIX_templates_2024 = monto_MIX_2024['sumatotal'] or 0
      monto_PAPA_templates_2024 = monto_PAPA_2024['sumatotal'] or 0
      monto_COS_templates_2024 = monto_COS_2024['sumatotal'] or 0
      monto_SJ_templates_2024 = monto_SJ_2024['sumatotal'] or 0
      monto_SS_templates_2024 = monto_SS_2024['sumatotal'] or 0
      monto_SFM_templates_2024 = monto_SFM_2024['sumatotal'] or 0


      totalMFG_2024 = monto_VC_templates_2024 + monto_IST_templates_2024 + monto_MIX_templates_2024 + monto_PAPA_templates_2024 + monto_COS_templates_2024 + monto_SJ_templates_2024 + monto_SS_templates_2024 + monto_SFM_templates_2024


      #GARANTIAS LIQUIDAS 2024
      garantias_VC_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='VALLES CENTRALES').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_IST_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='ISTMO').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_MIX_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='MIXTECA').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_PAPA_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='PAPALOAPAN').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_COS_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='COSTA').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_SJ_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='SIERRA DE JUAREZ').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_SS_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='SIERRA SUR').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_SFM_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='SIERRA DE FLORES MAGON').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      

      garantia_VC_templates_2024 = garantias_VC_2024['sumatotal'] or 0
      garantia_IST_templates_2024 = garantias_IST_2024['sumatotal'] or 0
      garantia_MIX_templates_2024 = garantias_MIX_2024['sumatotal'] or 0
      garantia_PAPA_templates_2024 = garantias_PAPA_2024['sumatotal'] or 0
      garantia_COS_templates_2024 = garantias_COS_2024['sumatotal'] or 0
      garantia_SJ_templates_2024 = garantias_SJ_2024['sumatotal'] or 0
      garantia_SS_templates_2024 = garantias_SS_2024['sumatotal'] or 0
      garantia_SFM_templates_2024 = garantias_SFM_2024['sumatotal'] or 0

      totalGLG_2024 = garantia_VC_templates_2024 + garantia_IST_templates_2024 + garantia_MIX_templates_2024 + garantia_PAPA_templates_2024 + garantia_COS_templates_2024 + garantia_SJ_templates_2024 + garantia_SS_templates_2024 + garantia_SFM_templates_2024


      #BENEFICIARIOS 2024
      beneficiarios_VC_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='VALLES CENTRALES').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_IST_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='ISTMO').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_MIX_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='MIXTECA').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_PAPA_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='PAPALOAPAN').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_COS_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='COSTA').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_SJ_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='SIERRA DE JUAREZ').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_SS_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='SIERRA SUR').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_SFM_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__region='SIERRA DE FLORES MAGON').aggregate(sumatotal=Sum('total_beneficiarios')))

 
      beneficiarios_VC_T_2024 = beneficiarios_VC_2024['sumatotal'] or 0 
      beneficiarios_IST_T_2024 = beneficiarios_IST_2024['sumatotal'] or 0 
      beneficiarios_MIX_T_2024 = beneficiarios_MIX_2024['sumatotal'] or 0 
      beneficiarios_PAPA_T_2024 = beneficiarios_PAPA_2024['sumatotal'] or 0 
      beneficiarios_COS_T_2024 = beneficiarios_COS_2024['sumatotal'] or 0 
      beneficiarios_SJ_T_2024 = beneficiarios_SJ_2024['sumatotal'] or 0 
      beneficiarios_SS_T_2024 = beneficiarios_SS_2024['sumatotal'] or 0 
      beneficiarios_SFM_T_2024 = beneficiarios_SFM_2024['sumatotal'] or 0 

      totalBG_2024 = beneficiarios_VC_T_2024 + beneficiarios_IST_T_2024 + beneficiarios_MIX_T_2024 + beneficiarios_PAPA_T_2024 + beneficiarios_COS_T_2024 + beneficiarios_SJ_T_2024 + beneficiarios_SS_T_2024 + beneficiarios_SFM_T_2024



      #E1002024
      E100_VC_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__eCien=True, municipio__region='VALLES CENTRALES').count())
      E100_IST_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__eCien=True, municipio__region='ISTMO').count())
      E100_MIX_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__eCien=True, municipio__region='MIXTECA').count())
      E100_PAPA_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__eCien=True, municipio__region='PAPALOAPAN').count())
      E100_COS_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__eCien=True, municipio__region='COSTA').count())
      E100_SJ_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__eCien=True, municipio__region='SIERRA DE JUAREZ').count())
      E100_SS_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__eCien=True, municipio__region='SIERRA SUR').count())
      E100_SFM_2024 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2024, municipio__eCien=True, municipio__region='SIERRA DE FLORES MAGON').count())

      totalE100G_2024 = E100_VC_2024 + E100_IST_2024 + E100_MIX_2024 + E100_PAPA_2024 + E100_COS_2024 + E100_SJ_2024 + E100_SS_2024 + E100_SFM_2024


      #PUEBLOSINDIGENAS 2024
      PI_VC_2024 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='VALLES CENTRALES', fecha_inicio__year=2024).count())
      PI_IST_2024 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='ISTMO', fecha_inicio__year=2024).count())
      PI_MIX_2024 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='MIXTECA', fecha_inicio__year=2024).count())
      PI_PAPA_2024 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='PAPALOAPAN', fecha_inicio__year=2024).count())
      PI_COS_2024 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='COSTA', fecha_inicio__year=2024).count())
      PI_SJ_2024 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='SIERRA DE JUAREZ', fecha_inicio__year=2024).count())
      PI_SS_2024 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='SIERRA SUR', fecha_inicio__year=2024).count())
      PI_SFM_2024 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='SIERRA DE FLORES MAGON', fecha_inicio__year=2024).count())

      totalPIG_2024 = PI_VC_2024 + PI_IST_2024 + PI_MIX_2024 + PI_PAPA_2024 + PI_COS_2024 + PI_SJ_2024 + PI_SS_2024 + PI_SFM_2024


      #EMPLEOS DIRECTOS 2024
      empleos_VC_2024 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', fecha_inicio__year=2024).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_IST_2024 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', fecha_inicio__year=2024).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_MIX_2024 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', fecha_inicio__year=2024).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_PAPA_2024 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', fecha_inicio__year=2024).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_COS_2024 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', fecha_inicio__year=2024).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_SJ_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', fecha_inicio__year=2024).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_SS_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', fecha_inicio__year=2024).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_SFM_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', fecha_inicio__year=2024).aggregate(sumatotal=Sum('empleos_directos')))

      empleos_VC_T_2024 = empleos_VC_2024['sumatotal'] or 0
      empleos_IST_T_2024 = empleos_IST_2024['sumatotal'] or 0
      empleos_MIX_T_2024 = empleos_MIX_2024['sumatotal'] or 0
      empleos_PAPA_T_2024 = empleos_PAPA_2024['sumatotal'] or 0
      empleos_COS_T_2024 = empleos_COS_2024['sumatotal'] or 0
      empleos_SJ_T_2024 = empleos_SJ_2024['sumatotal'] or 0
      empleos_SS_T_2024 = empleos_SS_2024['sumatotal'] or 0
      empleos_SFM_T_2024 = empleos_SFM_2024['sumatotal'] or 0       

      totalEDG_2024 = empleos_VC_T_2024 + empleos_IST_T_2024 + empleos_MIX_T_2024 + empleos_PAPA_T_2024 + empleos_COS_T_2024 + empleos_SJ_T_2024 + empleos_SS_T_2024 + empleos_SFM_T_2024



      #CANTIDAD DE MUNICIPIOS GENERAL
      can_municipios_VC = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES').values('municipio').distinct().count())
      can_municipios_IST = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO').values('municipio').distinct().count())
      can_municipios_MIX = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA').values('municipio').distinct().count())
      can_municipios_PAPA = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN').values('municipio').distinct().count())
      can_municipios_COS = (entidadesFinancieras2.objects.filter(municipio__region='COSTA').values('municipio').distinct().count())
      can_municipios_SJ = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ').values('municipio').distinct().count())
      can_municipios_SS = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR').values('municipio').distinct().count())
      can_municipios_SFM = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON').values('municipio').distinct().count())

      totalCMG = can_municipios_VC + can_municipios_IST + can_municipios_MIX + can_municipios_PAPA + can_municipios_COS + can_municipios_SJ + can_municipios_SS + can_municipios_SFM


      #CANTIDAD DE MUNICIPIOS GENERAL 2023
      can_municipios_VC_2023 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', fecha_inicio__year=2023).values('municipio').distinct().count())
      can_municipios_IST_2023 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', fecha_inicio__year=2023).values('municipio').distinct().count())
      can_municipios_MIX_2023 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', fecha_inicio__year=2023).values('municipio').distinct().count())
      can_municipios_PAPA_2023 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', fecha_inicio__year=2023).values('municipio').distinct().count())
      can_municipios_COS_2023 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', fecha_inicio__year=2023).values('municipio').distinct().count())
      can_municipios_SJ_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', fecha_inicio__year=2023).values('municipio').distinct().count())
      can_municipios_SS_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', fecha_inicio__year=2023).values('municipio').distinct().count())
      can_municipios_SFM_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', fecha_inicio__year=2023).values('municipio').distinct().count())

      totalCMG_2023 = can_municipios_VC_2023 + can_municipios_IST_2023 + can_municipios_MIX_2023 + can_municipios_PAPA_2023 + can_municipios_COS_2023 + can_municipios_SJ_2023 + can_municipios_SS_2023 + can_municipios_SFM_2023



      #CANTIDAD DE MUNICIPIOS GENERAL 2024
      can_municipios_VC_2024 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', fecha_inicio__year=2024).values('municipio').distinct().count())
      can_municipios_IST_2024 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', fecha_inicio__year=2024).values('municipio').distinct().count())
      can_municipios_MIX_2024 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', fecha_inicio__year=2024).values('municipio').distinct().count())
      can_municipios_PAPA_2024 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', fecha_inicio__year=2024).values('municipio').distinct().count())
      can_municipios_COS_2024 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', fecha_inicio__year=2024).values('municipio').distinct().count())
      can_municipios_SJ_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', fecha_inicio__year=2024).values('municipio').distinct().count())
      can_municipios_SS_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', fecha_inicio__year=2024).values('municipio').distinct().count())
      can_municipios_SFM_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', fecha_inicio__year=2024).values('municipio').distinct().count())

      totalCMG_2024 = can_municipios_VC_2024 + can_municipios_IST_2024 + can_municipios_MIX_2024 + can_municipios_PAPA_2024 + can_municipios_COS_2024 + can_municipios_SJ_2024 + can_municipios_SS_2024 + can_municipios_SFM_2024


      #CANTIDAD POR CONCEPTOS DE APOYO 

      cantidad_ct = (entidadesFinancieras2.objects.filter(tipo_concepto='CAPITAL DE TRABAJO').count())
      cantidad_eq = (entidadesFinancieras2.objects.filter(tipo_concepto='EQUIPAMIENTO').count())
      cantidad_iaa = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROALIMENTARIA').count())
      cantidad_iai = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROINDUSTRIAL').count())
      cantidad_ap = (entidadesFinancieras2.objects.filter(tipo_concepto='AGRICULTURA PROTEGIDA').count())
      cantidad_mec = (entidadesFinancieras2.objects.filter(tipo_concepto='MECANIZACION').count())
      cantidad_re = (entidadesFinancieras2.objects.filter(tipo_concepto='REHABILITACION').count())

      total_concepto = cantidad_ct + cantidad_eq + cantidad_iaa + cantidad_iai + cantidad_ap + cantidad_mec + cantidad_re



      #MONTO DE FINANCIAMIENTO POR CONCEPTO DE APOYO
      monto_ct = (entidadesFinancieras2.objects.filter(tipo_concepto='CAPITAL DE TRABAJO').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_eq = (entidadesFinancieras2.objects.filter(tipo_concepto='EQUIPAMIENTO').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_iaa = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROALIMENTARIA').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_iai = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROINDUSTRIAL').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_ap = (entidadesFinancieras2.objects.filter(tipo_concepto='AGRICULTURA PROTEGIDA').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_mec = (entidadesFinancieras2.objects.filter(tipo_concepto='MECANIZACION').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_re = (entidadesFinancieras2.objects.filter(tipo_concepto='REHABILITACION').aggregate(sumatotal=Sum('monto_total')))['sumatotal']

      #GARANTIAS POR CONCEPTO DE APOYO
      garantias_ct = (entidadesFinancieras2.objects.filter(tipo_concepto='CAPITAL DE TRABAJO').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_eq = (entidadesFinancieras2.objects.filter(tipo_concepto='EQUIPAMIENTO').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_iaa = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROALIMENTARIA').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_iai = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROINDUSTRIAL').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_ap = (entidadesFinancieras2.objects.filter(tipo_concepto='AGRICULTURA PROTEGIDA').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_mec = (entidadesFinancieras2.objects.filter(tipo_concepto='MECANIZACION').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_re = (entidadesFinancieras2.objects.filter(tipo_concepto='REHABILITACION').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']




     #CANTIDAD POR CONCEPTOS DE APOYO 2023
      cantidad_ct_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='CAPITAL DE TRABAJO', fecha_inicio__year=2023).count())
      cantidad_eq_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='EQUIPAMIENTO', fecha_inicio__year=2023).count())
      cantidad_iaa_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROALIMENTARIA', fecha_inicio__year=2023).count())
      cantidad_iai_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROINDUSTRIAL', fecha_inicio__year=2023).count())
      cantidad_ap_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='AGRICULTURA PROTEGIDA', fecha_inicio__year=2023).count())
      cantidad_mec_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='MECANIZACION', fecha_inicio__year=2023).count())
      cantidad_re_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='REHABILITACION', fecha_inicio__year=2023).count())


      #MONTO DE FINANCIAMIENTO POR CONCEPTO DE APOYO 2023
      monto_ct_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='CAPITAL DE TRABAJO', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_eq_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='EQUIPAMIENTO', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_iaa_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROALIMENTARIA', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_iai_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROINDUSTRIAL', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_ap_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='AGRICULTURA PROTEGIDA', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_mec_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='MECANIZACION', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_re_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='REHABILITACION', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']

      #GARANTIAS POR CONCEPTO DE APOYO 2023
      garantias_ct_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='CAPITAL DE TRABAJO', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_eq_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='EQUIPAMIENTO', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_iaa_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROALIMENTARIA', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_iai_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROINDUSTRIAL', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_ap_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='AGRICULTURA PROTEGIDA', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_mec_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='MECANIZACION', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_re_2023 = (entidadesFinancieras2.objects.filter(tipo_concepto='REHABILITACION', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']





 #CANTIDAD POR CONCEPTOS DE APOYO 2024
      cantidad_ct_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='CAPITAL DE TRABAJO', fecha_inicio__year=2024).count())
      cantidad_eq_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='EQUIPAMIENTO', fecha_inicio__year=2024).count())
      cantidad_iaa_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROALIMENTARIA', fecha_inicio__year=2024).count())
      cantidad_iai_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROINDUSTRIAL', fecha_inicio__year=2024).count())
      cantidad_ap_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='AGRICULTURA PROTEGIDA', fecha_inicio__year=2024).count())
      cantidad_mec_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='MECANIZACION', fecha_inicio__year=2024).count())
      cantidad_re_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='REHABILITACION', fecha_inicio__year=2024).count())


      #MONTO DE FINANCIAMIENTO POR CONCEPTO DE APOYO 2024
      monto_ct_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='CAPITAL DE TRABAJO', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_eq_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='EQUIPAMIENTO', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_iaa_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROALIMENTARIA', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_iai_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROINDUSTRIAL', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_ap_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='AGRICULTURA PROTEGIDA', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_mec_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='MECANIZACION', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      monto_re_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='REHABILITACION', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']

      #GARANTIAS POR CONCEPTO DE APOYO 2024
      garantias_ct_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='CAPITAL DE TRABAJO', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_eq_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='EQUIPAMIENTO', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_iaa_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROALIMENTARIA', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_iai_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='INFRAESTRUCTURA AGROINDUSTRIAL', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_ap_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='AGRICULTURA PROTEGIDA', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_mec_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='MECANIZACION', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']
      garantias_re_2024 = (entidadesFinancieras2.objects.filter(tipo_concepto='REHABILITACION', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))['sumatotal']






      #PROYECTOS DE INVERSIÓN POR SUBSECTOR Y POR REGION
      valles_agri = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Agricola').count())
      istmo_agri = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Agricola').count())
      costa_agri = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Agricola').count())
      papa_agri = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Agricola').count())
      mix_agri = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Agricola').count())
      sjua_agri = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Agricola').count())
      ssur_agri = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Agricola').count())
      sflm_agri = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Agricola').count())
      total_agri = (entidadesFinancieras2.objects.filter(subsector='Agricola').count())

      valles_pec = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Pecuario').count())
      istmo_pec = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Pecuario').count())
      costa_pec = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Pecuario').count())
      papa_pec = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Pecuario').count())
      mix_pec = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Pecuario').count())
      sjua_pec = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Pecuario').count())
      ssur_pec = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Pecuario').count())
      sflm_pec = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Pecuario').count())
      total_pec = (entidadesFinancieras2.objects.filter(subsector='Pecuario').count())

      valles_acu = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Acuicola').count())
      istmo_acu = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Acuicola').count())
      costa_acu = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Acuicola').count())
      papa_acu = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Acuicola').count())
      mix_acu = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Acuicola').count())
      sjua_acu = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Acuicola').count())
      ssur_acu = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Acuicola').count())
      sflm_acu = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Acuicola').count())
      total_acu = (entidadesFinancieras2.objects.filter(subsector='Acuicola').count())


      valles_pes = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Pesquero').count())
      istmo_pes = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Pesquero').count())
      costa_pes = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Pesquero').count())
      papa_pes = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Pesquero').count())
      mix_pes = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Pesquero').count())
      sjua_pes = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Pesquero').count())
      ssur_pes = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Pesquero').count())
      sflm_pes = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Pesquero').count())
      total_pes = (entidadesFinancieras2.objects.filter(subsector='Pesquero').count())

      valles_for = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Forestal').count())
      istmo_for = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Forestal').count())
      costa_for = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Forestal').count())
      papa_for = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Forestal').count())
      mix_for = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Forestal').count())
      sjua_for = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Forestal').count())
      ssur_for = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Forestal').count())
      sflm_for = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Forestal').count())
      total_for = (entidadesFinancieras2.objects.filter(subsector='Forestal').count())




      #PROYECTOS DE INVERSIÓN POR SUBSECTOR Y POR REGION 2023
      valles_agri_2023 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Agricola', fecha_inicio__year=2023).count())
      istmo_agri_2023 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Agricola', fecha_inicio__year=2023).count())
      costa_agri_2023 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Agricola', fecha_inicio__year=2023).count())
      papa_agri_2023 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Agricola', fecha_inicio__year=2023).count())
      mix_agri_2023 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Agricola', fecha_inicio__year=2023).count())
      sjua_agri_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Agricola', fecha_inicio__year=2023).count())
      ssur_agri_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Agricola', fecha_inicio__year=2023).count())
      sflm_agri_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Agricola', fecha_inicio__year=2023).count())
      total_agri_2023 = (entidadesFinancieras2.objects.filter(subsector='Agricola', fecha_inicio__year=2023).count())

      valles_pec_2023 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Pecuario', fecha_inicio__year=2023).count())
      istmo_pec_2023 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Pecuario', fecha_inicio__year=2023).count())
      costa_pec_2023 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Pecuario', fecha_inicio__year=2023).count())
      papa_pec_2023 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Pecuario', fecha_inicio__year=2023).count())
      mix_pec_2023 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Pecuario', fecha_inicio__year=2023).count())
      sjua_pec_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Pecuario', fecha_inicio__year=2023).count())
      ssur_pec_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Pecuario', fecha_inicio__year=2023).count())
      sflm_pec_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Pecuario', fecha_inicio__year=2023).count())
      total_pec_2023 = (entidadesFinancieras2.objects.filter(subsector='Pecuario', fecha_inicio__year=2023).count())

      valles_acu_2023 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Acuicola', fecha_inicio__year=2023).count())
      istmo_acu_2023 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Acuicola', fecha_inicio__year=2023).count())
      costa_acu_2023 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Acuicola', fecha_inicio__year=2023).count())
      papa_acu_2023 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Acuicola', fecha_inicio__year=2023).count())
      mix_acu_2023 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Acuicola', fecha_inicio__year=2023).count())
      sjua_acu_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Acuicola', fecha_inicio__year=2023).count())
      ssur_acu_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Acuicola', fecha_inicio__year=2023).count())
      sflm_acu_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Acuicola', fecha_inicio__year=2023).count())
      total_acu_2023 = (entidadesFinancieras2.objects.filter(subsector='Acuicola', fecha_inicio__year=2023).count())


      valles_pes_2023 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Pesquero', fecha_inicio__year=2023).count())
      istmo_pes_2023 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Pesquero', fecha_inicio__year=2023).count())
      costa_pes_2023 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Pesquero', fecha_inicio__year=2023).count())
      papa_pes_2023 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Pesquero', fecha_inicio__year=2023).count())
      mix_pes_2023 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Pesquero', fecha_inicio__year=2023).count())
      sjua_pes_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Pesquero', fecha_inicio__year=2023).count())
      ssur_pes_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Pesquero', fecha_inicio__year=2023).count())
      sflm_pes_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Pesquero', fecha_inicio__year=2023).count())
      total_pes_2023 = (entidadesFinancieras2.objects.filter(subsector='Pesquero', fecha_inicio__year=2023).count())

      valles_for_2023 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Forestal', fecha_inicio__year=2023).count())
      istmo_for_2023 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Forestal', fecha_inicio__year=2023).count())
      costa_for_2023 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Forestal', fecha_inicio__year=2023).count())
      papa_for_2023 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Forestal', fecha_inicio__year=2023).count())
      mix_for_2023 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Forestal', fecha_inicio__year=2023).count())
      sjua_for_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Forestal', fecha_inicio__year=2023).count())
      ssur_for_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Forestal', fecha_inicio__year=2023).count())
      sflm_for_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Forestal', fecha_inicio__year=2023).count())
      total_for_2023 = (entidadesFinancieras2.objects.filter(subsector='Forestal', fecha_inicio__year=2023).count())



      #PROYECTOS DE INVERSIÓN POR SUBSECTOR Y POR REGION 2024
      valles_agri_2024 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Agricola', fecha_inicio__year=2024).count())
      istmo_agri_2024 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Agricola', fecha_inicio__year=2024).count())
      costa_agri_2024 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Agricola', fecha_inicio__year=2024).count())
      papa_agri_2024 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Agricola', fecha_inicio__year=2024).count())
      mix_agri_2024 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Agricola', fecha_inicio__year=2024).count())
      sjua_agri_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Agricola', fecha_inicio__year=2024).count())
      ssur_agri_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Agricola', fecha_inicio__year=2024).count())
      sflm_agri_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Agricola', fecha_inicio__year=2024).count())
      total_agri_2024 = (entidadesFinancieras2.objects.filter(subsector='Agricola', fecha_inicio__year=2024).count())

      valles_pec_2024 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Pecuario', fecha_inicio__year=2024).count())
      istmo_pec_2024 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Pecuario', fecha_inicio__year=2024).count())
      costa_pec_2024 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Pecuario', fecha_inicio__year=2024).count())
      papa_pec_2024 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Pecuario', fecha_inicio__year=2024).count())
      mix_pec_2024 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Pecuario', fecha_inicio__year=2024).count())
      sjua_pec_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Pecuario', fecha_inicio__year=2024).count())
      ssur_pec_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Pecuario', fecha_inicio__year=2024).count())
      sflm_pec_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Pecuario', fecha_inicio__year=2024).count())
      total_pec_2024 = (entidadesFinancieras2.objects.filter(subsector='Pecuario', fecha_inicio__year=2024).count())

      valles_acu_2024 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Acuicola', fecha_inicio__year=2024).count())
      istmo_acu_2024 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Acuicola', fecha_inicio__year=2024).count())
      costa_acu_2024 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Acuicola', fecha_inicio__year=2024).count())
      papa_acu_2024 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Acuicola', fecha_inicio__year=2024).count())
      mix_acu_2024 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Acuicola', fecha_inicio__year=2024).count())
      sjua_acu_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Acuicola', fecha_inicio__year=2024).count())
      ssur_acu_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Acuicola', fecha_inicio__year=2024).count())
      sflm_acu_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Acuicola', fecha_inicio__year=2024).count())
      total_acu_2024 = (entidadesFinancieras2.objects.filter(subsector='Acuicola', fecha_inicio__year=2024).count())


      valles_pes_2024 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Pesquero', fecha_inicio__year=2024).count())
      istmo_pes_2024 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Pesquero', fecha_inicio__year=2024).count())
      costa_pes_2024 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Pesquero', fecha_inicio__year=2024).count())
      papa_pes_2024 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Pesquero', fecha_inicio__year=2024).count())
      mix_pes_2024 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Pesquero', fecha_inicio__year=2024).count())
      sjua_pes_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Pesquero', fecha_inicio__year=2024).count())
      ssur_pes_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Pesquero', fecha_inicio__year=2024).count())
      sflm_pes_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Pesquero', fecha_inicio__year=2024).count())
      total_pes_2024 = (entidadesFinancieras2.objects.filter(subsector='Pesquero', fecha_inicio__year=2024).count())

      valles_for_2024 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Forestal', fecha_inicio__year=2024).count())
      istmo_for_2024 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Forestal', fecha_inicio__year=2024).count())
      costa_for_2024 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Forestal', fecha_inicio__year=2024).count())
      papa_for_2024 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Forestal', fecha_inicio__year=2024).count())
      mix_for_2024 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Forestal', fecha_inicio__year=2024).count())
      sjua_for_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Forestal', fecha_inicio__year=2024).count())
      ssur_for_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Forestal', fecha_inicio__year=2024).count())
      sflm_for_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Forestal', fecha_inicio__year=2024).count())
      total_for_2024 = (entidadesFinancieras2.objects.filter(subsector='Forestal', fecha_inicio__year=2024).count())



      #MONTO TOTAL DE LOS CREDITOS POR SUBSECTOR Y POR REGION
      valles_agri_monto = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Agricola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_agri_monto = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Agricola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_agri_monto = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Agricola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_agri_monto = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Agricola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_agri_monto = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Agricola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_agri_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Agricola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_agri_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Agricola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_agri_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Agricola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_agri_monto = (entidadesFinancieras2.objects.filter(subsector='Agricola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']

      valles_pec_monto = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Pecuario').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_pec_monto = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Pecuario').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_pec_monto = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Pecuario').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_pec_monto = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Pecuario').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_pec_monto = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Pecuario').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_pec_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Pecuario').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_pec_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Pecuario').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_pec_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Pecuario').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_pec_monto = (entidadesFinancieras2.objects.filter(subsector='Pecuario').aggregate(sumatotal=Sum('monto_total')))['sumatotal']

      valles_acu_monto = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Acuicola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_acu_monto = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Acuicola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_acu_monto = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Acuicola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_acu_monto = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Acuicola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_acu_monto = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Acuicola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_acu_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Acuicola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_acu_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Acuicola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_acu_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Acuicola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_acu_monto = (entidadesFinancieras2.objects.filter(subsector='Acuicola').aggregate(sumatotal=Sum('monto_total')))['sumatotal']

      valles_pes_monto = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Pesquero').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_pes_monto = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Pesquero').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_pes_monto = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Pesquero').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_pes_monto = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Pesquero').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_pes_monto = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Pesquero').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_pes_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Pesquero').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_pes_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Pesquero').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_pes_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Pesquero').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_pes_monto = (entidadesFinancieras2.objects.filter(subsector='Pesquero').aggregate(sumatotal=Sum('monto_total')))['sumatotal']

      valles_for_monto = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Forestal').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_for_monto = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Forestal').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_for_monto = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Forestal').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_for_monto = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Forestal').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_for_monto = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Forestal').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_for_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Forestal').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_for_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Forestal').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_for_monto = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Forestal').aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_for_monto = (entidadesFinancieras2.objects.filter(subsector='Forestal').aggregate(sumatotal=Sum('monto_total')))['sumatotal']




      #MONTO TOTAL DE LOS CREDITOS POR SUBSECTOR Y POR REGION 2023
      valles_agri_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Agricola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_agri_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Agricola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_agri_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Agricola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_agri_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Agricola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_agri_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Agricola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_agri_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Agricola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_agri_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Agricola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_agri_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Agricola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_agri_monto_2023 = (entidadesFinancieras2.objects.filter(subsector='Agricola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']

      valles_pec_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Pecuario', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_pec_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Pecuario', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_pec_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Pecuario', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_pec_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Pecuario', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_pec_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Pecuario', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_pec_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Pecuario', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_pec_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Pecuario', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_pec_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Pecuario', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_pec_monto_2023 = (entidadesFinancieras2.objects.filter(subsector='Pecuario', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']

      valles_acu_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Acuicola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_acu_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Acuicola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_acu_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Acuicola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_acu_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Acuicola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_acu_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Acuicola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_acu_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Acuicola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_acu_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Acuicola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_acu_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Acuicola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_acu_monto_2023 = (entidadesFinancieras2.objects.filter(subsector='Acuicola', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']


      valles_pes_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Pesquero', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_pes_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Pesquero', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_pes_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Pesquero', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_pes_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Pesquero', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_pes_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Pesquero', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_pes_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Pesquero', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_pes_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Pesquero', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_pes_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Pesquero', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_pes_monto_2023 = (entidadesFinancieras2.objects.filter(subsector='Pesquero', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']

      valles_for_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Forestal', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_for_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Forestal', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_for_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Forestal', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_for_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Forestal', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_for_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Forestal', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_for_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Forestal', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_for_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Forestal', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_for_monto_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Forestal', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_for_monto_2023 = (entidadesFinancieras2.objects.filter(subsector='Forestal', fecha_inicio__year=2023).aggregate(sumatotal=Sum('monto_total')))['sumatotal']





      #MONTO TOTAL DE LOS CREDITOS POR SUBSECTOR Y POR REGION 2024
      valles_agri_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Agricola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_agri_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Agricola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_agri_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Agricola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_agri_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Agricola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_agri_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Agricola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_agri_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Agricola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_agri_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Agricola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_agri_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Agricola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_agri_monto_2024 = (entidadesFinancieras2.objects.filter(subsector='Agricola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']

      valles_pec_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Pecuario', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_pec_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Pecuario', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_pec_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Pecuario', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_pec_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Pecuario', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_pec_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Pecuario', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_pec_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Pecuario', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_pec_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Pecuario', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_pec_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Pecuario', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_pec_monto_2024 = (entidadesFinancieras2.objects.filter(subsector='Pecuario', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']

      valles_acu_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Acuicola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_acu_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Acuicola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_acu_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Acuicola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_acu_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Acuicola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_acu_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Acuicola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_acu_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Acuicola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_acu_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Acuicola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_acu_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Acuicola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_acu_monto_2024 = (entidadesFinancieras2.objects.filter(subsector='Acuicola', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']


      valles_pes_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Pesquero', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_pes_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Pesquero', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_pes_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Pesquero', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_pes_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Pesquero', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_pes_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Pesquero', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_pes_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Pesquero', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_pes_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Pesquero', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_pes_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Pesquero', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_pes_monto_2024 = (entidadesFinancieras2.objects.filter(subsector='Pesquero', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']

      valles_for_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', subsector='Forestal', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      istmo_for_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', subsector='Forestal', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      costa_for_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', subsector='Forestal', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      papa_for_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', subsector='Forestal', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      mix_for_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', subsector='Forestal', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sjua_for_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', subsector='Forestal', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      ssur_for_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', subsector='Forestal', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      sflm_for_monto_2024 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', subsector='Forestal', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']
      total_for_monto_2024 = (entidadesFinancieras2.objects.filter(subsector='Forestal', fecha_inicio__year=2024).aggregate(sumatotal=Sum('monto_total')))['sumatotal']

      return render(request, 'graficasPublicas.html',{
        'conteo_VC' : conteo_VC, 
        'conteo_IST' : conteo_IST, 
        'conteo_MIX' : conteo_MIX,
        'conteo_PAPA' : conteo_PAPA,
        'conteo_COS' : conteo_COS,
        'conteo_SJ' : conteo_SJ,
        'conteo_SS' : conteo_SS, 
        'conteo_SFM' : conteo_SFM,
        'monto_VC_templates' : monto_VC_templates,
        'monto_IST_templates' : monto_IST_templates,
        'monto_MIX_templates' : monto_MIX_templates,
        'monto_PAPA_templates' : monto_PAPA_templates,
        'monto_COS_templates' : monto_COS_templates,
        'monto_SJ_templates' : monto_SJ_templates,
        'monto_SS_templates' : monto_SS_templates,
        'monto_SFM_templates' : monto_SFM_templates,
        'garantia_VC_templates' :  garantia_VC_templates, 
        'garantia_IST_templates'  : garantia_IST_templates,  
        'garantia_MIX_templates'  : garantia_MIX_templates,  
        'garantia_PAPA_templates' : garantia_PAPA_templates, 
        'garantia_COS_templates'  : garantia_COS_templates,  
        'garantia_SJ_templates' : garantia_SJ_templates, 
        'garantia_SS_templates' : garantia_SS_templates, 
        'garantia_SFM_templates' : garantia_SFM_templates,
        'beneficiarios_VC_T' : beneficiarios_VC_T,
        'beneficiarios_IST_T' : beneficiarios_IST_T,
        'beneficiarios_MIX_T' : beneficiarios_MIX_T,
        'beneficiarios_PAPA_T' : beneficiarios_PAPA_T,
        'beneficiarios_COS_T' : beneficiarios_COS_T,
        'beneficiarios_SJ_T' : beneficiarios_SJ_T,
        'beneficiarios_SS_T' : beneficiarios_SS_T,
        'beneficiarios_SFM_T' : beneficiarios_SFM_T,
        'E100_VC' : E100_VC,
        'E100_IST' : E100_IST,
        'E100_MIX' : E100_MIX,
        'E100_PAPA' : E100_PAPA,
        'E100_COS' : E100_COS,
        'E100_SJ' : E100_SJ,
        'E100_SS' : E100_SS,
        'E100_SFM' : E100_SFM,
        'PI_VC' : PI_VC,
        'PI_IST' : PI_IST,
        'PI_MIX' : PI_MIX,
        'PI_PAPA' : PI_PAPA,
        'PI_COS' : PI_COS,
        'PI_SJ' : PI_SJ,
        'PI_SS' : PI_SS, 
        'PI_SFM' : PI_SFM,
        'empleos_VC_T' :  empleos_VC_T,
        'empleos_IST_T' : empleos_IST_T, 
        'empleos_MIX_T' : empleos_MIX_T,
        'empleos_PAPA_T' : empleos_PAPA_T,
        'empleos_COS_T' :  empleos_COS_T,
        'empleos_SJ_T' :  empleos_SJ_T,
        'empleos_SS_T' : empleos_SS_T,
        'empleos_SFM_T' :  empleos_SFM_T,
        'conteo_VC_2023' : conteo_VC_2023, 
        'conteo_IST_2023' : conteo_IST_2023, 
        'conteo_MIX_2023' : conteo_MIX_2023,
        'conteo_PAPA_2023' : conteo_PAPA_2023,
        'conteo_COS_2023' : conteo_COS_2023,
        'conteo_SJ_2023' : conteo_SJ_2023,
        'conteo_SS_2023' : conteo_SS_2023, 
        'conteo_SFM_2023' : conteo_SFM_2023,
        'monto_VC_templates_2023' : monto_VC_templates_2023,
        'monto_IST_templates_2023' : monto_IST_templates_2023,
        'monto_MIX_templates_2023' : monto_MIX_templates_2023,
        'monto_PAPA_templates_2023' : monto_PAPA_templates_2023,
        'monto_COS_templates_2023' : monto_COS_templates_2023,
        'monto_SJ_templates_2023' : monto_SJ_templates_2023,
        'monto_SS_templates_2023' : monto_SS_templates_2023,
        'monto_SFM_templates_2023' : monto_SFM_templates_2023,
        'garantia_VC_templates_2023' :  garantia_VC_templates_2023, 
        'garantia_IST_templates_2023'  : garantia_IST_templates_2023,  
        'garantia_MIX_templates_2023'  : garantia_MIX_templates_2023,  
        'garantia_PAPA_templates_2023' : garantia_PAPA_templates_2023, 
        'garantia_COS_templates_2023'  : garantia_COS_templates_2023,  
        'garantia_SJ_templates_2023' : garantia_SJ_templates_2023, 
        'garantia_SS_templates_2023' : garantia_SS_templates_2023, 
        'garantia_SFM_templates_2023' : garantia_SFM_templates_2023,
        'beneficiarios_VC_T_2023' : beneficiarios_VC_T_2023,
        'beneficiarios_IST_T_2023' : beneficiarios_IST_T_2023,
        'beneficiarios_MIX_T_2023' : beneficiarios_MIX_T_2023,
        'beneficiarios_PAPA_T_2023' : beneficiarios_PAPA_T_2023,
        'beneficiarios_COS_T_2023' : beneficiarios_COS_T_2023,
        'beneficiarios_SJ_T_2023' : beneficiarios_SJ_T_2023,
        'beneficiarios_SS_T_2023' : beneficiarios_SS_T_2023,
        'beneficiarios_SFM_T_2023' : beneficiarios_SFM_T_2023,
        'E100_VC_2023' : E100_VC_2023,
        'E100_IST_2023' : E100_IST_2023,
        'E100_MIX_2023' : E100_MIX_2023,
        'E100_PAPA_2023' : E100_PAPA_2023,
        'E100_COS_2023' : E100_COS_2023,
        'E100_SJ_2023' : E100_SJ_2023,
        'E100_SS_2023' : E100_SS_2023,
        'E100_SFM_2023' : E100_SFM_2023,
        'PI_VC_2023' : PI_VC_2023,
        'PI_IST_2023' : PI_IST_2023,
        'PI_MIX_2023' : PI_MIX_2023,
        'PI_PAPA_2023' : PI_PAPA_2023,
        'PI_COS_2023' : PI_COS_2023,
        'PI_SJ_2023' : PI_SJ_2023,
        'PI_SS_2023' : PI_SS_2023, 
        'PI_SFM_2023' : PI_SFM_2023,
        'empleos_VC_T_2023' :  empleos_VC_T_2023,
        'empleos_IST_T_2023' : empleos_IST_T_2023, 
        'empleos_MIX_T_2023' : empleos_MIX_T_2023,
        'empleos_PAPA_T_2023' : empleos_PAPA_T_2023,
        'empleos_COS_T_2023' :  empleos_COS_T_2023,
        'empleos_SJ_T_2023' :  empleos_SJ_T_2023,
        'empleos_SS_T_2023' : empleos_SS_T_2023,
        'empleos_SFM_T_2023' :  empleos_SFM_T_2023,
        'conteo_VC_2024' : conteo_VC_2024, 
        'conteo_IST_2024' : conteo_IST_2024, 
        'conteo_MIX_2024' : conteo_MIX_2024,
        'conteo_PAPA_2024' : conteo_PAPA_2024,
        'conteo_COS_2024' : conteo_COS_2024,
        'conteo_SJ_2024' : conteo_SJ_2024,
        'conteo_SS_2024' : conteo_SS_2024, 
        'conteo_SFM_2024' : conteo_SFM_2024,
        'monto_VC_templates_2024' : monto_VC_templates_2024,
        'monto_IST_templates_2024' : monto_IST_templates_2024,
        'monto_MIX_templates_2024' : monto_MIX_templates_2024,
        'monto_PAPA_templates_2024' : monto_PAPA_templates_2024,
        'monto_COS_templates_2024' : monto_COS_templates_2024,
        'monto_SJ_templates_2024' : monto_SJ_templates_2024,
        'monto_SS_templates_2024' : monto_SS_templates_2024,
        'monto_SFM_templates_2024' : monto_SFM_templates_2024,
        'garantia_VC_templates_2024' :  garantia_VC_templates_2024, 
        'garantia_IST_templates_2024'  : garantia_IST_templates_2024,  
        'garantia_MIX_templates_2024'  : garantia_MIX_templates_2024,  
        'garantia_PAPA_templates_2024' : garantia_PAPA_templates_2024, 
        'garantia_COS_templates_2024'  : garantia_COS_templates_2024,  
        'garantia_SJ_templates_2024' : garantia_SJ_templates_2024, 
        'garantia_SS_templates_2024' : garantia_SS_templates_2024, 
        'garantia_SFM_templates_2024' : garantia_SFM_templates_2024,
        'beneficiarios_VC_T_2024' : beneficiarios_VC_T_2024,
        'beneficiarios_IST_T_2024' : beneficiarios_IST_T_2024,
        'beneficiarios_MIX_T_2024' : beneficiarios_MIX_T_2024,
        'beneficiarios_PAPA_T_2024' : beneficiarios_PAPA_T_2024,
        'beneficiarios_COS_T_2024' : beneficiarios_COS_T_2024,
        'beneficiarios_SJ_T_2024' : beneficiarios_SJ_T_2024,
        'beneficiarios_SS_T_2024' : beneficiarios_SS_T_2024,
        'beneficiarios_SFM_T_2024' : beneficiarios_SFM_T_2024,
        'E100_VC_2024' : E100_VC_2024,
        'E100_IST_2024' : E100_IST_2024,
        'E100_MIX_2024' : E100_MIX_2024,
        'E100_PAPA_2024' : E100_PAPA_2024,
        'E100_COS_2024' : E100_COS_2024,
        'E100_SJ_2024' : E100_SJ_2024,
        'E100_SS_2024' : E100_SS_2024,
        'E100_SFM_2024' : E100_SFM_2024,
        'PI_VC_2024' : PI_VC_2024,
        'PI_IST_2024' : PI_IST_2024,
        'PI_MIX_2024' : PI_MIX_2024,
        'PI_PAPA_2024' : PI_PAPA_2024,
        'PI_COS_2024' : PI_COS_2024,
        'PI_SJ_2024' : PI_SJ_2024,
        'PI_SS_2024' : PI_SS_2024, 
        'PI_SFM_2024' : PI_SFM_2024,
        'empleos_VC_T_2024' :  empleos_VC_T_2024,
        'empleos_IST_T_2024' : empleos_IST_T_2024, 
        'empleos_MIX_T_2024' : empleos_MIX_T_2024,
        'empleos_PAPA_T_2024' : empleos_PAPA_T_2024,
        'empleos_COS_T_2024' :  empleos_COS_T_2024,
        'empleos_SJ_T_2024' :  empleos_SJ_T_2024,
        'empleos_SS_T_2024' : empleos_SS_T_2024,
        'empleos_SFM_T_2024' :  empleos_SFM_T_2024,

        'cantidad_ct' : cantidad_ct,
        'cantidad_eq' : cantidad_eq,
        'cantidad_iaa' : cantidad_iaa,
        'cantidad_iai' : cantidad_iai,
        'cantidad_ap' : cantidad_ap,
        'cantidad_mec' : cantidad_mec,
        'cantidad_re' : cantidad_re,


        'cantidad_ct_2023' : cantidad_ct_2023,
        'cantidad_eq_2023' : cantidad_eq_2023,
        'cantidad_iaa_2023' : cantidad_iaa_2023,
        'cantidad_iai_2023' : cantidad_iai_2023,
        'cantidad_ap_2023' : cantidad_ap_2023,
        'cantidad_mec_2023' : cantidad_mec_2023,
        'cantidad_re_2023' : cantidad_re_2023,

        'monto_ct' : monto_ct,
        'monto_eq' : monto_eq,
        'monto_iaa' : monto_iaa,
        'monto_iai' : monto_iai,
        'monto_ap' : monto_ap,
        'monto_mec' : monto_mec,
        'monto_re' : monto_re,

        'monto_ct_2023' : monto_ct_2023,
        'monto_eq_2023' : monto_eq_2023,
        'monto_iaa_2023' : monto_iaa_2023,
        'monto_iai_2023' : monto_iai_2023,
        'monto_ap_2023' : monto_ap_2023,
        'monto_mec_2023' : monto_mec_2023,
        'monto_re_2023' : monto_re_2023,

        'garantias_ct' : garantias_ct,
        'garantias_eq' : garantias_eq,
        'garantias_iaa' : garantias_iaa,
        'garantias_iai' : garantias_iai,
        'garantias_ap' : garantias_ap,
        'garantias_mec' : garantias_mec,
        'garantias_re' : garantias_re,

        'garantias_ct_2023' : garantias_ct_2023,
        'garantias_eq_2023' : garantias_eq_2023,
        'garantias_iaa_2023' : garantias_iaa_2023,
        'garantias_iai_2023' : garantias_iai_2023,
        'garantias_ap_2023' : garantias_ap_2023,
        'garantias_mec_2023' : garantias_mec_2023,
        'garantias_re_2023' : garantias_re_2023,

        'valles_agri' : valles_agri,
        'istmo_agri' : istmo_agri,
        'costa_agri' : costa_agri,
        'papa_agri' : papa_agri,
        'mix_agri' : mix_agri,
        'sjua_agri' : sjua_agri,
        'ssur_agri' : ssur_agri,
        'sflm_agri' : sflm_agri,
        'valles_pec' : valles_pec,
        'istmo_pec' : istmo_pec,
        'costa_pec' : costa_pec,
        'papa_pec' : papa_pec,
        'mix_pec' : mix_pec,
        'sjua_pec' : sjua_pec,
        'ssur_pec' : ssur_pec,
        'sflm_pec' : sflm_pec,
        'valles_acu' : valles_acu,
        'istmo_acu' : istmo_acu,
        'costa_acu' : costa_acu,
        'papa_acu' : papa_acu,
        'mix_acu' : mix_acu,
        'sjua_acu' : sjua_acu,
        'ssur_acu' : ssur_acu,
        'sflm_acu' : sflm_acu,
        'valles_pes' : valles_pes,
        'istmo_pes' : istmo_pes,
        'costa_pes' : costa_pes,
        'papa_pes' : papa_pes,
        'mix_pes' : mix_pes,
        'sjua_pes' : sjua_pes,
        'ssur_pes' : ssur_pes,
        'sflm_pes' : sflm_pes,
        'valles_for' : valles_for,
        'istmo_for' : istmo_for,
        'costa_for' : costa_for,
        'papa_for' : papa_for,
        'mix_for' : mix_for,
        'sjua_for' : sjua_for,
        'ssur_for' : ssur_for,
        'sflm_for' : sflm_for,
        'total_agri' : total_agri,
        'total_pec' : total_pec, 
        'total_acu' : total_acu,
        'total_pes' : total_pes,
        'total_for' : total_for,

        'valles_agri_2023' : valles_agri_2023,
        'istmo_agri_2023' : istmo_agri_2023,
        'costa_agri_2023' : costa_agri_2023,
        'papa_agri_2023' : papa_agri_2023,
        'mix_agri_2023' : mix_agri_2023,
        'sjua_agri_2023' : sjua_agri_2023,
        'ssur_agri_2023' : ssur_agri_2023,
        'sflm_agri_2023' : sflm_agri_2023,
        'valles_pec_2023' : valles_pec_2023,
        'istmo_pec_2023' : istmo_pec_2023,
        'costa_pec_2023' : costa_pec_2023,
        'papa_pec_2023' : papa_pec_2023,
        'mix_pec_2023' : mix_pec_2023,
        'sjua_pec_2023' : sjua_pec_2023,
        'ssur_pec_2023' : ssur_pec_2023,
        'sflm_pec_2023' : sflm_pec_2023,
        'valles_acu_2023' : valles_acu_2023,
        'istmo_acu_2023' : istmo_acu_2023,
        'costa_acu_2023' : costa_acu_2023,
        'papa_acu_2023' : papa_acu_2023,
        'mix_acu_2023' : mix_acu_2023,
        'sjua_acu_2023' : sjua_acu_2023,
        'ssur_acu_2023' : ssur_acu_2023,
        'sflm_acu_2023' : sflm_acu_2023,
        'valles_pes_2023' : valles_pes_2023,
        'istmo_pes_2023' : istmo_pes_2023,
        'costa_pes_2023' : costa_pes_2023,
        'papa_pes_2023' : papa_pes_2023,
        'mix_pes_2023' : mix_pes_2023,
        'sjua_pes_2023' : sjua_pes_2023,
        'ssur_pes_2023' : ssur_pes_2023,
        'sflm_pes_2023' : sflm_pes_2023,
        'valles_for_2023' : valles_for_2023,
        'istmo_for_2023' : istmo_for_2023,
        'costa_for_2023' : costa_for_2023,
        'papa_for_2023' : papa_for_2023,
        'mix_for_2023' : mix_for_2023,
        'sjua_for_2023' : sjua_for_2023,
        'ssur_for_2023' : ssur_for_2023,
        'sflm_for_2023' : sflm_for_2023,
        'total_agri_2023' : total_agri_2023,
        'total_pec_2023' : total_pec_2023, 
        'total_acu_2023' : total_acu_2023,
        'total_pes_2023' : total_pes_2023,
        'total_for_2023' : total_for_2023,

        'valles_agri_2024' : valles_agri_2024,
        'istmo_agri_2024' : istmo_agri_2024,
        'costa_agri_2024' : costa_agri_2024,
        'papa_agri_2024' : papa_agri_2024,
        'mix_agri_2024' : mix_agri_2024,
        'sjua_agri_2024' : sjua_agri_2024,
        'ssur_agri_2024' : ssur_agri_2024,
        'sflm_agri_2024' : sflm_agri_2024,
        'valles_pec_2024' : valles_pec_2024,
        'istmo_pec_2024' : istmo_pec_2024,
        'costa_pec_2024' : costa_pec_2024,
        'papa_pec_2024' : papa_pec_2024,
        'mix_pec_2024' : mix_pec_2024,
        'sjua_pec_2024' : sjua_pec_2024,
        'ssur_pec_2024' : ssur_pec_2024,
        'sflm_pec_2024' : sflm_pec_2024,
        'valles_acu_2024' : valles_acu_2024,
        'istmo_acu_2024' : istmo_acu_2024,
        'costa_acu_2024' : costa_acu_2024,
        'papa_acu_2024' : papa_acu_2024,
        'mix_acu_2024' : mix_acu_2024,
        'sjua_acu_2024' : sjua_acu_2024,
        'ssur_acu_2024' : ssur_acu_2024,
        'sflm_acu_2024' : sflm_acu_2024,
        'valles_pes_2024' : valles_pes_2024,
        'istmo_pes_2024' : istmo_pes_2024,
        'costa_pes_2024' : costa_pes_2024,
        'papa_pes_2024' : papa_pes_2024,
        'mix_pes_2024' : mix_pes_2024,
        'sjua_pes_2024' : sjua_pes_2024,
        'ssur_pes_2024' : ssur_pes_2024,
        'sflm_pes_2024' : sflm_pes_2024,
        'valles_for_2024' : valles_for_2024,
        'istmo_for_2024' : istmo_for_2024,
        'costa_for_2024' : costa_for_2024,
        'papa_for_2024' : papa_for_2024,
        'mix_for_2024' : mix_for_2024,
        'sjua_for_2024' : sjua_for_2024,
        'ssur_for_2024' : ssur_for_2024,
        'sflm_for_2024' : sflm_for_2024,
        'total_agri_2024' : total_agri_2024,
        'total_pec_2024' : total_pec_2024, 
        'total_acu_2024' : total_acu_2024,
        'total_pes_2024' : total_pes_2024,
        'total_for_2024' : total_for_2024,

        'c' : total_concepto,

        'valles_agri_monto' : valles_agri_monto,
        'istmo_agri_monto' : istmo_agri_monto,
        'costa_agri_monto' : costa_agri_monto,
        'papa_agri_monto' : papa_agri_monto,
        'mix_agri_monto' : mix_agri_monto,
        'sjua_agri_monto' : sjua_agri_monto,
        'ssur_agri_monto' : ssur_agri_monto,
        'sflm_agri_monto' : sflm_agri_monto,
        'valles_pec_monto' : valles_pec_monto,
        'istmo_pec_monto' : istmo_pec_monto,
        'costa_pec_monto' : costa_pec_monto,
        'papa_pec_monto' : papa_pec_monto,
        'mix_pec_monto' : mix_pec_monto,
        'sjua_pec_monto' : sjua_pec_monto,
        'ssur_pec_monto' : ssur_pec_monto,
        'sflm_pec_monto' : sflm_pec_monto,
        'valles_acu_monto' : valles_acu_monto,
        'istmo_acu_monto' : istmo_acu_monto,
        'costa_acu_monto' : costa_acu_monto,
        'papa_acu_monto' : papa_acu_monto,
        'mix_acu_monto' : mix_acu_monto,
        'sjua_acu_monto' : sjua_acu_monto,
        'ssur_acu_monto' : ssur_acu_monto,
        'sflm_acu_monto' : sflm_acu_monto,
        'valles_pes_monto' : valles_pes_monto,
        'istmo_pes_monto' : istmo_pes_monto,
        'costa_pes_monto' : costa_pes_monto,
        'papa_pes_monto' : papa_pes_monto,
        'mix_pes_monto' : mix_pes_monto,
        'sjua_pes_monto' : sjua_pes_monto,
        'ssur_pes_monto' : ssur_pes_monto,
        'sflm_pes_monto' : sflm_pes_monto,
        'valles_for_monto' : valles_for_monto,
        'istmo_for_monto' : istmo_for_monto,
        'costa_for_monto' : costa_for_monto,
        'papa_for_monto' : papa_for_monto,
        'mix_for_monto' : mix_for_monto,
        'sjua_for_monto' : sjua_for_monto,
        'ssur_for_monto' : ssur_for_monto,
        'sflm_for_monto' : sflm_for_monto,
        'total_agri_monto' : total_agri_monto,
        'total_pec_monto' : total_pec_monto, 
        'total_acu_monto' : total_acu_monto,
        'total_pes_monto' : total_pes_monto,
        'total_for_monto' : total_for_monto,

      #monto 2023
        'valles_agri_monto_2023' : valles_agri_monto_2023,
        'istmo_agri_monto_2023' : istmo_agri_monto_2023,
        'costa_agri_monto_2023' : costa_agri_monto_2023,
        'papa_agri_monto_2023' : papa_agri_monto_2023,
        'mix_agri_monto_2023' : mix_agri_monto_2023,
        'sjua_agri_monto_2023' : sjua_agri_monto_2023,
        'ssur_agri_monto_2023' : ssur_agri_monto_2023,
        'sflm_agri_monto_2023' : sflm_agri_monto_2023,
        'valles_pec_monto_2023' : valles_pec_monto_2023,
        'istmo_pec_monto_2023' : istmo_pec_monto_2023,
        'costa_pec_monto_2023' : costa_pec_monto_2023,
        'papa_pec_monto_2023' : papa_pec_monto_2023,
        'mix_pec_monto_2023' : mix_pec_monto_2023,
        'sjua_pec_monto_2023' : sjua_pec_monto_2023,
        'ssur_pec_monto_2023' : ssur_pec_monto_2023,
        'sflm_pec_monto_2023' : sflm_pec_monto_2023,
        'valles_acu_monto_2023' : valles_acu_monto_2023,
        'istmo_acu_monto_2023' : istmo_acu_monto_2023,
        'costa_acu_monto_2023' : costa_acu_monto_2023,
        'papa_acu_monto_2023' : papa_acu_monto_2023,
        'mix_acu_monto_2023' : mix_acu_monto_2023,
        'sjua_acu_monto_2023' : sjua_acu_monto_2023,
        'ssur_acu_monto_2023' : ssur_acu_monto_2023,
        'sflm_acu_monto_2023' : sflm_acu_monto_2023,
        'valles_pes_monto_2023' : valles_pes_monto_2023,
        'istmo_pes_monto_2023' : istmo_pes_monto_2023,
        'costa_pes_monto_2023' : costa_pes_monto_2023,
        'papa_pes_monto_2023' : papa_pes_monto_2023,
        'mix_pes_monto_2023' : mix_pes_monto_2023,
        'sjua_pes_monto_2023' : sjua_pes_monto_2023,
        'ssur_pes_monto_2023' : ssur_pes_monto_2023,
        'sflm_pes_monto_2023' : sflm_pes_monto_2023,
        'valles_for_monto_2023' : valles_for_monto_2023,
        'istmo_for_monto_2023' : istmo_for_monto_2023,
        'costa_for_monto_2023' : costa_for_monto_2023,
        'papa_for_monto_2023' : papa_for_monto_2023,
        'mix_for_monto_2023' : mix_for_monto_2023,
        'sjua_for_monto_2023' : sjua_for_monto_2023,
        'ssur_for_monto_2023' : ssur_for_monto_2023,
        'sflm_for_monto_2023' : sflm_for_monto_2023,
        'total_agri_monto_2023' : total_agri_monto_2023,
        'total_pec_monto_2023' : total_pec_monto_2023, 
        'total_acu_monto_2023' : total_acu_monto_2023,
        'total_pes_monto_2023' : total_pes_monto_2023,
        'total_for_monto_2023' : total_for_monto_2023,
        
      #monto 2024
        'valles_agri_monto_2024' : valles_agri_monto_2024,
        'istmo_agri_monto_2024' : istmo_agri_monto_2024,
        'costa_agri_monto_2024' : costa_agri_monto_2024,
        'papa_agri_monto_2024' : papa_agri_monto_2024,
        'mix_agri_monto_2024' : mix_agri_monto_2024,
        'sjua_agri_monto_2024' : sjua_agri_monto_2024,
        'ssur_agri_monto_2024' : ssur_agri_monto_2024,
        'sflm_agri_monto_2024' : sflm_agri_monto_2024,
        'valles_pec_monto_2024' : valles_pec_monto_2024,
        'istmo_pec_monto_2024' : istmo_pec_monto_2024,
        'costa_pec_monto_2024' : costa_pec_monto_2024,
        'papa_pec_monto_2024' : papa_pec_monto_2024,
        'mix_pec_monto_2024' : mix_pec_monto_2024,
        'sjua_pec_monto_2024' : sjua_pec_monto_2024,
        'ssur_pec_monto_2024' : ssur_pec_monto_2024,
        'sflm_pec_monto_2024' : sflm_pec_monto_2024,
        'valles_acu_monto_2024' : valles_acu_monto_2024,
        'istmo_acu_monto_2024' : istmo_acu_monto_2024,
        'costa_acu_monto_2024' : costa_acu_monto_2024,
        'papa_acu_monto_2024' : papa_acu_monto_2024,
        'mix_acu_monto_2024' : mix_acu_monto_2024,
        'sjua_acu_monto_2024' : sjua_acu_monto_2024,
        'ssur_acu_monto_2024' : ssur_acu_monto_2024,
        'sflm_acu_monto_2024' : sflm_acu_monto_2024,
        'valles_pes_monto_2024' : valles_pes_monto_2024,
        'istmo_pes_monto_2024' : istmo_pes_monto_2024,
        'costa_pes_monto_2024' : costa_pes_monto_2024,
        'papa_pes_monto_2024' : papa_pes_monto_2024,
        'mix_pes_monto_2024' : mix_pes_monto_2024,
        'sjua_pes_monto_2024' : sjua_pes_monto_2024,
        'ssur_pes_monto_2024' : ssur_pes_monto_2024,
        'sflm_pes_monto_2024' : sflm_pes_monto_2024,
        'valles_for_monto_2024' : valles_for_monto_2024,
        'istmo_for_monto_2024' : istmo_for_monto_2024,
        'costa_for_monto_2024' : costa_for_monto_2024,
        'papa_for_monto_2024' : papa_for_monto_2024,
        'mix_for_monto_2024' : mix_for_monto_2024,
        'sjua_for_monto_2024' : sjua_for_monto_2024,
        'ssur_for_monto_2024' : ssur_for_monto_2024,
        'sflm_for_monto_2024' : sflm_for_monto_2024,
        'total_agri_monto_2024' : total_agri_monto_2024,
        'total_pec_monto_2024' : total_pec_monto_2024, 
        'total_acu_monto_2024' : total_acu_monto_2024,
        'total_pes_monto_2024' : total_pes_monto_2024,
        'total_for_monto_2024' : total_for_monto_2024,

        'can_municipios_VC' : can_municipios_VC,
        'can_municipios_IST' : can_municipios_IST,
        'can_municipios_MIX' : can_municipios_MIX,
        'can_municipios_PAPA' : can_municipios_PAPA,
        'can_municipios_COS' : can_municipios_COS,
        'can_municipios_SJ' : can_municipios_SJ,
        'can_municipios_SS' : can_municipios_SS,
        'can_municipios_SFM' : can_municipios_SFM,

        'can_municipios_VC_2023' : can_municipios_VC_2023,
        'can_municipios_IST_2023' : can_municipios_IST_2023,
        'can_municipios_MIX_2023' : can_municipios_MIX_2023,
        'can_municipios_PAPA_2023' : can_municipios_PAPA_2023,
        'can_municipios_COS_2023' : can_municipios_COS_2023,
        'can_municipios_SJ_2023' : can_municipios_SJ_2023,
        'can_municipios_SS_2023' : can_municipios_SS_2023,
        'can_municipios_SFM_2023' : can_municipios_SFM_2023, 

        'can_municipios_VC_2024' : can_municipios_VC_2024,
        'can_municipios_IST_2024' : can_municipios_IST_2024,
        'can_municipios_MIX_2024' : can_municipios_MIX_2024,
        'can_municipios_PAPA_2024' : can_municipios_PAPA_2024,
        'can_municipios_COS_2024' : can_municipios_COS_2024,
        'can_municipios_SJ_2024' : can_municipios_SJ_2024,
        'can_municipios_SS_2024' : can_municipios_SS_2024,
        'can_municipios_SFM_2024' : can_municipios_SFM_2024, 
        'totalCPG' : totalCPG,
        'totalMFG' : totalMFG,
        'totalGLG' : totalGLG, 
        'totalBG' : totalBG, 
        'totalE100G' : totalE100G, 
        'totalPIG' : totalPIG,
        'totalEDG' : totalEDG, 
        'totalCMG' : totalCMG, 

        'totalCPG_2023' : totalCPG_2023,
        'totalMFG_2023' : totalMFG_2023,
        'totalGLG_2023' : totalGLG_2023, 
        'totalBG_2023' : totalBG_2023, 
        'totalE100G_2023' : totalE100G_2023, 
        'totalPIG_2023' : totalPIG_2023,
        'totalEDG_2023' : totalEDG_2023, 
        'totalCMG_2023' : totalCMG_2023, 

        'totalCPG_2024' : totalCPG_2024,
        'totalMFG_2024' : totalMFG_2024,
        'totalGLG_2024' : totalGLG_2024, 
        'totalBG_2024' : totalBG_2024, 
        'totalE100G_2024' : totalE100G_2024, 
        'totalPIG_2024' : totalPIG_2024,
        'totalEDG_2024' : totalEDG_2024, 
        'totalCMG_2024' : totalCMG_2024
        })

def nosotros(request):
  return render(request, 'nosotros.html')

def directorio(request):
  return render(request, 'directorio.html')

def ubicacion(request):
  return render(request, 'ubicacion.html')

