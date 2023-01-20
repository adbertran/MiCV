
document.getElementById('boton_enviar').addEventListener("click", function () {

    let nombre = document.getElementById('formulario_nombre').value;
    let correo = document.getElementById('formulario_email').value;
    let mensaje = document.getElementById('formulario_mensaje').value;

    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Informacion incompleta.\n Por favor complete toda la informacion. Muchas Gracias.");
    }
    else {
        alert("Muchas Gracias " + nombre + ".\n Lo antes posible me pondre en contacto para resolver su consulta.");
    }

    /* document.formulario_contacto.submit(); */
});