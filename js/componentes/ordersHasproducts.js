import{panel}from "./panel.js";
import{order_products} from "../data/orders_has_products.js";

let bt_orderProduct = document.querySelector('#bt_orderProduct');

/****************************************************/
// export let cuadros = document.createElement("div");

export function mostrarHasProduct(){

    //VARIABLE EN DONDE VA A COLOCARSE LOS CUADRITOS
    let root = document.querySelector("#padre");

    //FUNCION ACTIVAR Y DESACTIVAR MENU
    order_products.forEach(function(user){
        console.log("Nombre: ", user.id);

        let cuadros = document.createElement("div");
     
        cuadros.innerHTML =
            '<ol class="lista">'+
                '<li>'+'<b>'+'Order id: '+'</b>'+user.order_id+'</li>'+
                '<li>'+'<b>'+'Product id: '+'</b>'+ user.product_id+'</li>'+
                '<li>'+'<b>'+'Option id: '+'</b>'+ user.option_id+'</li>'+
                '<li>'+'<b>'+'User quantity: '+'</b>'+ user.quantity+'</li>'+
            '</ol>'+
            '<br>'+
            '<br>';

        let hijos = document.querySelector("#hijosUser");
        console.log(hijos);

        root.appendChild(cuadros);
    })


};

bt_orderProduct.addEventListener('click',mostrarHasProduct);//<--Este
