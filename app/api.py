from django.http import HttpResponse
from django.views.generic import View

# def index(request):
#     return HttpResponse("Hello, world. You're at the polls index.")

class index(View):
	def get(self, request, *args, **kwargs):
		return HttpResponse("herro")