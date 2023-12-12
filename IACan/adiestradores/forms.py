from django import forms
from .models import Adiestrador

class FormularioAdiestrador(forms.ModelForm):
    class Meta:
        model = Adiestrador
        fields = ['usuario_a', 'password_a', 'nombre_a', 'apellido_a', 'descripcion_a', 'telefono_a','mail_a', 'barrio1_a', 'barrio2_a', 'barrio3_a', 'barrio4_a', 'barrio5_a']
        labels = {
            'usuario_a': 'Usuario',
            'password_a': 'Contraseña',
            'nombre_a': 'Nombre',
            'apellido_a' : 'Apellido',
            'descripcion_a' : 'Descripción',
            'telefono_a' : 'Teléfono',
            'mail_a' : 'Correo Electrónico',
            'barrio1_a' : 'Barrio 1',
            'barrio2_a' : 'Barrio 2',
            'barrio3_a' : 'Barrio 3',
            'barrio4_a' : 'Barrio 4',
            'barrio5_a' : 'Barrio 5',
        }
        widgets = {
            'password_a': forms.PasswordInput(),  # Utilizar PasswordInput para ocultar la contraseña
        }
        

