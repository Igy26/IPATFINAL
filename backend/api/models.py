from django.db import models


# Create your models here.


class Item(models.Model):
    fname = models.CharField(max_length=100, null=True)
    mname = models.CharField(max_length=100, null=True)
    sname = models.CharField(max_length=100, null=True)
    address = models.CharField(max_length=100, null=True)
    barangay = models.CharField(max_length=100, null=True)
    zipcode = models.CharField(max_length=100, null=True)
    region = models.CharField(max_length=100, null=True)
    municipality = models.CharField(max_length=100, null=True)
    phone = models.CharField(max_length=100, null=True)
    datebirth = models.CharField(max_length=50, null=True)
    placebirth = models.CharField(max_length=100, null=True)
    gender = models.CharField(max_length=50, null=True)
    civilstatus = models.CharField(max_length=50, null=True)
    

    def __str__(self):
        return self.fname 
