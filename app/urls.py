from django.conf.urls import include, url
from django.conf import settings
from django.conf.urls.static import static
from .apis import *
import views

urlpatterns = [
	url(r'^api/auth/login', auth.login.as_view()),
	url(r'^api/auth/logout', auth.logout.as_view()),
	# url(r'^api/?', auth.as_view()),
	url(r'^/?', views.app.as_view())
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
