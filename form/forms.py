from django import forms 
from .models import entidadesFinancieras2, productos

class financieras(forms.ModelForm):
    class Meta:
        model = entidadesFinancieras2
        fields = [ 'nombre_proyecto',  'municipio' , 'localidad', 'nombre_cliente', 'tipo_tenencia', 
    'rfc',
    'num_credito',
    'num_cliente', 
    'tipo_persona', 
    'representante_legal', 
    'telefono',
    'beneficiarios_hombres', 
    'beneficiarios_mujer', 
    'total_beneficiarios', 
    'empleos_directos', 
    'empleos_indirectos', 
    'intermediario_financiero',
    'intermediario_financiero_FIRA',
    'producto_tipoCredito', 
    'monto_total', 
    'monto_garantiasLiquidasVigente', 
    'porcentaje_garantias', 
    'monto_garantiaLiquidaEjercida', 
    'saldo_disponible', 
    'monto_recuperado',
    'inclumplimiento_credito',
    'aportacion_productor',
    'fecha_inicio', 
    'fecha_termino', 
    'tasa_interes', 
    'periodo_pago',
    'tipo_concepto', 
    'descripcion_concepto', 
    'subsector', 
    'especie', 
    'variedad', 
    'cultivo',
    'superficie',
    'volumen_produccion_anual', 
    'volumen_produccion',
    'especie_forestal',
    'especie_captura',
    'peso_vivo_anual',
    'peso_desembarcado_anual',
    'fin_zootecnico',
    'tipo_mercado', 
    'producto_comercializa', 
    'status',
    'tecnico',
    'observaciones',
        ]
        widgets={
            'nombre_proyecto': forms.TextInput(attrs={'class' : 'form-control', 'onkeyup' : 'mayus(this);' }),
            'municipio' : forms.Select(attrs={'class' : 'form-control'}),
            'localidad': forms.TextInput(attrs={'class' : 'form-control', 'onkeyup' : 'mayus(this);'}),
            'nombre_cliente' : forms.TextInput(attrs={'class' : 'form-control', 'onkeyup' : 'mayus(this);'}),
            'tipo_tenencia': forms.TextInput(attrs={'class' : 'form-control', 'onkeyup' : 'mayus(this);'}),
            'rfc': forms.TextInput(attrs={'class' : 'form-control', 'onkeyup' : 'mayus(this);'}),
            'num_credito': forms.NumberInput(attrs={'class' : 'form-control'}),
            'num_cliente': forms.NumberInput(attrs={'class' : 'form-control'}),
            'tipo_persona': forms.Select(attrs={'class' : 'form-control'}),
            'representante_legal': forms.TextInput(attrs={'class' : 'form-control', 'onkeyup' : 'mayus(this);'}),
            'telefono' : forms.NumberInput(attrs={'class' : 'form-control'}),
            'beneficiarios_hombres' : forms.NumberInput(attrs={'class' : 'form-control'}), 
            'beneficiarios_mujer' : forms.NumberInput(attrs={'class' : 'form-control'}), 
            'total_beneficiarios' : forms.NumberInput(attrs={'class' : 'form-control'}), 
            'empleos_directos' : forms.NumberInput(attrs={'class' : 'form-control'}), 
            'empleos_indirectos' : forms.NumberInput(attrs={'class' : 'form-control'}), 
            'intermediario_financiero' : forms.Select(attrs={'class' : 'form-control'}),
            'producto_tipoCredito' : forms.TextInput(attrs={'class' : 'form-control', 'onkeyup' : 'mayus(this);'}),
            'monto_total' : forms.NumberInput(attrs={'class' : 'form-control'}),
            'monto_garantiasLiquidasVigente' : forms.NumberInput(attrs={'class' : 'form-control'}), 
            'porcentaje_garantias' : forms.NumberInput(attrs={'class' : 'form-control'}), 
            'monto_garantiaLiquidaEjercida': forms.NumberInput(attrs={'class' : 'form-control'}), 
            'saldo_disponible' : forms.NumberInput(attrs={'class' : 'form-control'}), 
            'monto_recuperado' : forms.NumberInput(attrs={'class' : 'form-control'}), 
            'inclumplimiento_credito' : forms.TextInput(attrs={'class' : 'form-control', 'onkeyup' : 'mayus(this);'}),
            'aportacion_productor' : forms.NumberInput(attrs={'class' : 'form-control'}), 
            'fecha_inicio' : forms.DateInput(attrs={'class' : 'form-control', 'type' : 'date'}), 
            'fecha_termino' : forms.DateInput(attrs={'class' : 'form-control', 'type' : 'date'}), 
            'tasa_interes' : forms.NumberInput(attrs={'class' : 'form-control'}), 
            'periodo_pago' : forms.Select(attrs={'class' : 'form-control'}), 
            'tipo_concepto' : forms.TextInput(attrs={'class' : 'form-control', 'onkeyup' : 'mayus(this);'}),
            'descripcion_concepto' : forms.TextInput(attrs={'class' : 'form-control', 'onkeyup' : 'mayus(this);'}), 
            'subsector' : forms.Select(attrs={'class' : 'form-control', 'onkeyup' : 'mayus(this);'}),
            'especie' : forms.TextInput(attrs={'class' : 'form-control', 'onkeyup' : 'mayus(this);'}),
            'variedad' : forms.TextInput(attrs={'class' : 'form-control', 'onkeyup' : 'mayus(this);'}),
            'cultivo' : forms.TextInput(attrs={'class' : 'form-control', 'onkeyup' : 'mayus(this);'}),
            'superficie' : forms.NumberInput(attrs={'class' : 'form-control'}), 
            'volumen_produccion_anual' : forms.NumberInput(attrs={'class' : 'form-control'}),
            'volumen_produccion' : forms.NumberInput(attrs={'class' : 'form-control'}), 
            'especie_forestal' : forms.TextInput(attrs={'class' : 'form-control', 'onkeyup' : 'mayus(this);'}),
            'especie_captura' :  forms.TextInput(attrs={'class' : 'form-control', 'onkeyup' : 'mayus(this);'}),
            'peso_vivo_anual' : forms.NumberInput(attrs={'class' : 'form-control'}), 
            'peso_desembarcado_anual' : forms.NumberInput(attrs={'class' : 'form-control'}), 
            'fin_zootecnico' : forms.TextInput(attrs={'class' : 'form-control', 'onkeyup' : 'mayus(this);'}),
            'tipo_mercado' : forms.TextInput(attrs={'class' : 'form-control', 'onkeyup' : 'mayus(this);'}),
            'producto_comercializa' : forms.TextInput(attrs={'class' : 'form-control', 'onkeyup' : 'mayus(this);'}),
            'status' : forms.TextInput(attrs={'class' : 'form-control', 'onkeyup' : 'mayus(this);'}),
        }


class productosForm(forms.ModelForm):
    class Meta:
        model = productos
        fields = [ 'nombreProductor',  'municipio' , 'localidad', 'nombreProducto', 'nombreMarca', 'subsector', 'categoria', 'unidad_medidad', 'volumen_produccion', 'disponibilidad_entrega', 'telefono', 'email', 'imagenProd', 'archivo_pdf', 'comentarios'
        ]
