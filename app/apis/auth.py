from django.http import HttpResponse, JsonResponse
from django.views.generic import View
from django.shortcuts import render
from app.models import User

class login(View):
	def get(self, request, *args, **kwargs):
		# need to actually implement session or token
		if (not 'email' in request.GET) or (not 'password' in request.GET):
			return JsonResponse({'error':{'message':'Invalid parameters'}})
		email = request.GET['email']
		password = request.GET['password']
		user = User.objects.get(email=email)
		if user.password != password:
			return JsonResponse({'error':{'message':'Invalid username or password'}})
		request.session['user'] = user.email
		return JsonResponse({
			"email": user.email,
			"name": user.name
		})

class logout(View):
	def get(self, request, *args, **kwargs):
		return HttpResponse("herro")
