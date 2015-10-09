from django.utils.functional import SimpleLazyObject
from app.models import User

class AuthMiddleware(object):
	def process_request(self, request):
		assert hasattr(request, 'session'), (
			"AuthMiddleware unable to find session"
		)
		request.user = SimpleLazyObject(lambda: User.objects.get(email=request.session['user']))
