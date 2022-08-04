import{panel}from "./panel.js";
import {category} from "../data/category.js";

let bt_category = document.querySelector('#bt_category');

/****************************************************/
// export let cuadros = document.createElement("div");

export function category1(){

    //VARIABLE EN DONDE VA A COLOCARSE LOS CUADRITOS
    let root = document.querySelector("#padre");

    //FUNCION ACTIVAR Y DESACTIVAR MENU
    category.forEach(function(user){
        console.log("Nombre: ", user.id);

        let cuadros = document.createElement("div");

        cuadros.innerHTML =
       
            '<ol class="lista">'+
                '<li>'+'<b>'+'Category id: '+'</b>'+user.category_id+'</li>'+
                '<li>'+'<b>'+'Category name: '+'</b>'+ user.category_name+'</li>'+
            '</ol>'+
            '<br>'+
            '<br>';

        let hijos = document.querySelector("#hijosUser");
        console.log(hijos);

        root.appendChild(cuadros);
    })


};

bt_category.addEventListener('click',category1);//<--Este




var activarse = document.getElementById("bt_category");

//FUNCIÓN PARA ABRIR Y CERRAR LA VENTANA
export function ActivarDesactivar4() {    
        
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
activarse.addEventListener('click', ActivarDesactivar4);