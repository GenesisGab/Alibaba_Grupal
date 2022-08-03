import{panel}from "./panel.js";
import {shoppingCart} from "../data/shoppingcart.js";

let bt_shoppingcart = document.querySelector('#bt_shoppingcart');

/****************************************************/
// export let cuadros = document.createElement("div");

export function crearShoppingCart(){

    //VARIABLE EN DONDE VA A COLOCARSE LOS CUADRITOS
    let root = document.querySelector("#padre");

    //FUNCION ACTIVAR Y DESACTIVAR MENU


    shoppingCart.forEach(function(user){
        console.log("Nombre: ", user.id);

        let cuadros = document.createElement("div");

        cuadros.innerHTML =

            '<ol class="lista">'+
                '<li>'+'<b>'+'Shopping cart id: '+'</b>'+user.shopping_cart_id+'</li>'+
                '<li>'+'<b>'+'Status: '+'</b>'+ user.status+'</li>'+
            '</ol>'+
            '<br>'+
            '<br>';

        let hijos = document.querySelector("#hijosUser");
        console.log(hijos);

        root.appendChild(cuadros);
    })


};

bt_shoppingcart.addEventListener('click',crearShoppingCart);//<--Este
