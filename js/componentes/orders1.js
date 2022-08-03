import{panel}from "./panel.js";
import {orden} from "../data/order.js";

let bt_orders = document.querySelector('#bt_orders');

/****************************************************/
// export let cuadros = document.createElement("div");

export function mostrarOrder(){

    //VARIABLE EN DONDE VA A COLOCARSE LOS CUADRITOS
    let root = document.querySelector("#padre");

    //FUNCION ACTIVAR Y DESACTIVAR MENU
    orden.forEach(function(user){

        let cuadros = document.createElement("div");

            '<ol class="lista">'+
                '<li>'+'<b>'+'Order id: '+'</b>'+user.order_id+'</li>'+
                '<li>'+'<b>'+'Total item: '+'</b>'+ user.total_item+'</li>'+
                '<li>'+'<b>'+'Shipping fee: '+'</b>'+ user.shipping_fee+'</li>'+
                '<li>'+'<b>'+'User tax: '+'</b>'+ user.tax+'</li>'+
                '<li>'+'<b>'+'Total cost: '+'</b>'+ user.total_cost+'</li>'+
                '<li>'+'<b>'+'Order date: '+'</b>'+ user.order_date+'</li>'+
                '<li>'+'<b>'+'Delivery status: '+'</b>'+ user.delivery_status+'</li>'+
            '</ol>'+
            '<br>'+
            '<br>';

        let hijos = document.querySelector("#hijosUser");
        console.log(hijos);

        root.appendChild(cuadros);
    })

};

bt_orders.addEventListener('click',mostrarOrder);//<--Este
