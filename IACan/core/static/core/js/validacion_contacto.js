document.addEventListener("DOMContentLoaded", function() {
    var formulario_cont = document.getElementById("contact");
    var mensajeError = document.getElementById("mensajeError");
    var mensajeExito = document.getElementById("mensajeExito");

    const expresion = /^[A-Za-z]{4,16}$/;
    const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})$/;
    const phone = /^[0-9]{10}$/;
    const texto = /^[ A-Za-z.]{15,500}$/;
        
    formulario_cont.addEventListener("submit", function(event) {
        event.preventDefault(); 

        var nombre = event.target.querySelector("#nombre").value;
        var apellido = event.target.querySelector("#apellido").value;
        var correo = event.target.querySelector("#mail").value;
        var telefono = event.target.querySelector("#phone").value;
        var msj = event.target.querySelector("#msjType").value;
      
        if (nombre === "" || apellido === "" || correo === "" || telefono === "" || msj === "") { 
            mostrarError("Debe rellenar todos los campos");
            return;
        } else if (!expresion.test(nombre)) {
            mostrarError("El nombre dado es incorrecto");
            return;
        } else if (!expresion.test(apellido)) {
            mostrarError("El apellido dado es incorrecto");
            return;
        } else if (!mailRegex.test(correo)) {
            mostrarError("El correo es inválido");
            return;
        } else if(!phone.test(telefono)) {
            mostrarError("El teléfono dado es incorrecto");
            return;
        } else if(!texto.test(msj)) {
            mostrarError("No utilice caracteres especiales");
            return;
        } else if(msj.length < 5) {
            mostrarError("El mensaje es muy corto");
            return;
        } else if(msj.length > 500) {
            mostrarError("El mensaje es muy largo");
            return;
        } else {
            formulario_cont.reset()
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
