from django.db import models

class User(models.Model):
	name = models.CharField(max_length=200)
	password = models.CharField(max_length=200)
	email = models.EmailField(max_length=254, unique=True)
	vendors = models.ManyToManyField('Vendor', through='VendorManagement', through_fields=('user', 'vendor'))
