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


/********CONEXION CON ARCHIVOS DE LA DATA*********/
import{crearCuadro} from "./componentes/user1.js";
import {crearCarts} from "./componentes/carts.js";
import {crearVendor} from "./componentes/vendor1.js";
import {crearOption} from "./componentes/option1.js";
import {crearProducts} from "./componentes/products.js";
import {crearProductCategory} from "./componentes/productsCategory.js";
import {crearProductOption} from "./componentes/productsHasOptions.js";
import {crearShoppingCart} from "./componentes/shoppingCart.js";
import {cartsHasProducts} from "./componentes/cartsHasProducts.js";
import {category1} from "./componentes/category1.js";
import {orderPaidCrediCard} from "./componentes/ordersPaidCreditCard.js";
import {orderPlacedUser} from "./componentes/orderPlacedUser.js";
import {mostrarOrder} from "./componentes/orders1.js";
import {mostrarHasProduct} from "./componentes/ordersHasproducts.js";
import {crearSoldVendor} from "./componentes/producSoldVendor.js";

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

