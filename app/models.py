from django.db import models

class User(models.Model):
	name = models.CharField(max_length=200)
	password = models.CharField(max_length=200)
	email = models.EmailField(max_length=254)
	vendors = models.ManyToManyField('Vendor', through='VendorManagement', through_fields=('user', 'vendor'))

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

class VendorManagement(models.Model):
	vendor = models.ForeignKey('Vendor')
	user = models.ForeignKey('User')

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

class Transaction(models.Model):
	amount = models.IntegerField()
	date = models.DateTimeField(auto_now_add=True)
	user = models.ForeignKey('User')
	vendor = models.ForeignKey('Vendor')

class TransactionItem(models.Model):
	transation = models.ForeignKey('Transaction')
	amount = models.IntegerField()
	product = models.ForeignKey('Product')
	count = models.IntegerField()

class CartItem(models.Model):
	user = models.ForeignKey('User')
	product = models.ForeignKey('Product')
	count = models.IntegerField()

