# Generated by Django 5.0.4 on 2024-12-03 03:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('form', '0010_alter_entidadesfinancieras2_monto_total_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='intermediario_financiero',
            field=models.CharField(blank=True, max_length=150),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='subsector',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='tipo_persona',
            field=models.CharField(blank=True, max_length=30),
        ),
    ]
