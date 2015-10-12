from django.http import HttpResponse, JsonResponse
from django.views.generic import View
from django.shortcuts import render
from app.models import User
from app.models import Transaction

class byID(View):
	def get(self, request, *args, **kwargs):
		id = self.kwargs.get('id', None)
		if not id:
			return JsonResponse({'error':{'message':'Invalid Transaction ID'}})
		transaction = Transaction.objects.filter(id=id).first()
		if not transaction:
			return JsonResponse({'error':{'message':'Transaction not found'}})
		return JsonResponse(transaction.present())
		# return JsonResponse({
		# 	'id': transaction.id,
		# 	'amount': transaction.amount,
		# 	'date': transaction.date,
		# 	'items':[1,2] #transaction.transactionitem_set.all()
		# })
