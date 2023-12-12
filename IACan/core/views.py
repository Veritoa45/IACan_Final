from django.shortcuts import render

def index(request):
    return render(request, "core/index.html")

def inscripciones(request):
    return render(request, "core/inscripciones.html")

def contacto(request):
    return render(request, "core/contacto.html")

def form2(request):
    return render(request, "core/form2.html")

def login(request):
    return render(request, "core/login.html")