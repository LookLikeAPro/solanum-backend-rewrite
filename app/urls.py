from django.conf.urls import include, url
from django.conf import settings
from django.conf.urls.static import static
from .apis import *
from .views import *

urlpatterns = [
	url(r'^api/auth/login', auth.login.as_view()),
	url(r'^api/auth/logout', auth.logout.as_view()),
	url(r'^api/auth/signup', auth.signup.as_view()),
	url(r'^api/user/current', user.current.as_view()),
	url(r'^api/user/by-id/(?P<id>\w{0,20})', user.byID.as_view()),
	url(r'^api/transaction/by-id/(?P<id>\w{0,20})', transaction.byID.as_view()),
	url(r'^/?', app.as_view())
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
