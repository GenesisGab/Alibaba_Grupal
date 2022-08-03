import{panel}from "./panel.js";
import {option} from "../data/option.js";

let bt_Option = document.querySelector('#bt_Option');

/****************************************************/
// export let cuadros = document.createElement("div");

export function crearOption(){

    //VARIABLE EN DONDE VA A COLOCARSE LOS CUADRITOS
    let root = document.querySelector("#padre");

    //FUNCION ACTIVAR Y DESACTIVAR MENU


    option.forEach(function(user){
        console.log("Nombre: ", user.id);

        let cuadros = document.createElement("div");


        cuadros.innerHTML =
            '<ol class="lista">'+
                '<li>'+'<b>'+'User option id: '+'</b>'+user.option_id+'</li>'+
                '<li>'+'<b>'+'Option name: '+'</b>'+user.option_name+'</li>'+
            '</ol>'+
            '<br>'+
            '<br>';

        root.appendChild(cuadros);
    })


};

bt_Option.addEventListener('click',crearOption);//<--Este
