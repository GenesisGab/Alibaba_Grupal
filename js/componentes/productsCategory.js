import{panel}from "./panel.js";
import {products_category} from "../data/products_belong_category.js";

let bt_productCategory = document.querySelector('#bt_productCategory');

/****************************************************/
// export let cuadros = document.createElement("div");

export function crearProductCategory(){

    //VARIABLE EN DONDE VA A COLOCARSE LOS CUADRITOS
    let root = document.querySelector("#padre");

    //FUNCION ACTIVAR Y DESACTIVAR MENU


    products_category.forEach(function(user){
        console.log("Nombre: ", user.id);

        let cuadros = document.createElement("div");


        cuadros.innerHTML =
        
            '<ol class="lista">'+
                '<li>'+'<b>'+'Produt id: '+'</b>'+user.product_id+'</li>'+
                '<li>'+'<b>'+'Category id: '+'</b>'+user.category_id+'</li>'+
            '</ol>'+
            '<br>'+
            '<br>';

        let hijos = document.querySelector("#hijosUser");
        console.log(hijos);

        root.appendChild(cuadros);
    })


};

bt_productCategory.addEventListener('click',crearProductCategory);//<--Este



var activarse = document.getElementById("bt_productCategory");

//FUNCIÓN PARA ABRIR Y CERRAR LA VENTANA
export function ActivarDesactivar11() {    
        
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
activarse.addEventListener('click', ActivarDesactivar11);