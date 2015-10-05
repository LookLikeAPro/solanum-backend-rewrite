from django.conf.urls import include, url
from django.conf import settings
from django.conf.urls.static import static
import apis

urlpatterns = [
	# url(r'^admin/', include(admin.site.urls)),
	# url(r'^api/', apis.Vendor.as_view()),
	url(r'^api/?', apis.vendor.as_view()),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
