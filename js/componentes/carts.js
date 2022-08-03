import {userCreditCard} from "../data/user_has_creditcard.js";
import {panel} from "./panel.js";
let bt_userCredit2 = document.querySelector('#bt_userCredit');

/****************************************************/


export function crearCarts(){

    console.log("HOLAA");
    //VARIABLE EN DONDE VA A COLOCARSE LOS CUADRITOS
    let root = document.querySelector("#padre");

    userCreditCard.forEach(function(user1){
        console.log("Nombre: ", user1.user_id);

        let cuadros1 = document.createElement("div");

        cuadros1.innerHTML =

            '<ol class="lista" id="2">'+
                '<li>'+'<b>'+'Id: '+'</b>'+user1.user_id+'</li>'+
                '<li>'+'<b>'+'Credit Card Number: '+'</b>'+user1.credit_card_number+'</li>'+
            '</ol>'+
            '<br>'+
            '<br>';

        // let hijos = document.querySelector("#hijosUser");
        // console.log(hijos);

        root.appendChild(cuadros1);
    })


};

bt_userCredit2.addEventListener('click',crearCarts);//<--Este