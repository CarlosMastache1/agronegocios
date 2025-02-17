# Generated by Django 5.0.4 on 2024-12-03 04:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('form', '0016_alter_entidadesfinancieras2_monto_total'),
    ]

    operations = [
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='cultivo',
            field=models.CharField(blank=True, max_length=40, null=True),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='descripcion_concepto',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='especie',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='especie_captura',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='especie_forestal',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='fin_zootecnico',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='inclumplimiento_credito',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='intermediario_financiero',
            field=models.CharField(blank=True, max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='localidad',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='nombre_cliente',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='periodo_pago',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='peso_desembarcado_anual',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='peso_vivo_anual',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='producto_comercializa',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='producto_tipoCredito',
            field=models.CharField(blank=True, max_length=40, null=True),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='representante_legal',
            field=models.CharField(blank=True, max_length=40, null=True),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='rfc',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='status',
            field=models.CharField(blank=True, max_length=40, null=True),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='subsector',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='superficie',
            field=models.CharField(blank=True, max_length=40, null=True),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='telefono',
            field=models.CharField(blank=True, max_length=12, null=True),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='tipo_concepto',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='tipo_mercado',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='tipo_persona',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='tipo_tenencia',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='variedad',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='volumen_produccion',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='volumen_produccion_anual',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
