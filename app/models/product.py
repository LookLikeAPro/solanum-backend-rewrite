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
	def present(self, *args, **kwargs):
		if ('fields' in kwargs):
			returnFields = kwargs['fields']
		else:
			returnFields = ('id', 'name', 'description', 'price')
		returnObj = {}
		if 'id' in returnFields:
			returnObj['id'] = self.id
		if 'name' in returnFields:
			returnObj['name'] = self.name
		if 'description' in returnFields:
			returnObj['description'] = self.description
		if 'price' in returnFields:
			returnObj['price'] = self.price
		return returnObj
