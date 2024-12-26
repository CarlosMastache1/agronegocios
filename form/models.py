from django.db import models

# Create your models here.
class municipios(models.Model):
    nombre_municipio = models.CharField(max_length=200)
    region = models.CharField(max_length=100)
    eCien = models.BooleanField(default=False)
    puebloIndigena = models.CharField(max_length=100)
    ciit = models.BooleanField(default=False)


class entidadesFinancieras2(models.Model):
    nombre_proyecto = models.CharField(max_length = 200) 
    municipio = models.ForeignKey(municipios, on_delete=models.CASCADE, related_name='entidades') 
    localidad = models.CharField(max_length=100, blank=True, null=True) 
    tipo_tenencia = models.CharField(max_length=50,blank=True, null=True) 
    # personas = (('PERSONA FISICA', 'PERSONA FISICA'), ('PERSONA MORAL', 'PERSONA MORAL'))
    tipo_persona = models.CharField(max_length=30, blank=True, null=True) 
    num_credito = models.IntegerField(blank=True, null=True) 
    num_cliente = models.IntegerField(blank=True, null=True) 
    nombre_cliente = models.CharField(max_length=200, blank=True, null=True) 
    representante_legal = models.CharField(max_length=40, blank=True, null=True) 
    telefono = models.CharField(max_length=12, blank=True, null=True) 
    producto_tipoCredito = models.CharField(max_length=40, blank=True, null=True) 
    monto_total = models.DecimalField(max_digits = 12, decimal_places=5, blank=True, null=True) 
    fecha_inicio = models.DateField(blank=True, null=True) 
    fecha_termino = models.DateField(blank=True, null=True) 
    tasa_interes = models.DecimalField(max_digits = 12, decimal_places=5, blank=True, null=True) 
    #periodos = (('MENSUAL', 'MENSUAL'), ('BIMESTRAL', 'BIMESTRAL'), ('TRIMESTRAL', 'TRIMESTRAL'), ('CUATRIMESTRAL', 'CUATRIMESTRAL'), ('SEMESTRAL', 'SEMESTRAL'), ('ANUAL', 'ANUAL'), ('AL VENCIMIENTO', 'AL VENCIMIENTO'))
    periodo_pago = models.CharField(max_length=50, blank=True, null=True) 
    monto_garantiasLiquidasVigente = models.DecimalField(max_digits = 12, decimal_places=5, blank=True, null=True) 
    porcentaje_garantias = models.DecimalField(max_digits = 12, decimal_places=5, blank=True, null=True) 
    monto_garantiaLiquidaEjercida = models.DecimalField(max_digits = 12, decimal_places=5, blank=True, null=True) 
    saldo_disponible = models.DecimalField(max_digits = 12, decimal_places=5, blank=True,  null=True)
    monto_recuperado = models.DecimalField(max_digits = 12, decimal_places=5, blank=True, null=True)
    inclumplimiento_credito = models.CharField(max_length= 100, blank=True, null=True)
    #financieras = (('COOPERATIVA ACREIMEX, SOCIEDAD COOPERATIVA DE AHORRO Y PRESTAMO', 'COOPERATIVA ACREIMEX, SOCIEDAD COOPERATIVA DE AHORRO Y PRESTAMO'), ('FINDECA, SOCIEDAD ANÓNIMA DE CAPITAL VARIABLE', 'FINDECA, SOCIEDAD ANÓNIMA DE CAPITAL VARIABLE'), ('NEGOCIOS EMPRESARIALES DE APOYO DE OAXACA, SOCIEDAD ANONIMA DE CAPITAL VARIABLE', 'NEGOCIOS EMPRESARIALES DE APOYO DE OAXACA, SOCIEDAD ANONIMA DE CAPITAL VARIABLE'), ('FIDEICOMISOS INSTITUIDOS EN RELACION CON LA AGRICULTURA (FIRA)', 'FIDEICOMISOS INSTITUIDOS EN RELACION CON LA AGRICULTURA (FIRA)'), ('CAJA SOLIDARIA SAN DIONISIO OCOTEPEC, SOCIEDAD COOPERATIVA DE AHORRO Y PRESTAMO', 'CAJA SOLIDARIA SAN DIONISIO OCOTEPEC, SOCIEDAD COOPERATIVA DE AHORRO Y PRESTAMO'))
    intermediario_financiero = models.CharField(max_length= 150, blank=True, null=True)
    #conceptos = (('INFRAESTRUCTURA AGROALIMENTARIA', 'INFRAESTRUCTURA AGROALIMENTARIA'), ()) 
    tipo_concepto = models.CharField(max_length= 30, blank=True, null=True) 
    descripcion_concepto = models.TextField(blank=True, null=True) 
    beneficiarios_hombres = models.IntegerField(blank=True, null=True) 
    beneficiarios_mujer = models.IntegerField(blank=True, null=True) 
    total_beneficiarios = models.IntegerField(blank=True, null=True) 
    empleos_directos = models.IntegerField(blank=True, null=True) 
    empleos_indirectos = models.IntegerField(blank=True, null=True) 
    #subsectores = (('Agricola', 'AGRICOLA'), ('Pecuario', 'PECUARIO'), ('Acuicola', 'ACUICOLA'), ('Pesquero', 'PESQUERO'), ('Forestal', 'FORESTAL'))
    subsector = models.CharField(max_length=50, blank=True, null=True) 
    especie = models.CharField(max_length=50, blank=True, null=True) 
    variedad = models.CharField(max_length=50, blank=True, null=True) 
    cultivo = models.CharField(max_length=40, blank=True, null=True)
    superficie = models.CharField(max_length=40, blank=True, null=True)
    volumen_produccion_anual = models.CharField(max_length=20, blank=True, null=True) 
    volumen_produccion = models.CharField(max_length=50, blank=True, null=True)
    especie_forestal = models.CharField(max_length=50, blank=True, null=True)
    especie_captura = models.CharField(max_length=50, blank=True, null=True)
    peso_vivo_anual = models.CharField(max_length=50, blank=True, null=True)
    peso_desembarcado_anual = models.CharField(max_length=50, blank=True, null=True)
    fin_zootecnico = models.CharField(max_length=50, blank=True, null=True)
    tipo_mercado = models.CharField(max_length=50, blank=True, null=True) 
    producto_comercializa = models.CharField(max_length=50, blank=True, null=True) 
    status = models.CharField(max_length=40,  blank=True, null=True)
    rfc = models.CharField(max_length=20,  blank=True, null=True)
    aportacion_productor = models.DecimalField(max_digits = 12, decimal_places=5, blank=True, null=True)


    
    
     


class cultivos(models.Model):
    anio = models.IntegerField()
    idEstado = models.IntegerField()
    nomEstado = models.CharField(max_length=40)
    idddr = models.IntegerField()
    nomddr = models.CharField(max_length=40)
    idCader = models.IntegerField()
    nomCader = models.IntegerField()
    idMunicipio = models.IntegerField()
    nomMunicipio = models.CharField(max_length=40)
    IdCiclo = models.IntegerField()
    nomCicloProductivo = models.CharField(max_length=40)
    Idmodalidad = models.IntegerField()
    nomModalidad = models.CharField(max_length=40)
    idUnidadMedida = models.IntegerField()
    nomUnidad = models.CharField(max_length=40)
    idCultivo = models.IntegerField()
    nomCultivo = models.CharField(max_length=40)
    sembrada = models.DecimalField(max_digits = 8, decimal_places=2)
    cosechada = models.DecimalField(max_digits = 8, decimal_places=2)
    siniestrada = models.DecimalField(max_digits = 8, decimal_places=2)
    volumenProduccion = models.DecimalField(max_digits = 8, decimal_places=2)
    rendimiento = models.DecimalField(max_digits = 8, decimal_places=2)
    precio = models.DecimalField(max_digits = 8, decimal_places=2)
    valorProduccion = models.DecimalField(max_digits = 10, decimal_places=2)
    region = models.CharField(max_length=40)
    puebloIndigena = models.CharField(max_length=40)




























    


     