import {panel} from "./panel.js";
import {product_vendor} from "../data/products_sold_vendor.js";

let bt_productVendor = document.querySelector('#bt_productVendor');

/****************************************************/

export function crearSoldVendor(){

    console.log("HOLAA");
    //VARIABLE EN DONDE VA A COLOCARSE LOS CUADRITOS
    let root = document.querySelector("#padre");

    product_vendor.forEach(function(user1){
        console.log("Nombre: ", user1.user_id);

        let cuadros1 = document.createElement("div");

        cuadros1.innerHTML =

            '<ol class="lista">'+
                '<li>'+'<b>'+'Vendor id: '+'</b>'+user1.vendor_id+'</li>'+
                '<li>'+'<b>'+'Product id: '+'</b>'+user1.product_id+'</li>'+
            '</ol>'+
            '<br>'+
            '<br>';

         let hijos = document.querySelector("#hijosUser");
         console.log(hijos);

        root.appendChild(cuadros1);
    })


};

bt_productVendor.addEventListener('click',crearSoldVendor);//<--Este




var activarse = document.getElementById("bt_productVendor");

//FUNCIÓN PARA ABRIR Y CERRAR LA VENTANA
export function ActivarDesactivar13() {    
        
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
activarse.addEventListener('click', ActivarDesactivar13);