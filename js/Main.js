/**********************
 * INICIO DE SESIÓN
 *********************/

/* Librería de los programas */
import {revisarusuario} from "./componentes/login.js"

/* CONEXION CON EL DISEÑO DEL PANEL */


/* CONEXION CON EL DISEÑO DEL MENU */


/* CONEXION CON EL DISEÑO DEL FOOTER */
<<<<<<< HEAD
import {footer} from "./componentes/footer.js";

=======
import {footer} from "./componentes/footer.js"
>>>>>>> af2235071a7e7954ed5e692402083108773eb4fe
function recuperar_datos(e) {
    e.preventDefault(); //<-- Evita que el formulario se recargue

    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;

    //Programa login
    revisarusuario(username,password);
}

// Acción del boton
var bt_entrar = document.querySelector("#login");//<-- Instancia del formulario
bt_entrar.addEventListener('submit',recuperar_datos); //<-- Evento

