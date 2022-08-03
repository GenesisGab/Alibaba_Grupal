import{panel}from "./panel.js";
import {products_options} from "../data/products_has_options.js";

let bt_productOption = document.querySelector('#bt_productOption');

/****************************************************/
// export let cuadros = document.createElement("div");

export function crearProductOption(){

    //VARIABLE EN DONDE VA A COLOCARSE LOS CUADRITOS
    let root = document.querySelector("#padre");

    //FUNCION ACTIVAR Y DESACTIVAR MENU


    products_options.forEach(function(user){
        console.log("Nombre: ", user.id);

        let cuadros = document.createElement("div");


        cuadros.innerHTML =

            '<ol class="lista">'+
                '<li>'+'<b>'+'Id: '+'</b>'+user.product_id+'</li>'+
                '<li>'+'<b>'+'Option id: '+'</b>'+user.option_id+'</li>'+
                '<li>'+'<b>'+'Quantity: '+'</b>'+user.quantity+'</li>'+
                '<li>'+'<b>'+'Price: '+'</b>'+user.price+'</li>'+
                '<li>'+'<b>'+'On sale: '+'</b>'+user.on_sale+'</li>'+
                '<li>'+'<b>'+'Specs: '+'</b>'+user.specs+'</li>'+
            '</ol>'+
            '<br>'+
            '<br>';

        let hijos = document.querySelector("#hijosUser");
        console.log(hijos);

        root.appendChild(cuadros);
    })


};

bt_productOption.addEventListener('click',crearProductOption);//<--Este
