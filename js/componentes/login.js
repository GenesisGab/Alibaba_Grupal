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
      '<span class="formulario_sub">Login</span>'+
      '<label class="formulario__label" for=""> Usuario/Email <input type="texto" id="username"></label>'+
      '<label class="formulario__label" for=""> Password <input type="password" id="password"></label>'+
      '<button>ENTRAR</button>'+
  '</form>';

  
    /******************
     * PROGRAMACIÓN
     *****************/

    /* Con un for se recorre la Base de Datos de Usuarios para validar las
    credenciales ingresadas */
    
    for (let i=0;i<user_ob.length;i++){ //Valida si el user ingresado se encuentra en la BD

        if(usuario===user_ob[i].nikname){
                    
          if(password===user_ob[i].password){
            
            alert('* Acceso con usuario valido *');
            i=user_ob.length;

            administrador(usuario,password);
            
          }else{
            console.log("Contraseña no valida");
         }
                      
        } else if(usuario===user_ob[i].email){  //Valida si el email ingresado se encuentra en la BD

            if(password===user_ob[i].password){
                
                alert("* Acceso con email valido *"); //Msj que indica al usuario que su correo es valido
                i=user_ob.length;
                
                administrador(usuario,password);
            }

        } 
               
    }
 
}

revisarusuario();

