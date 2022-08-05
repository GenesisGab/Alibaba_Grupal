/* Elementos del dom */
//import {section_administrador, section_login} from './login.js';
import { section_administrador, section_login} from './login.js';

import { datosUsuario, panel } from './panel.js';

export let usuario1;
export let password1;


export function administrador(usuario,password){

    console.log("administrador:",section_administrador);
    console.log("login:",section_login);


    section_administrador.classList.add("activar-block");
    section_login.classList.remove("activar-flex");

    datosUsuario(usuario,password);
}