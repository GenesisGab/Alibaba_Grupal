/* LIBRERIA DE COMPPONENTES */
export var section_administrador = document.getElementById("section-administrador");
export var section_login = document.getElementById("section-login");

/* LIBRERIAS BD USER Y ADMINISTRADOR*/
import { administrador } from "./administrador.js";
import { user_ob } from "../data/user.js";


export function revisarusuario(usuario, password){
    
  //CREACION DEL DISEÑO DEL FORMULARIO
  let forms = document.querySelector("#section-login");
  forms.innerHTML =

  '<img class="formulario_img2" src="https://www.logo.wine/a/logo/Alibaba_Group/Alibaba_Group-Logo.wine.svg">'+
  '<form class="form-login" action="" id="login" autocomplete="off">'+
      '<img class="formulario_img" src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-orange.png">'+
      '<h2>Welcome</h2>'+
      '<br>'+
      '<span class="formulario_sub" id="formulario_sub">Login</span>'+
      '<label class="formulario__label" for=""> Usuario/Email <input type="texto" id="username"></label>'+
      '<label class="formulario__label" for=""> Password <input type="password" id="password"></label>'+
      '<button>ENTRAR</button>'+
  '</form>';

    /******************
     * PROGRAMACIÓN
     *****************/

    /* Con un for se recorre la Base de Datos de Usuarios para validar las
    credenciales ingresadas */

    let msg1DOM = document.getElementById("formulario_sub");

    for(let i=0;i<user_ob.length;i++){
      if(usuario==user_ob[i].nikname){
        if(password==user_ob[i].password){
          i=user_ob.length;
          administrador(usuario,password);
        }else{
          msg1DOM.innerHTML='<h1 class="noValido">'+'EL USUARIO O LA CONTRASEÑA ES INCORRECTA'+'</h1>';
          console.log("MSG "+msg1DOM)
        }
      }else if(usuario==user_ob[i].email){
        if (password==user_ob[i].password){
          i=user_ob.length;
          administrador(usuario,password);
        }else{
          msg1DOM.innerHTML='<h3 class="noValido">'+'EL CORREO O LA CONTRASEÑA ES INCORRECTA'+'</h3>';
          console.log("MSG pas "+msg1DOM)
        }
      }
    }
 


}

revisarusuario();

