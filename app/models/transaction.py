from django.db import models

class Transaction(models.Model):
	amount = models.IntegerField()
	date = models.DateTimeField(auto_now_add=True)
	user = models.ForeignKey('User')
	vendor = models.ForeignKey('Vendor')
	def present(self, *args, **kwargs):
		if ('fields' in kwargs):
			returnFields = kwargs['fields']
		else:
			returnFields = ('id', 'date', 'items')
		returnObj = {}
		if 'id' in returnFields:
			returnObj['id'] = self.id
		if 'date' in returnFields:
			returnObj['date'] = self.date
		if 'items' in returnFields:
			items = []
			[items.append(item.present()) for item in self.transactionitem_set.all()]
			returnObj['items'] = items
		return returnObj
