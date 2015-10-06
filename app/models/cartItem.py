from django.db import models

class CartItem(models.Model):
	user = models.ForeignKey('User')
	product = models.ForeignKey('Product')
	count = models.IntegerField()
