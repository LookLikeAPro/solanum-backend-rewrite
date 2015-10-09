from django.http import HttpResponse, JsonResponse
from django.views.generic import View
from django.shortcuts import render
from app.models import User

class current(View):
	def get(self, request, *args, **kwargs):
		user = request.user
		return JsonResponse({
			"email": user.email,
			"name": user.name
		})
