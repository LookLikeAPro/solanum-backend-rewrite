from django.db import models

class TransactionItem(models.Model):
	transation = models.ForeignKey('Transaction')
	amount = models.IntegerField()
	product = models.ForeignKey('Product')
	count = models.IntegerField()
