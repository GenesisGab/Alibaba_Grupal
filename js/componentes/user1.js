import{panel}from "./panel.js";
import { user_ob } from "../data/user.js";

let bt_ver = document.querySelector('#bt_user');

/****************************************************/
// export let cuadros = document.createElement("div");

export function crearCuadro(){

    //VARIABLE EN DONDE VA A COLOCARSE LOS CUADRITOS
    let root = document.querySelector("#padre");

    //FUNCION ACTIVAR Y DESACTIVAR MENU


    user_ob.forEach(function(user){
        console.log("Nombre: ", user.id);

        let cuadros = document.createElement("div");


        cuadros.innerHTML =

            '<ol class="lista" id="1">'+
                '<li>'+'<b>'+'Id: '+'</b>'+user.id+'</li>'+
                '<li>'+'<b>'+'Name: '+'</b>'+user.name+'</li>'+
                '<li>'+'<b>'+'Nikname: '+'</b>'+user.nikname+'</li>'+
                '<li>'+'<b>'+'Email: '+'</b>'+user.email+'</li>'+
                '<li>'+'<b>'+'Adress: '+'</b>'+user.adress+'</li>'+
                '<li>'+'<b>'+'Phone: '+'</b>'+user.phone+'</li>'+
            '</ol>'+
            '<br>'+
            '<br>';

        let hijos = document.querySelector("#hijosUser");
        console.log(hijos);

        root.appendChild(cuadros);
    })


};

bt_ver.addEventListener('click',crearCuadro);//<--Este
