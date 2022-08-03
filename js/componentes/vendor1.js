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

        let cuadros1 = document.createElement("div");

        cuadros1.innerHTML =
      
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

        root.appendChild(cuadros1);
    })


};

bt_vendor.addEventListener('click',crearVendor);//<--Este
