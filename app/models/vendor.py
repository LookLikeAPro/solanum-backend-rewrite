from django.db import models

class Vendor(models.Model):
	name = models.CharField(max_length=200)
	link = models.CharField(max_length=200)
	description = models.CharField(max_length=200)
	longitude = models.FloatField()
	latitude = models.FloatField()
	address = models.CharField(max_length=200)
	city = models.CharField(max_length=200)
	province = models.CharField(max_length=200)
	area_code = models.CharField(max_length=200)
	country_code = models.CharField(max_length=200)
	timezone = models.IntegerField()
	phone_number = models.CharField(max_length=200)
	email = models.EmailField(max_length=254)
	users = models.ManyToManyField('User', through='VendorManagement', through_fields=('vendor', 'user'))
