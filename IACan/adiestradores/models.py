from django.db import models

class Adiestrador(models.Model):
    id = models.AutoField(primary_key=True)
    usuario_a = models.CharField(max_length=30)
    password_a = models.CharField(max_length=10)
    nombre_a = models.CharField(max_length=100)
    apellido_a = models.CharField(max_length=100)
    descripcion_a = models.TextField(max_length=200)
    telefono_a = models.IntegerField()
    mail_a = models.CharField(blank= True, null=True, max_length=50)
    barrio1_a = models.CharField(max_length=30)
    barrio2_a = models.CharField(max_length=30) 
    barrio3_a = models.CharField(max_length=30)
    barrio4_a = models.CharField(blank= True, null=True, max_length=30)
    barrio5_a = models.CharField(blank= True, null=True, max_length=30)
    puntaje = models.IntegerField(blank= True, null=True)
    opinion1 = models.TextField(blank= True, null=True, max_length=150)
    opinion2 = models.TextField(blank= True, null=True, max_length=150)
    opinion3 = models.TextField(blank= True, null=True, max_length=150)
    
    def __str__(self)-> str:
        return (self.nombre_a + ' ' + self.apellido_a)
    
    class Meta:
        verbose_name = "adiestrador"
        verbose_name_plural = "adiestradores"
        