from django.http import HttpResponse
from django.views.generic import View
from django.template import RequestContext, loader
from django.shortcuts import render
import json

class app(View):
	def get(self, request, *args, **kwargs):
		template = loader.get_template('app.html')
		with open('public/stats.json') as stats_file:    
			stats = json.load(stats_file)
		public_path = stats['publicPath']
		cache_hash = stats['hash']
		# switch to analysing stats.json later, there may be multiple files
		scripts = [public_path+'main.js'+'?'+cache_hash]
		stylesheets = [public_path+'main.css'+'?'+cache_hash]

		context = RequestContext(request, {
			"prerender": "",
			"stylesheets": stylesheets,
			"preload_data": "{}",
			"scripts": scripts,
			"content": stats['publicPath']
		})
		return HttpResponse(template.render(context))
