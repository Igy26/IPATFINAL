# Generated by Django 5.0.6 on 2024-06-16 15:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_item_address_item_fname_item_mname_item_phone_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item',
            name='description',
        ),
        migrations.RemoveField(
            model_name='item',
            name='name',
        ),
    ]
