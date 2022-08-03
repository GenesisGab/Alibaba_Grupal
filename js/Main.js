/**********************
 * INICIO DE SESIÓN
 *********************/

/* Librería de los programas */
import {revisarusuario} from "./componentes/login.js"

/* CONEXION CON EL DISEÑO DEL PANEL */


/* CONEXION CON EL DISEÑO DEL MENU */


/* CONEXION CON EL DISEÑO DEL FOOTER */
import {footer} from "./componentes/footer.js";

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

