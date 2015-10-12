from django.db import models

class TransactionItem(models.Model):
	transaction = models.ForeignKey('Transaction')
	amount = models.IntegerField()
	product = models.ForeignKey('Product')
	count = models.IntegerField()
	def present(self, *args, **kwargs):
		if ('fields' in kwargs):
			returnFields = kwargs['fields']
		else:
			returnFields = ('id', 'amount', 'product')
		returnObj = {}
		if 'id' in returnFields:
			returnObj['id'] = self.id
		if 'amount' in returnFields:
			returnObj['amount'] = self.amount
		return returnObj
