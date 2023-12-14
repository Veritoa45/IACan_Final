from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Adiestrador
from .forms import FormularioAdiestrador
from django.db.models import Q
from django.http import HttpResponse

# Create your views here.
def form1(request):
    if request.method == 'POST':
        form = FormularioAdiestrador(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'El usuario se ha registrado con éxito')
            return redirect('form1')
    else: 
        form = FormularioAdiestrador()
    return render(request, 'adiestradores/form1.html', {'form': form})
        
def adiestradores(request):

    barrio_filter = request.GET.get('barrio', None)
    adiestradores = Adiestrador.objects.all()
    if barrio_filter:
        adiestradores = adiestradores.filter(Q(barrio1_a=barrio_filter) | Q(barrio2_a=barrio_filter) | Q(barrio3_a=barrio_filter) | Q(barrio4_a=barrio_filter)| Q(barrio5_a=barrio_filter))
    context = {'adiestradores': adiestradores}
    return render(request, 'adiestradores/adiestradores.html', context)

