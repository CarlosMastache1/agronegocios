from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate
from django.http import HttpResponse
from django.db import IntegrityError
from .forms import financieras 
from django.contrib import messages
from .models import entidadesFinancieras2, municipios
from django.db.models import Sum


# Create your views here.
def home(request):
    finan = entidadesFinancieras2.objects.all()
    return render(request, 'home.html', {'finan' : finan})

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
            'error' : 'Usuario o contraseña incorrecto'
            })
        else: 
            login(request, user)
            return redirect('home')
 

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


def creditDetail(request, credit_id):
    credito = get_object_or_404(entidadesFinancieras2, pk=credit_id)
    return render(request, 'cred_detail.html', {
        'credito' : credito
    })

def reporte(request):
    bh = entidadesFinancieras2.objects.aggregate(bhsuma=Sum('beneficiarios_hombres'))
    bm = entidadesFinancieras2.objects.aggregate(bmsuma=Sum('beneficiarios_mujer'))
    entidadesFINDECA = entidadesFinancieras2.objects.values("intermediario_financiero").filter(intermediario_financiero="'FINDECA', SOCIEDAD ANÓNIMA DE CAPITAL VARIABLE").count()
    entidadesACRIMEX = entidadesFinancieras2.objects.values("intermediario_financiero").filter(intermediario_financiero="COOPERATIVA ACREIMEX, SOCIEDAD COOPERATIVA DE AHORRO Y PRESTAMO").count()
    entidadesNEO = entidadesFinancieras2.objects.values("intermediario_financiero").filter(intermediario_financiero="NEGOCIOS EMPRESARIALES DE APOYO DE OAXACA, SOCIEDAD ANONIMA DE CAPITAL VARIABLE").count()
    entidadesFIRA = entidadesFinancieras2.objects.values("intermediario_financiero").filter(intermediario_financiero="FIDEICOMISOS INSTITUIDOS EN RELACION CON LA AGRICULTURA (FIRA)").count()
    entidadesOCO = entidadesFinancieras2.objects.values("intermediario_financiero").filter(intermediario_financiero="CAJA SOLIDARIA SAN DIONISIO OCOTEPEC, SOCIEDAD COOPERATIVA DE AHORRO Y PRESTAMO").count()

    total_creditos = entidadesFinancieras2.objects.values("id").count()
    region_istmo = entidadesFinancieras2.objects.values("region").filter(region="Istmo").count()
    region_mixteca = entidadesFinancieras2.objects.values("region").filter(region="Mixteca").count() 
    region_costa = entidadesFinancieras2.objects.values("region").filter(region="Costa").count()   
    region_sierra = entidadesFinancieras2.objects.values("region").filter(region="Sierra de Flores Magon").count()
    region_sierraJuarez = entidadesFinancieras2.objects.values("region").filter(region="Sierra de Juarez").count()
    region_sierraSur = entidadesFinancieras2.objects.values("region").filter(region="Sierra Sur").count()
    region_valles = entidadesFinancieras2.objects.values("region").filter(region="Valles Centrales").count()

    concepto_infraestructuraAgroalimentaria = entidadesFinancieras2.objects.values("tipo_concepto").filter(region="Infraestructura Agroalimentaria").count()
    concepto_infraestructuraAgroindustrial = entidadesFinancieras2.objects.values("tipo_concepto").filter(region="Infraestructura Agroindustrial").count()
    concepto_mecanizacion = entidadesFinancieras2.objects.values("tipo_concepto").filter(region="Mecanizacion").count()
    concepto_equipamiento = entidadesFinancieras2.objects.values("tipo_concepto").filter(region="Equipamiento").count()
    concepto_agricultura = entidadesFinancieras2.objects.values("tipo_concepto").filter(region="Agricultura Protegida").count()
    concepto_rehabilitacion = entidadesFinancieras2.objects.values("tipo_concepto").filter(region="Rehabilitacion").count()






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
        'region_istmo' : region_istmo,
        'region_mixteca' : region_mixteca,
        'region_costa' : region_costa,
        'region_sierra' : region_sierra,
        'region_sierraJuarez' : region_sierraJuarez,
        'region_sierraSur' : region_sierraSur, 
        'region_valles' : region_valles,

        'concepto_infraestructuraAgroalimentaria' : concepto_infraestructuraAgroalimentaria,
        'concepto_infraestructuraAgroindustrial' : concepto_infraestructuraAgroindustrial,
        'concepto_mecanizacion' : concepto_mecanizacion,
        'concepto_equipamiento' : concepto_equipamiento,
        'concepto_agricultura' : concepto_agricultura,
        'concepto_rehabilitacion' : concepto_rehabilitacion 

    })

def graficas(request):
 return render(request, 'graficas.html ')
       

