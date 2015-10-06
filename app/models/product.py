from django.db import models

class Product(models.Model):
	name = models.CharField(max_length=200)
	description = models.CharField(max_length=200)
	price = models.IntegerField()
	currency = (
		('0', 'USD'),
		('1', 'CAD'),
		('2', 'EUR'),
		('3', 'RMB'),
	)
	vendor = models.ForeignKey('Vendor')
