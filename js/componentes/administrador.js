/* Elementos del dom */
//import {section_administrador, section_login} from './login.js';
import { section_administrador, section_login} from './login.js';
export function administrador(){
    
    alert('LAS CREDENCIALES INGRESADAS SON VALIDAS');

    console.log("administrador:",section_administrador);
    console.log("login:",section_login);


    section_administrador.classList.add("activar-block");
    section_login.classList.remove("activar-flex");
}