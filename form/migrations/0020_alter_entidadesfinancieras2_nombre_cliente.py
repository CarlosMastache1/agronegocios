# Generated by Django 5.0.4 on 2024-12-26 19:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('form', '0019_alter_municipios_puebloindigena_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='nombre_cliente',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
