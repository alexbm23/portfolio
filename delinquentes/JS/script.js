/*****************************************************************
 *    Funciones de validación para el formulario de contacto
 *    Hoja de Scripts para index.html
 *    Autor: Alejandro Barnestein Martos
 *    Versión 1.0
 *    Febrero 2024
 ******************************************************************/

function validacion() {
    let correcto = true; 
    let nombre = document.getElementById('nombre').value; // getter
    let email = document.getElementById('email').value;
 
 
    if (nombre == "" || /^\s+$/.test(nombre) || /[0-9]/.test(nombre) || !/[a-zñ]{2,}/.test(nombre)) {
       document.getElementById('nombreHelp').style.visibility = "visible";
       document.getElementById('nombre').style.borderColor = "red";
       correcto = false;
    }
 
 
 
    if (email == "" || ! /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,4})$/.test(email)
    ) {
       document.getElementById('emailHelp').style.visibility = "visible";
       document.getElementById('email').style.borderColor = "red";

       correcto = false;
    }




 
    return correcto;
    
 
 
 }
 
 
 
 
 function resetear(id) {
 
 
 
    document.getElementById(id + 'Help').style.visibility = "hidden";
    document.getElementById(id).style.borderColor = "lightgray";
 }