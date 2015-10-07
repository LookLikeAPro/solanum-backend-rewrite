from django.http import HttpResponse
from django.views.generic import View
from django.template import RequestContext, loader
from django.shortcuts import render

class app(View):
	def get(self, request, *args, **kwargs):
		template = loader.get_template('app.html')
		context = RequestContext(request, {"data": "", "render": ""})
		return HttpResponse(template.render(context))
