from django.db import models

class Transaction(models.Model):
	amount = models.IntegerField()
	date = models.DateTimeField(auto_now_add=True)
	user = models.ForeignKey('User')
	vendor = models.ForeignKey('Vendor')
