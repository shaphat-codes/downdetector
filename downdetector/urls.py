
from django.contrib import admin
from django.urls import path
from detector.views import *
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('detect/', Detect, name= "detect"),
    path('check/', Check, name= "check"),
]
