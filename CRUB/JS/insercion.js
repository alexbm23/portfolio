/******************************************************/
/**** SCRIPTS DE INSERCION.HTML*******************/
/**** Autor: Alejandro Barnestein Martos **************/
/**** Versión 2: Febrero 2024, insercion validada*/
/*******************************************************/


function validacion() {
    let correcto = true;

    // Validar DNI
    let dni = document.getElementById('DNI').value;
    if (dni.trim() === "" || !/^\d{8}[a-zA-Z]$/.test(dni)) {
        document.getElementById('DNIHelp').style.visibility = "visible";
        document.getElementById('DNI').style.borderColor = "red";
        correcto = false;
    } else {
        document.getElementById('DNIHelp').style.visibility = "hidden";
        document.getElementById('DNI').style.borderColor = "lightgray";
    }

    // Validar nombre
    let nombre = document.getElementById('name').value;
    if (nombre.trim() === "" || !/^[a-zA-Z]+$/.test(nombre)) {
        document.getElementById('nameHelp').style.visibility = "visible";
        document.getElementById('name').style.borderColor = "red";
        correcto = false;
    } else {
        document.getElementById('nameHelp').style.visibility = "hidden";
        document.getElementById('name').style.borderColor = "lightgray";
    }

    // Validar apellidos
    let apellidos = document.getElementById('apellidos').value;
    if (apellidos.trim() === "" || !/^[a-zA-Z ]+$/.test(apellidos)) {
        document.getElementById('apellidosHelp').style.visibility = "visible";
        document.getElementById('apellidos').style.borderColor = "red";
        correcto = false;
    } else {
        document.getElementById('apellidosHelp').style.visibility = "hidden";
        document.getElementById('apellidos').style.borderColor = "lightgray";
    }

    // Validar correo electrónico
    let email = document.getElementById('pass').value;
    if (email.trim() === "" || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        document.getElementById('passHelp').style.visibility = "visible";
        document.getElementById('pass').style.borderColor = "red";
        correcto = false;
    } else {
        document.getElementById('passHelp').style.visibility = "hidden";
        document.getElementById('pass').style.borderColor = "lightgray";
    }

    // Validar teléfono
    let telefono = document.getElementById('tlf').value;
    if (telefono.trim() === "" || !/^\d{9}$/.test(telefono)) {
        document.getElementById('tlfHelp').style.visibility = "visible";
        document.getElementById('tlf').style.borderColor = "red";
        correcto = false;
    } else {
        document.getElementById('tlfHelp').style.visibility = "hidden";
        document.getElementById('tlf').style.borderColor = "lightgray";
    }

    // Validar provincia
    let provincia = document.getElementById('provincia').value;
    if (provincia === "0") {
        document.getElementById('provinciaHelp').style.visibility = "visible";
        document.getElementById('provincia').style.borderColor = "red";
        correcto = false;
    } else {
        document.getElementById('provinciaHelp').style.visibility = "hidden";
        document.getElementById('provincia').style.borderColor = "lightgray";
    }

    // Validar dirección
    let direccion = document.getElementById('Dir').value;
    if (direccion.trim() === "" || direccion.length < 8 || direccion.length > 30) {
        document.getElementById('DirHelp').style.visibility = "visible";
        document.getElementById('Dir').style.borderColor = "red";
        correcto = false;
    } else {
        document.getElementById('DirHelp').style.visibility = "hidden";
        document.getElementById('Dir').style.borderColor = "lightgray";
    }

    // Validar género
    let generoSeleccionado = false;
    let opcionesGenero = document.getElementsByName('opcion');
    for (let i = 0; i < opcionesGenero.length; i++) {
        if (opcionesGenero[i].checked) {
            generoSeleccionado = true;
            break;
        }
    }
    if (!generoSeleccionado) {
        alert("Por favor, selecciona tu género");
        correcto = false;
    }


    let mayoriaEdadCheckbox = document.getElementById('mayoriaEdad');
    if (!mayoriaEdadCheckbox.checked) {
    document.getElementById('mayoriaEdadHelp').style.visibility = "visible";
    correcto = false;
    } else {
    document.getElementById('mayoriaEdadHelp').style.visibility = "hidden";
    }

    return correcto;
}

function resetear(id) {
    document.getElementById(id + 'Help').style.visibility = "hidden";
    document.getElementById(id).style.borderColor = "lightgray";
}