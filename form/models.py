from django.db import models

# Create your models here.
class municipios(models.Model):
    nombre_municipio = models.CharField(max_length=200)


class entidadesFinancieras(models.Model):
    nombre_proyecto = models.CharField(max_length = 200) 
    region = models.CharField(max_length= 50) 
    municipio = models.CharField(max_length=70) 
    localidad = models.CharField(max_length=100) 
    tipo_tenencia = models.CharField(max_length=50) 
    tipo_persona = models.CharField(max_length=30) 
    num_credito = models.IntegerField() 
    num_cliente = models.IntegerField() 
    nombre_cliente = models.CharField(max_length=50) 
    representante_legal = models.CharField(max_length=40) 
    telefono = models.CharField(max_length=12) 
    producto_tipoCredito = models.CharField(max_length=40) 
    monto_total = models.DecimalField(max_digits = 12, decimal_places=2) 
    fecha_inicio = models.DateField() 
    fecha_termino = models.DateField() 
    tasa_interes = models.DecimalField(max_digits = 12, decimal_places=2) 
    periodo_pago = models.CharField(max_length=50) 
    monto_garantiasLiquidasVigente = models.DecimalField(max_digits = 12, decimal_places=2) 
    porcentaje_garantias = models.DecimalField(max_digits = 12, decimal_places=2) 
    monto_garantiaLiquidaEjercida = models.DecimalField(max_digits = 12, decimal_places=2) 
    saldo_disponible = models.DecimalField(max_digits = 12, decimal_places=2)
    monto_recuperado = models.DecimalField(max_digits = 12, decimal_places=2)
    inclumplimiento_credito = models.CharField(max_length= 100)
    intermediario_financiero = models.CharField(max_length= 150) 
    tipo_concepto = models.CharField(max_length= 30) 
    descripcion_concepto = models.TextField() 
    beneficiarios_hombres = models.IntegerField() 
    beneficiarios_mujer = models.IntegerField() 
    total_beneficiarios = models.IntegerField() 
    empleos_directos = models.IntegerField() 
    empleos_indirectos = models.IntegerField() 
    subsector = models.CharField(max_length=50) 
    especie = models.CharField(max_length=50) 
    variedad = models.CharField(max_length=50) 
    cultivo = models.CharField(max_length=40)
    superficie = models.CharField(max_length=40)
    volumen_produccion_anual = models.IntegerField() 
    tipo_mercado = models.CharField(max_length=50) 
    producto_comercializa = models.CharField(max_length=50) 


class entidadesFinancieras2(models.Model):
    nombre_proyecto = models.CharField(max_length = 200) 
    region = models.CharField(max_length= 50) 
    municipio = models.CharField(max_length=70) 
    localidad = models.CharField(max_length=100) 
    tipo_tenencia = models.CharField(max_length=50) 
    tipo_persona = models.CharField(max_length=30) 
    num_credito = models.IntegerField() 
    num_cliente = models.IntegerField() 
    nombre_cliente = models.CharField(max_length=50) 
    representante_legal = models.CharField(max_length=40) 
    telefono = models.CharField(max_length=12) 
    producto_tipoCredito = models.CharField(max_length=40) 
    monto_total = models.DecimalField(max_digits = 12, decimal_places=2) 
    fecha_inicio = models.DateField() 
    fecha_termino = models.DateField() 
    tasa_interes = models.DecimalField(max_digits = 12, decimal_places=2) 
    periodo_pago = models.CharField(max_length=50) 
    monto_garantiasLiquidasVigente = models.DecimalField(max_digits = 12, decimal_places=2) 
    porcentaje_garantias = models.DecimalField(max_digits = 12, decimal_places=2) 
    monto_garantiaLiquidaEjercida = models.DecimalField(max_digits = 12, decimal_places=2) 
    saldo_disponible = models.DecimalField(max_digits = 12, decimal_places=2)
    monto_recuperado = models.DecimalField(max_digits = 12, decimal_places=2)
    inclumplimiento_credito = models.CharField(max_length= 100)
    intermediario_financiero = models.CharField(max_length= 150) 
    tipo_concepto = models.CharField(max_length= 30) 
    descripcion_concepto = models.TextField() 
    beneficiarios_hombres = models.IntegerField() 
    beneficiarios_mujer = models.IntegerField() 
    total_beneficiarios = models.IntegerField() 
    empleos_directos = models.IntegerField() 
    empleos_indirectos = models.IntegerField() 
    subsector = models.CharField(max_length=50) 
    especie = models.CharField(max_length=50) 
    variedad = models.CharField(max_length=50) 
    cultivo = models.CharField(max_length=40)
    superficie = models.CharField(max_length=40)
    volumen_produccion_anual = models.IntegerField() 
    tipo_mercado = models.CharField(max_length=50) 
    producto_comercializa = models.CharField(max_length=50) 
    
    
     


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




























    


     