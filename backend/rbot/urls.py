from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import path,include
from rest_framework import routers
from . import views
from . import Aiviews
from django.conf import settings
from django.conf.urls.static import static

# router = routers.DefaultRouter()
# router.register(r'user', views.UserViewSet)

urlpatterns = [
    path('',views.index),
    path('user/',views.UserViewSet.as_view()),
    path('login/', views.login),
    path('callback/', views.callback),
    path('conversation/', Aiviews.AiViewSet.as_view()),
    path('authenticate/', views.authenticate),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
