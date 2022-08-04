import{panel}from "./panel.js";
import {orders} from "../data/order.js";

let bt_orders = document.querySelector('#bt_orders');

/****************************************************/
// export let cuadros = document.createElement("div");

export function desplegarOrder(){

    //VARIABLE EN DONDE VA A COLOCARSE LOS CUADRITOS
    let root = document.querySelector("#padre");

    //FUNCION ACTIVAR Y DESACTIVAR MENU
    orders.forEach(function(user){
        console.log("Nombre: ", user.id);

        let cuadros = document.createElement("div");

        cuadros.innerHTML =
            '<ol class="lista">'+
                '<li>'+'<b>'+'Order id: '+'</b>'+user.order_id+'</li>'+
                '<li>'+'<b>'+'Total item: '+'</b>'+ user.total_item+'</li>'+
                '<li>'+'<b>'+'Shipping fee: '+'</b>'+ user.shipping_fee+'</li>'+
                '<li>'+'<b>'+'Tax: '+'</b>'+ user.tax+'</li>'+
                '<li>'+'<b>'+'Total cost: '+'</b>'+ user.total_cost+'</li>'+
                '<li>'+'<b>'+'Order date: '+'</b>'+ user.order_date+'</li>'+
                '<li>'+'<b>'+'Delivery date: '+'</b>'+ user.delivery_date+'</li>'+
                '<li>'+'<b>'+'Ship name: '+'</b>'+ user.ship_name+'</li>'+
                '<li>'+'<b>'+'Ship adress: '+'</b>'+ user.ship_adress+'</li>'+
                '<li>'+'<b>'+'Tracking number: '+'</b>'+ user.tracking_number+'</li>'+
                '<li>'+'<b>'+'Delivery status: '+'</b>'+ user.delivery_status+'</li>'+
            '</ol>'+
            '<br>'+
            '<br>';

        let hijos = document.querySelector("#hijosUser");
        console.log(hijos);

        root.appendChild(cuadros);
    })


};

bt_orders.addEventListener('click',desplegarOrder);//<--Este



var activarse = document.getElementById("bt_orders");

//FUNCIÓN PARA ABRIR Y CERRAR LA VENTANA
export function ActivarDesactivar6() {    
        
    var explorer = document.getElementById("padre");
    
    console.log("valor x",explorer);

    //Activa y desactiva la ventana
    if (explorer.style.display === "none") {
        explorer.style.display = "block";
        
    } else {
        explorer.style.display = "none";
        document.getElementById("padre").innerHTML='';
    }

}

/* EVENTO */
activarse.addEventListener('click', ActivarDesactivar6);