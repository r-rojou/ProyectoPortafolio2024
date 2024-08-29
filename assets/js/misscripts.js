function mostrarMensaje(){
    // limpiar los campos
    let elEmail = document.getElementById('emailContacto');
    elEmail.value = "";
    let elTelefono = document.getElementById("telefonoContacto");
    elTelefono.value = "";

    alert('Muchas gracias, será contactado pronto.');
}

function mostrarForm(){
    let formulario = document.getElementById("contenedorForm");
    if (formulario.style.display === "none"){
        formulario.style.display = "block";
    } else{
        formulario.style.display = "none";
    }
}