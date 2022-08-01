/** GÉNESIS */

//CREACION DEL PANEL
export function panel (){
    let root = document.querySelector("#despliegue");
  
   //CREACION DE LOS DIV PARA EL PANEL
    root.innerHTML = 
        '<div class="despliegue_subtitulo">Set de datos</div>'+
        '<div class="elementos" id="bt_ver">User</div>'+
        '<div class="elementos">User has creditcard</div>'+
        '<div class="elementos">Option</div>'+
        '<div class="elementos">Category</div>'+
        '<div class="elementos">Orders</div>'+
        '<div class="elementos">Orders has products</div>'+ 
        '<div class="elementos">Orders paid creditcard</div>'+
        '<div class="elementos">Orders placed user</div>'+
        '<div class="elementos">Products</div>'+
        '<div class="elementos">Products belong category</div>'+
        '<div class="elementos">Products belong category</div>'+
        '<div class="elementos">Products has options</div>'+
        '<div class="elementos">Carts has products</div>'+
        '<div class="elementos">Shopingcart</div>'+
        '<div class="elementos">Vendor</div>';
}

panel(); //<-- Se llama al panel