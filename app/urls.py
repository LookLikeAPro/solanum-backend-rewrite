from django.conf.urls import include, url
# import app.apis as apis
import apis

urlpatterns = [
	# url(r'^admin/', include(admin.site.urls)),
	# url(r'^api/', apis.Vendor.as_view()),
	url(r'^api/?', apis.vendor.as_view()),
]
