# Generated by Django 4.0 on 2023-04-11 10:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('detector', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='main_sites',
            name='status',
        ),
    ]
