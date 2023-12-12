from django.shortcuts import render, redirect
from .models import Adiestrador
from .forms import FormularioAdiestrador
from django.db.models import Q
from django.contrib import messages

# Create your views here.
def form1(request):
    formularioAdiestrador = FormularioAdiestrador()
    return render(request, "adiestradores/form1.html", {'formularioAdiestrador': formularioAdiestrador})

def procesar_formAd(request):
    if request.method == 'POST':
        formularioAdiestrador = FormularioAdiestrador(request.POST)
        if formularioAdiestrador.is_valid():
            formularioAdiestrador.save()
            messages.success(request, 'El usuario se ha registrado con éxito.')
            print("Datos guardados exitosamente")  # Agregar un mensaje de confirmación en la consola
            return redirect('form1')
        else:
            print(formularioAdiestrador.errors)
            print("El formulario no es válido, no se guardaron los datos")  # Agregar un mensaje de error en la consola
    else:
        formularioAdiestrador = FormularioAdiestrador()
    return render(request, "adiestradores/form1.html", {'formularioAdiestrador': formularioAdiestrador})

def adiestradores(request):
    adiestradores = Adiestrador.objects.all()
    return render(request, "adiestradores/adiestradores.html", {'adiestradores': adiestradores})

def search_view(request):
    query = request.GET.get('q')
    adiestradores = Adiestrador.objects.all()

    if query:
        adiestradores = adiestradores.filter(
            Q(barrio1_a__icontains=query) |
            Q(barrio2_a__icontains=query) |
            Q(barrio3_a__icontains=query) |
            Q(barrio4_a__icontains=query) |
            Q(barrio5_a__icontains=query) 
        )
        print("Adiestradores filtrados:", adiestradores)  # Impresión para verificar los adiestradores filtrados
        
    return render(request, 'adiestradores/adiestradores.html', {'adiestradores': adiestradores})