# Generated by Django 5.0.4 on 2024-12-26 17:23

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('form', '0017_alter_entidadesfinancieras2_cultivo_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='entidadesfinancieras2',
            name='municipio',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='entidades', to='form.municipios'),
        ),
    ]