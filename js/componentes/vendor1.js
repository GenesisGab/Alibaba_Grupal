import { vendor } from "../data/vendor.js";
import {panel} from "./panel.js";
let bt_vendor = document.querySelector('#bt_vendor');

/****************************************************/


export function crearVendor(){

    console.log("HOLAA");
    //VARIABLE EN DONDE VA A COLOCARSE LOS CUADRITOS
    let root = document.querySelector("#padre");

    vendor.forEach(function(user1){
        console.log("Nombre: ", user1.user_id);

        let cuadros = document.createElement("div");

        cuadros.innerHTML =
      
            '<ol class="lista">'+
                '<li>'+'<b>'+'Vendor id: '+'</b>'+user1.vendor_id+'</li>'+
                '<li>'+'<b>'+'Vendor name: '+'</b>'+user1.vendor_name+'</li>'+
                '<li>'+'<b>'+'Vendor phone: '+'</b>'+user1.vendor_phone+'</li>'+
                '<li>'+'<b>'+'Vendor email: '+'</b>'+user1.vender_email+'</li>'+
            '</ol>'+
            '<br>'+
            '<br>';

        // let hijos = document.querySelector("#hijosUser");
        // console.log(hijos);

        root.appendChild(cuadros);
    })


};

bt_vendor.addEventListener('click',crearVendor);//<--Este


var activarse = document.getElementById("bt_vendor");

//FUNCIÓN PARA ABRIR Y CERRAR LA VENTANA
export function ActivarDesactivar3() {    
        
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
activarse.addEventListener('click', ActivarDesactivar3);