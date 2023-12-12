document.addEventListener("DOMContentLoaded", function() {
    var formulario_alumnos = document.getElementById("alumnos_adiest");
    var mensajeError = document.getElementById("mensajeError");
    var mensajeExito = document.getElementById("mensajeExito");

    const expresion = /^[A-Za-z]{4,16}$/;
    const expresion2 = /^[ A-Za-z]{4,16}$/;
    const number  = /^[0-9]{2}$/;
    const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})$/;
    const phone = /^[0-9]{10}$/;
    const user = /^[a-z0-9_-]{5,16}$/;
    const passwd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    
formulario_alumnos.addEventListener("submit", function(event) {
    event.preventDefault(); 

    var nombre = event.target.querySelector("#nombre_u").value;
    var apellido = event.target.querySelector("#apellido_u").value;
    var edad = event.target.querySelector("#age_u").value;
    var ciudad = event.target.querySelector("#ciudad_u").value;
    var correo = event.target.querySelector("#mail_u").value;
    var telefono = event.target.querySelector("#telefono_u").value;
    var usuario = event.target.querySelector("#usuario_u").value;
    var password = event.target.querySelector("#contraseña_u").value;
    var password2 = event.target.querySelector("#contraseña2_u").value;
      
    if (nombre === "" || apellido === "" || edad === "" || ciudad === "" || correo === "" || telefono === "") { 
        mostrarError("Debe rellenar todos los campos");
        return;
    } else if (!expresion.test(nombre)) {
        mostrarError("El nombre dado es incorrecto");
        return;
    } else if (!expresion.test(apellido)) {
        mostrarError("El apellido dado es incorrecto");
        return;
    } else if(!number.test(edad)) {
        mostrarError("Debe ingresar una edad válida");
        return;
    } else if(edad < 18) {
        mostrarError("Debe ser mayor de 18 años");
        return;
    } else if(!document.querySelector('input[name="genero_u"]:checked')) {
        mostrarError("No ha seleccionado el género");
        return;    
    } else if (!expresion2.test(ciudad)) {
        mostrarError("La ciudad dada es incorrecta");
        return;
    } else if (!mailRegex.test(correo)) {
        mostrarError("El correo es inválido");
        return;
    } else if(!phone.test(telefono)) {
        mostrarError("El teléfono dado es incorrecto");
        return;
    } else if(!user.test(usuario)) {
        mostrarError("El usuario dado es incorrecto");
        return;
    } else if(!passwd.test(password)) {
        mostrarError("La contraseña debe tener al menos 7 caracteres, 1 número y 1 caracter especial");
        return;
    } else if(password != password2) {
        mostrarError("Las contraseñas no coinciden")
        return;
    } else {
        formulario_alumnos.reset();
        mostrarExito("Gracias! Su formulario fue enviado con éxito");
        document.getElementById("mensajeError").style.display = "none";
        document.getElementById("mensajeExito").style.display = "block";
        setTimeout(() => {
            document.getElementById("mensajeError").remove("mensajeError");
            document.getElementById("mensajeExito").remove("mensajeExito");
        }, 10000);
    }
});


function mostrarExito(mensaje) {
    mensajeExito.textContent = mensaje;
    mensajeExito.style.display = "block";
    }

function mostrarError(mensaje) {
    mensajeError.textContent = mensaje;
    mensajeError.style.display = "block";
    }
});


