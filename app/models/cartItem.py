from django.db import models

class CartItem(models.Model):
	user = models.ForeignKey('User')
	product = models.ForeignKey('Product')
	count = models.IntegerField()
	def present(self, *args, **kwargs):
		if ('fields' in kwargs):
			returnFields = kwargs['fields']
		else:
			returnFields = ('count', 'product')
		returnObj = {}
		if 'count' in returnFields:
			returnObj['count'] = self.count
		if 'product' in returnFields:
			returnObj['product'] = self.product.present()
		return returnObj
