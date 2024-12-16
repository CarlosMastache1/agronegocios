from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate
from django.http import HttpResponse
from django.db import IntegrityError
from .forms import financieras 
from django.contrib import messages
from .models import entidadesFinancieras2, municipios
from django.db.models import Sum, Count
from django.http.response import JsonResponse
from random import randrange
from django.contrib.auth.decorators import login_required

# Create your views here.
@login_required
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

@login_required
def creditDetail(request, credit_id):
  credito = get_object_or_404(entidadesFinancieras2, pk=credit_id)
  return render(request, 'cred_detail.html', {
      'credito' : credito
  })



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
    valles_centrales_proy = entidadesFinancieras2.objects.aggregate(vcsuma=Sum(''))
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
        # 'region_istmo' : region_istmo,
        # 'region_mixteca' : region_mixteca,
        # 'region_costa' : region_costa,
        # 'region_sierra' : region_sierra,
        # 'region_sierraJuarez' : region_sierraJuarez,
        # 'region_sierraSur' : region_sierraSur, 
        # 'region_valles' : region_valles,

        'concepto_infraestructuraAgroalimentaria' : concepto_infraestructuraAgroalimentaria,
        'concepto_infraestructuraAgroindustrial' : concepto_infraestructuraAgroindustrial,
        'concepto_mecanizacion' : concepto_mecanizacion,
        'concepto_equipamiento' : concepto_equipamiento,
        'concepto_agricultura' : concepto_agricultura,
        'concepto_rehabilitacion' : concepto_rehabilitacion 

    })

@login_required
def graficas(request):
    if request.method == 'GET':
        return render(request, 'graficas.html')


@login_required
def get_chart(request):
    serie=[]
    counter = 0

    while (counter < 6):
        serie.append(randrange(100,400))
        counter += 1
    chart = {
        'xAxis':[
            {
                'type' : "category",
                'data' :  ['FINDECA', 'ACREIMEX', 'FIRA', 'CAJA 4', 'CAJA 5', 'CAJA 6']
            }
        ],
        'yAxis' : [
            {
                'type' : "value",
            }
        ],
        'series' :[
            {
                'data':serie,
                'type':"line"
            }
        ]
    }

    return JsonResponse(chart)


@login_required
def get_chart2(request):

    entidadesFINDECA = entidadesFinancieras2.objects.values("intermediario_financiero").filter(intermediario_financiero="'FINDECA', SOCIEDAD ANÓNIMA DE CAPITAL VARIABLE").count()

    serie=[30,7,20,30,40,50,60, 20]

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
      'data': ['Valles Centrales', 'Istmo', 'Costa', 'Papaloapan', 'Mixteca', 'Sierra de Juarez', 'Sierra Sur', 'Sierra de Flores Magon'],
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
        'name': 'Monto de Financiamiento por región (Millones de pesos)',
        'type': 'bar',
        'barWidth': '60%',
        'data': serie,
        }
    ]
    }

    return JsonResponse(chart)


@login_required
def get_chart3(request):

    bh = entidadesFinancieras2.objects.aggregate(bhsuma=Sum('beneficiarios_hombres'))
    bm = entidadesFinancieras2.objects.aggregate(bmsuma=Sum('beneficiarios_mujer'))

    bhtemplates = bh['bhsuma'] 
    bmtemplates = bm['bmsuma']  

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
      'name': 'Proyectos por tipo de persona',
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
        { 'value': bhtemplates, 'name': 'Moral' },
        { 'value': bmtemplates, 'name': 'Fisica' },
      ]
    }
  ]

    }

    return JsonResponse(chart)


def delete_credit(request, credit_id):
  credit = get_object_or_404(entidadesFinancieras2, pk= credit_id)
  if request.method == 'POST':
    credit.delete()
    messages.success(request, 'Registro eliminado en la base de datos')
    return redirect('home')






       

