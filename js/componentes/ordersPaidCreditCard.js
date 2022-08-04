import{panel}from "./panel.js";
import {orders_creditcard} from "../data/orders_paid_creditcard.js";

let bt_orderCredit = document.querySelector('#bt_orderCredit');

/****************************************************/
// export let cuadros = document.createElement("div");

export function orderPaidCrediCard(){

    //VARIABLE EN DONDE VA A COLOCARSE LOS CUADRITOS
    let root = document.querySelector("#padre");

    //FUNCION ACTIVAR Y DESACTIVAR MENU


    orders_creditcard.forEach(function(user){
        console.log("Nombre: ", user.id);

        let cuadros = document.createElement("div");


        cuadros.innerHTML =
 
            '<ol class="lista">'+
                '<li>'+'<b>'+'Credit card number: '+'</b>'+user.credit_card_number+'</li>'+
                '<li>'+'<b>'+'Order id: '+'</b>'+user.order_id+'</li>'+
            '</ol>'+
            '<br>'+
            '<br>';

        let hijos = document.querySelector("#hijosUser");
        console.log(hijos);

        root.appendChild(cuadros);
    })


};

bt_orderCredit.addEventListener('click',orderPaidCrediCard);//<--Este


var activarse = document.getElementById("bt_orderCredit");

//FUNCIÓN PARA ABRIR Y CERRAR LA VENTANA
export function ActivarDesactivar8() {    
        
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
activarse.addEventListener('click', ActivarDesactivar8);