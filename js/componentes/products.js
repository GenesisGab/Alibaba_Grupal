import{panel}from "./panel.js";
import {products} from "../data/products.js";

let bt_Products = document.querySelector('#bt_products');

/****************************************************/
// export let cuadros = document.createElement("div");

export function crearProducts(){

    //VARIABLE EN DONDE VA A COLOCARSE LOS CUADRITOS
    let root = document.querySelector("#padre");

    //FUNCION ACTIVAR Y DESACTIVAR MENU


    products.forEach(function(user){
        console.log("Nombre: ", user.id);

        let cuadros = document.createElement("div");

        cuadros.innerHTML =
            '<ol class="lista">'+
                '<li>'+'<b>'+'Product id: '+'</b>'+user.product_id+'</li>'+
                '<li>'+'<b>'+'Product_name: '+'</b>'+user.product_name+'</li>'+
                '<li>'+'<b>'+'Descriptions: '+'</b>'+user.descriptions+'</li>'+
            '</ol>'+
            '<br>'+
            '<br>';

        root.appendChild(cuadros);
    })


};

bt_Products.addEventListener('click',crearProducts);//<--Este
