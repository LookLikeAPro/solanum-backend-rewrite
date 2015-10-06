from django.db import models

class VendorManagement(models.Model):
	vendor = models.ForeignKey('Vendor')
	user = models.ForeignKey('User')
