/**********************
 * INICIO DE SESIÓN
 *********************/

/* Librería de los programas */
import {revisarusuario} from "./componentes/login.js"

/* CONEXION CON EL DISEÑO DEL PANEL */
import {panel}from "./componentes/panel.js"//<-- Diseño del panel de informacion

/* CONEXION CON EL DISEÑO DEL MENU */
import{header} from "./componentes/menu.js"


/* CONEXION CON EL DISEÑO DEL FOOTER */
import {footer} from "./componentes/footer.js";

/********CONEXION CON ARCHIVOS DE LA DATA*********/
import{ActivarDesactivar} from "./componentes/user1.js";
import {ActivarDesactivar2} from "./componentes/carts.js";
import {ActivarDesactivar3} from "./componentes/vendor1.js";
import {ActivarDesactivar4} from "./componentes/category1.js";
import {ActivarDesactivar5} from "./componentes/option1.js";
import {ActivarDesactivar6} from "./componentes/orders1.js";
import {ActivarDesactivar7} from "./componentes/ordersHasproducts.js";
import {ActivarDesactivar8} from "./componentes/ordersPaidCreditCard.js";
import {ActivarDesactivar9} from "./componentes/orderPlacedUser.js";
import {ActivarDesactivar10} from "./componentes/products.js";
import {ActivarDesactivar11} from "./componentes/productsCategory.js";
import {ActivarDesactivar12} from "./componentes/productsHasOptions.js";
import {ActivarDesactivar13} from "./componentes/producSoldVendor.js";
import {ActivarDesactivar14} from "./componentes/cartsHasProducts.js";
import {ActivarDesactivar15} from "./componentes/shoppingCart.js";


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

