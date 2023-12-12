"""
URL configuration for IACan project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from core import views as core_views
from adiestradores import views as adiestradores_views

urlpatterns = [
    path('', core_views.index, name="index"),
    path('inscripciones', core_views.inscripciones, name="inscripciones"),
    path('adiestradores', adiestradores_views.adiestradores, name="adiestradores"),
    path('contacto', core_views.contacto, name="contacto"),
    path('form1/', adiestradores_views.form1, name="form1"),
    path('form2', core_views.form2, name="form2"),
    path('login', core_views.login, name="login"),
    path('admin/', admin.site.urls),
]
