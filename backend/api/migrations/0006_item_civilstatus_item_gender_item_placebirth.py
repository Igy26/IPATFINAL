# Generated by Django 5.0.6 on 2024-07-09 16:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_item_datebirth'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='civilstatus',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='gender',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='placebirth',
            field=models.CharField(max_length=100, null=True),
        ),
    ]