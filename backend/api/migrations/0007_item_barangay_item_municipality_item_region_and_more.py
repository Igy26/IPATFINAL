# Generated by Django 5.0.6 on 2024-07-09 16:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_item_civilstatus_item_gender_item_placebirth'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='barangay',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='municipality',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='region',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='zipcode',
            field=models.CharField(max_length=100, null=True),
        ),
    ]