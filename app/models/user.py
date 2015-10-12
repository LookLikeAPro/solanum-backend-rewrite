from django.db import models

class User(models.Model):
	name = models.CharField(max_length=200)
	password = models.CharField(max_length=200)
	email = models.EmailField(max_length=254, unique=True)
	vendors = models.ManyToManyField('Vendor', through='VendorManagement', through_fields=('user', 'vendor'))
	def present(self, *args, **kwargs):
		if ('fields' in kwargs):
			returnFields = kwargs['fields']
		else:
			returnFields = ('name', 'email')
		returnObj = {}
		if 'id' in returnFields:
			returnObj['id'] = self.id
		if 'name' in returnFields:
			returnObj['name'] = self.name
		if 'email' in returnFields:
			returnObj['email'] = self.email
		return returnObj
