# Generated by Django 5.0 on 2023-12-13 15:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('adiestradores', '0005_alter_adiestrador_id_alter_adiestrador_mail_a_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='adiestrador',
            old_name='password_a',
            new_name='contraseña_a',
        ),
    ]
