from django.db import models

class Vendor(models.Model):
	name = models.CharField(max_length=200)
	slug = models.CharField(max_length=200, unique=True)
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
	email = models.EmailField(max_length=254, blank=True, unique=True)
	users = models.ManyToManyField('User', through='VendorManagement', through_fields=('vendor', 'user'))
	def present(self, *args, **kwargs):
		if ('fields' in kwargs):
			returnFields = kwargs['fields']
		else:
			returnFields = ('name', 'slug', 'description', 'longitude', 'latitude', 'address')
		returnObj = {}
		if 'id' in returnFields:
			returnObj['id'] = self.id
		if 'name' in returnFields:
			returnObj['name'] = self.name
		if 'slug' in returnFields:
			returnObj['slug'] = self.slug
		if 'longitude' in returnFields:
			returnObj['longitude'] = self.longitude
		if 'latitude' in returnFields:
			returnObj['latitude'] = self.latitude
		return returnObj

