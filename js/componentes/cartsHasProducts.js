import{panel}from "./panel.js";
import {carts} from "../data/carts_has_products.js";



let bt_cartsProduct = document.querySelector('#bt_cartsProduct');

/****************************************************/
// export let cuadros = document.createElement("div");

export function cartsHasProducts(){

    //VARIABLE EN DONDE VA A COLOCARSE LOS CUADRITOS
    let root = document.querySelector("#padre");

    //FUNCION ACTIVAR Y DESACTIVAR MENU
    carts.forEach(function(user){
        console.log("Nombre: ", user.id);

        let cuadros = document.createElement("div");

        cuadros.innerHTML =
        
            '<ol class="lista">'+
                '<li>'+'<b>'+'Shopping cart id: '+'</b>'+user.shopping_cart_id+'</li>'+
                '<li>'+'<b>'+'Product id: '+'</b>'+ user.product_id+'</li>'+
                '<li>'+'<b>'+'Option id: '+'</b>'+ user.option_id+'</li>'+
                '<li>'+'<b>'+'Quantity: '+'</b>'+ user.quantity+'</li>'+
            '</ol>'+
            '<br>'+
            '<br>';

        let hijos = document.querySelector("#hijosUser");
        console.log(hijos);

        root.appendChild(cuadros);
    })


};

bt_cartsProduct.addEventListener('click',cartsHasProducts);//<--Este
