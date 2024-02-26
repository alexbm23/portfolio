/******************************************************/
/**** SCRIPTS DE LOGIN.HTML*******************/
/**** Autor: Alejandro Barnestein Martos **************/
/**** Versión 2: Febrero 2024, login validado*/
/*******************************************************/

function validacion() {
    let correcto = true;

    // Obtener la pestaña activa (iniciar sesión o crear cuenta)
    let tabActive = document.querySelector('input[name="tab"]:checked').id;

    if (tabActive === 'tab-1') {
        // Validar campos para iniciar sesión
        // Por ejemplo, verificar que los campos de usuario y contraseña no estén vacíos
        let user = document.getElementById('user').value;
        let pass = document.getElementById('pass').value;

        if (user.trim() === "" || user.length < 8 || user.length > 12) {
            document.getElementById('userHelp').style.visibility = "visible";
            document.getElementById('user').style.borderColor = "red";
            correcto = false;
        } else {
            document.getElementById('userHelp').style.visibility = "hidden";
            document.getElementById('user').style.borderColor = "lightgray";
        }

        if (pass.trim() === "" || pass.length < 8 || pass.length > 15 || !/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])(?=.{8,})/.test(pass)) {
            document.getElementById('passHelp').style.visibility = "visible";
            document.getElementById('pass').style.borderColor = "red";
            correcto = false;
        } else {
            document.getElementById('passHelp').style.visibility = "hidden";
            document.getElementById('pass').style.borderColor = "lightgray";
        }

    } else if (tabActive === 'tab-2') {
        // Validar campos para crear cuenta
        // Por ejemplo, verificar que los campos de usuario, contraseña, etc., cumplan con ciertos requisitos
        let user2 = document.getElementById('user2').value;
        let pass2 = document.getElementById('pass2').value;
        let passRepeat = document.getElementById('passRepeat').value;
        let email = document.getElementById('email').value;

        if (user2.trim() === "" || user2.length < 8 || user2.length > 12) {
            document.getElementById('user2Help').style.visibility = "visible";
            document.getElementById('user2').style.borderColor = "red";
            correcto = false;
        } else {
            document.getElementById('user2Help').style.visibility = "hidden";
            document.getElementById('user2').style.borderColor = "lightgray";
        }

        if (pass2.trim() === "" || pass2.length < 8 || pass2.length > 15 || !/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])(?=.{8,})/.test(pass2)) {
            document.getElementById('pass2Help').style.visibility = "visible";
            document.getElementById('pass2').style.borderColor = "red";
            correcto = false;
        } else {
            document.getElementById('pass2Help').style.visibility = "hidden";
            document.getElementById('pass2').style.borderColor = "lightgray";
        }

        if (passRepeat.trim() === "" || passRepeat !== pass2) {
            document.getElementById('passRepeatHelp').style.visibility = "visible";
            document.getElementById('passRepeat').style.borderColor = "red";
            correcto = false;
        } else {
            document.getElementById('passRepeatHelp').style.visibility = "hidden";
            document.getElementById('passRepeat').style.borderColor = "lightgray";
        }

        if (email.trim() === "" || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            document.getElementById('emailHelp').style.visibility = "visible";
            document.getElementById('email').style.borderColor = "red";
            correcto = false;
        } else {
            document.getElementById('emailHelp').style.visibility = "hidden";
            document.getElementById('email').style.borderColor = "lightgray";
        }
    }

    return correcto;
}

function resetear(id) {
    document.getElementById(id + 'Help').style.visibility = "hidden";
    document.getElementById(id).style.borderColor = "lightgray";
}
