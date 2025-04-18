# Generated by Django 5.0.4 on 2024-11-13 19:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('form', '0007_rename_e_cien_municipios_ecien_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='entidadesfinancieras2',
            name='aportacion_productor',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='entidadesfinancieras2',
            name='especie_captura',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='entidadesfinancieras2',
            name='especie_forestal',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='entidadesfinancieras2',
            name='fin_zootecnico',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='entidadesfinancieras2',
            name='peso_desembarcado_anual',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='entidadesfinancieras2',
            name='peso_vivo_anual',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='entidadesfinancieras2',
            name='rfc',
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AddField(
            model_name='entidadesfinancieras2',
            name='status',
            field=models.CharField(blank=True, max_length=40),
        ),
        migrations.AddField(
            model_name='entidadesfinancieras2',
            name='volumen_produccion',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='cultivo',
            field=models.CharField(blank=True, max_length=40),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='especie',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='superficie',
            field=models.CharField(blank=True, max_length=40),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='variedad',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='volumen_produccion_anual',
            field=models.CharField(blank=True, max_length=20),
        ),
    ]
