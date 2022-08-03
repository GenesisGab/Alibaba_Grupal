import{panel}from "./panel.js";
import {orders_user} from "../data/order_paid_user.js";

let bt_orderUser = document.querySelector('#bt_orderUser');

/****************************************************/
// export let cuadros = document.createElement("div");

export function orderPlacedUser(){

    //VARIABLE EN DONDE VA A COLOCARSE LOS CUADRITOS
    let root = document.querySelector("#padre");

    //FUNCION ACTIVAR Y DESACTIVAR MENU
    orders_user.forEach(function(user){
        console.log("Nombre: ", user.id);

        let cuadros = document.createElement("div");

        cuadros.innerHTML =
            '<ol class="lista">'+
                '<li>'+'<b>'+'User id: '+'</b>'+user.user_id+'</li>'+
                '<li>'+'<b>'+'User order_id: '+'</b>'+ user.order_id+'</li>'+
            '</ol>'+
            '<br>'+
            '<br>';

        let hijos = document.querySelector("#hijosUser");
        console.log(hijos);

        root.appendChild(cuadros);
    })


};

bt_orderUser.addEventListener('click',orderPlacedUser);//<--Este
