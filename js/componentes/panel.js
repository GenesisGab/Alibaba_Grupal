/** GÉNESIS */
import { user_ob } from "../data/user.js";

export function datosUsuario(usuario){
    for(let i = 0; i<user_ob.length; i++){
        if(usuario == user_ob[i].nikname){

            let usuarioInfo = document.querySelector("#nombre");

            usuarioInfo.innerHTML = 
                    
                    '<h1>'+'<b class="user">'+'Nikname: '+'<b>'+'<b class="ingresadoUser">'+user_ob[i].nikname+ '</b>'+'</h1>'+
                    '<h1>'+'<b class="user">'+'Name: '+'</b>'+'<b class="ingresadoUser">'+user_ob[i].name+ '</b>'+'</h1>';
        }

    }
}



//CREACION DEL PANEL
export function panel (){
    let root = document.querySelector("#despliegue");
  
   //CREACION DE LOS DIV PARA EL PANEL
    root.innerHTML = 
        '<div class="despliegue_subtitulo">Set de datos</div>'+
        '<div class="nameUser" id="nombre"></div>'+
        '<div class="elementos" id="bt_user">User</div>'+
        '<div class="elementos" id="bt_userCredit">User has creditcard</div>'+
        '<div class="elementos" id="bt_vendor">Vendor</div>'+
        '<div class="elementos" id="bt_category">Category</div>'+
        '<div class="elementos" id="bt_Option">Option</div>'+
        '<div class="elementos" id="bt_orders">Orders</div>'+
        '<div class="elementos" id="bt_orderProduct">Orders has products</div>'+ 
        '<div class="elementos" id="bt_orderCredit">Orders paid creditcard</div>'+
        '<div class="elementos" id="bt_orderUser">Orders placed user</div>'+
        '<div class="elementos" id="bt_products">Products</div>'+
        '<div class="elementos" id="bt_productCategory">Products belong category</div>'+
        '<div class="elementos" id="bt_productOption">Products has options</div>'+
        '<div class="elementos" id="bt_productVendor">Products sold vendor</div>'+
        '<div class="elementos" id="bt_cartsProduct">Carts has products</div>'+
        '<div class="elementos" id="bt_shoppingcart">Shopingcart</div>';
}

panel(); //<-- Se llama al panel