from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate
from django.http import HttpResponse
from django.db import IntegrityError
from .forms import financieras 
from django.contrib import messages
from .models import entidadesFinancieras2, municipios
from django.db.models import Sum, Count, Q
from django.http.response import JsonResponse
from random import randrange
from django.contrib.auth.decorators import login_required
from django.db.models.functions import ExtractYear


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


      #GARANTIAS LIQUIDAS
      garantias_VC = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_IST = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_MIX = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_PAPA = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_COS = (entidadesFinancieras2.objects.filter(municipio__region='COSTA').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_SJ = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_SS = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_SFM = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      

      garantia_VC_templates = garantias_VC['sumatotal'] 
      garantia_IST_templates = garantias_IST['sumatotal'] 
      garantia_MIX_templates = garantias_MIX['sumatotal'] 
      garantia_PAPA_templates = garantias_PAPA['sumatotal'] 
      garantia_COS_templates = garantias_COS['sumatotal'] 
      garantia_SJ_templates = garantias_SJ['sumatotal'] 
      garantia_SS_templates = garantias_SS['sumatotal']
      garantia_SFM_templates = garantias_SFM['sumatotal'] 

      #BENEFICIARIOS 
      beneficiarios_VC = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_IST = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_MIX = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_PAPA = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_COS = (entidadesFinancieras2.objects.filter(municipio__region='COSTA').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_SJ = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_SS = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_SFM = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON').aggregate(sumatotal=Sum('total_beneficiarios')))

 
      beneficiarios_VC_T = beneficiarios_VC['sumatotal'] 
      beneficiarios_IST_T = beneficiarios_IST['sumatotal'] 
      beneficiarios_MIX_T = beneficiarios_MIX['sumatotal'] 
      beneficiarios_PAPA_T = beneficiarios_PAPA['sumatotal'] 
      beneficiarios_COS_T = beneficiarios_COS['sumatotal'] 
      beneficiarios_SJ_T = beneficiarios_SJ['sumatotal'] 
      beneficiarios_SS_T = beneficiarios_SS['sumatotal'] 
      beneficiarios_SFM_T = beneficiarios_SFM['sumatotal'] 

      #E100
      E100_VC = (entidadesFinancieras2.objects.filter(municipio__eCien=True, municipio__region='VALLES CENTRALES').count())
      E100_IST = (entidadesFinancieras2.objects.filter(municipio__eCien=True, municipio__region='ISTMO').count())
      E100_MIX = (entidadesFinancieras2.objects.filter(municipio__eCien=True, municipio__region='MIXTECA').count())
      E100_PAPA = (entidadesFinancieras2.objects.filter(municipio__eCien=True, municipio__region='PAPALOAPAN').count())
      E100_COS = (entidadesFinancieras2.objects.filter(municipio__eCien=True, municipio__region='COSTA').count())
      E100_SJ = (entidadesFinancieras2.objects.filter(municipio__eCien=True, municipio__region='SIERRA DE JUAREZ').count())
      E100_SS = (entidadesFinancieras2.objects.filter(municipio__eCien=True, municipio__region='SIERRA SUR').count())
      E100_SFM = (entidadesFinancieras2.objects.filter(municipio__eCien=True, municipio__region='SIERRA DE FLORES MAGON').count())

      #PUEBLOSINDIGENAS
      PI_VC = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='VALLES CENTRALES').count())
      PI_IST = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='ISTMO').count())
      PI_MIX = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='MIXTECA').count())
      PI_PAPA = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='PAPALOAPAN').count())
      PI_COS = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='COSTA').count())
      PI_SJ = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='SIERRA DE JUAREZ').count())
      PI_SS = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='SIERRA SUR').count())
      PI_SFM = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='SIERRA DE FLORES MAGON').count())


      #EMPLEOS DIRECTOS
      empleos_VC = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES').aggregate(sumatotal=Sum('empleos_directos')))
      empleos_IST = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO').aggregate(sumatotal=Sum('empleos_directos')))
      empleos_MIX = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA').aggregate(sumatotal=Sum('empleos_directos')))
      empleos_PAPA = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN').aggregate(sumatotal=Sum('empleos_directos')))
      empleos_COS = (entidadesFinancieras2.objects.filter(municipio__region='COSTA').aggregate(sumatotal=Sum('empleos_directos')))
      empleos_SJ = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ').aggregate(sumatotal=Sum('empleos_directos')))
      empleos_SS = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR').aggregate(sumatotal=Sum('empleos_directos')))
      empleos_SFM = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON').aggregate(sumatotal=Sum('empleos_directos')))


      empleos_VC_T = empleos_VC['sumatotal']
      empleos_IST_T = empleos_IST['sumatotal']
      empleos_MIX_T = empleos_MIX['sumatotal']
      empleos_PAPA_T = empleos_PAPA['sumatotal']
      empleos_COS_T = empleos_COS['sumatotal']
      empleos_SJ_T = empleos_SJ['sumatotal']
      empleos_SS_T= empleos_SS['sumatotal']
      empleos_SFM_T = empleos_SFM['sumatotal']


      #CANTIDAD DE PROYECTOS 2023
      conteo_VC_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='VALLES CENTRALES').values('municipio__region').annotate(total=Count('id')))
      conteo_IST_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='ISTMO').values('municipio__region').annotate(total=Count('id')))
      conteo_MIX_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='MIXTECA').values('municipio__region').annotate(total=Count('id')))
      conteo_PAPA_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='PAPALOAPAN').values('municipio__region').annotate(total=Count('id')))
      conteo_COS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='COSTA').values('municipio__region').annotate(total=Count('id')))
      conteo_SJ_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA DE JUAREZ').values('municipio__region').annotate(total=Count('id')))
      conteo_SS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA SUR').values('municipio__region').annotate(total=Count('id')))
      conteo_SFM_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA DE FLORES MAGON').values('municipio__region').annotate(total=Count('id')))
      

      #MONTOS DE FINANCIAMIENTO 2023
      monto_VC_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='VALLES CENTRALES').aggregate(sumatotal=Sum('monto_total')))
      monto_IST_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='ISTMO').aggregate(sumatotal=Sum('monto_total')))
      monto_MIX_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='MIXTECA').aggregate(sumatotal=Sum('monto_total')))
      monto_PAPA_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='PAPALOAPAN').aggregate(sumatotal=Sum('monto_total')))
      monto_COS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='COSTA').aggregate(sumatotal=Sum('monto_total')))
      monto_SJ_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA DE JUAREZ').aggregate(sumatotal=Sum('monto_total')))
      monto_SS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA SUR').aggregate(sumatotal=Sum('monto_total')))
      monto_SFM_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA DE FLORES MAGON').aggregate(sumatotal=Sum('monto_total')))

      monto_VC_templates_2023 = monto_VC_2023['sumatotal'] 
      monto_IST_templates_2023 = monto_IST_2023['sumatotal'] 
      monto_MIX_templates_2023 = monto_MIX_2023['sumatotal'] 
      monto_PAPA_templates_2023 = monto_PAPA_2023['sumatotal'] 
      monto_COS_templates_2023 = monto_COS_2023['sumatotal'] 
      monto_SJ_templates_2023 = monto_SJ_2023['sumatotal'] 
      monto_SS_templates_2023 = monto_SS_2023['sumatotal']
      monto_SFM_templates_2023 = monto_SFM_2023['sumatotal'] 


      #GARANTIAS LIQUIDAS 2023
      garantias_VC_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='VALLES CENTRALES').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_IST_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='ISTMO').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_MIX_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='MIXTECA').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_PAPA_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='PAPALOAPAN').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_COS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='COSTA').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_SJ_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA DE JUAREZ').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_SS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA SUR').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      garantias_SFM_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA DE FLORES MAGON').aggregate(sumatotal=Sum('monto_garantiasLiquidasVigente')))
      

      garantia_VC_templates_2023 = garantias_VC_2023['sumatotal'] 
      garantia_IST_templates_2023 = garantias_IST_2023['sumatotal'] 
      garantia_MIX_templates_2023 = garantias_MIX_2023['sumatotal'] 
      garantia_PAPA_templates_2023 = garantias_PAPA_2023['sumatotal'] 
      garantia_COS_templates_2023 = garantias_COS_2023['sumatotal'] 
      garantia_SJ_templates_2023 = garantias_SJ_2023['sumatotal'] 
      garantia_SS_templates_2023 = garantias_SS_2023['sumatotal']
      garantia_SFM_templates_2023 = garantias_SFM_2023['sumatotal'] 


      #BENEFICIARIOS 2023
      beneficiarios_VC_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='VALLES CENTRALES').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_IST_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='ISTMO').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_MIX_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='MIXTECA').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_PAPA_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='PAPALOAPAN').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_COS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='COSTA').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_SJ_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA DE JUAREZ').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_SS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA SUR').aggregate(sumatotal=Sum('total_beneficiarios')))
      beneficiarios_SFM_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__region='SIERRA DE FLORES MAGON').aggregate(sumatotal=Sum('total_beneficiarios')))

 
      beneficiarios_VC_T_2023 = beneficiarios_VC_2023['sumatotal'] 
      beneficiarios_IST_T_2023 = beneficiarios_IST_2023['sumatotal'] 
      beneficiarios_MIX_T_2023 = beneficiarios_MIX_2023['sumatotal'] 
      beneficiarios_PAPA_T_2023 = beneficiarios_PAPA_2023['sumatotal'] 
      beneficiarios_COS_T_2023 = beneficiarios_COS_2023['sumatotal'] 
      beneficiarios_SJ_T_2023 = beneficiarios_SJ_2023['sumatotal'] 
      beneficiarios_SS_T_2023 = beneficiarios_SS_2023['sumatotal'] 
      beneficiarios_SFM_T_2023 = beneficiarios_SFM_2023['sumatotal'] 


      #E1002023
      E100_VC_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__eCien=True, municipio__region='VALLES CENTRALES').count())
      E100_IST_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__eCien=True, municipio__region='ISTMO').count())
      E100_MIX_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__eCien=True, municipio__region='MIXTECA').count())
      E100_PAPA_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__eCien=True, municipio__region='PAPALOAPAN').count())
      E100_COS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__eCien=True, municipio__region='COSTA').count())
      E100_SJ_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__eCien=True, municipio__region='SIERRA DE JUAREZ').count())
      E100_SS_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__eCien=True, municipio__region='SIERRA SUR').count())
      E100_SFM_2023 = (entidadesFinancieras2.objects.filter(fecha_inicio__year=2023, municipio__eCien=True, municipio__region='SIERRA DE FLORES MAGON').count())

      #PUEBLOSINDIGENAS 2023
      PI_VC_2023 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='VALLES CENTRALES', fecha_inicio__year=2023).count())
      PI_IST_2023 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='ISTMO', fecha_inicio__year=2023).count())
      PI_MIX_2023 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='MIXTECA', fecha_inicio__year=2023).count())
      PI_PAPA_2023 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='PAPALOAPAN', fecha_inicio__year=2023).count())
      PI_COS_2023 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='COSTA', fecha_inicio__year=2023).count())
      PI_SJ_2023 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='SIERRA DE JUAREZ', fecha_inicio__year=2023).count())
      PI_SS_2023 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='SIERRA SUR', fecha_inicio__year=2023).count())
      PI_SFM_2023 = (entidadesFinancieras2.objects.filter(~Q(municipio__puebloIndigena='false'), municipio__region='SIERRA DE FLORES MAGON', fecha_inicio__year=2023).count())

      #EMPLEOS DIRECTOS 2023
      empleos_VC_2023 = (entidadesFinancieras2.objects.filter(municipio__region='VALLES CENTRALES', fecha_inicio__year=2023).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_IST_2023 = (entidadesFinancieras2.objects.filter(municipio__region='ISTMO', fecha_inicio__year=2023).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_MIX_2023 = (entidadesFinancieras2.objects.filter(municipio__region='MIXTECA', fecha_inicio__year=2023).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_PAPA_2023 = (entidadesFinancieras2.objects.filter(municipio__region='PAPALOAPAN', fecha_inicio__year=2023).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_COS_2023 = (entidadesFinancieras2.objects.filter(municipio__region='COSTA', fecha_inicio__year=2023).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_SJ_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE JUAREZ', fecha_inicio__year=2023).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_SS_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA SUR', fecha_inicio__year=2023).aggregate(sumatotal=Sum('empleos_directos')))
      empleos_SFM_2023 = (entidadesFinancieras2.objects.filter(municipio__region='SIERRA DE FLORES MAGON', fecha_inicio__year=2023).aggregate(sumatotal=Sum('empleos_directos')))

      empleos_VC_T_2023 = empleos_VC_2023['sumatotal']
      empleos_IST_T_2023 = empleos_IST_2023['sumatotal']
      empleos_MIX_T_2023 = empleos_MIX_2023['sumatotal']
      empleos_PAPA_T_2023 = empleos_PAPA_2023['sumatotal']
      empleos_COS_T_2023 = empleos_COS_2023['sumatotal']
      empleos_SJ_T_2023 = empleos_SJ_2023['sumatotal']
      empleos_SS_T_2023 = empleos_SS_2023['sumatotal']
      empleos_SFM_T_2023 = empleos_SFM_2023['sumatotal']

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


        })


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






       

