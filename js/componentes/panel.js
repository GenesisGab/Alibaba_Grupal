/** GÉNESIS */

//CREACION DEL PANEL
export function panel (){
    let root = document.querySelector("#despliegue");
  
   //CREACION DE LOS DIV PARA EL PANEL
    root.innerHTML = 
        '<div class="despliegue_subtitulo">Set de datos</div>'+
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