/** NATALI */
export function header (){
    let root = document.querySelector("#section-header");
  
   //CREACION DE LOS DIV PARA EL PANEL
    root.innerHTML = '<a class="logo">'+
            '<img src="https://1000marcas.net/wp-content/uploads/2020/03/logo-Alibaba.png" alt="logo alibaba">'+
            '</a>'+
            '<nav>'+
            '<a class="nav-link">My alibaba</a>'+
            '<a class="nav-link">Orders</a>'+
            '<a href="" class="nav-link">Cerrar sesión</a>'+
            '</nav>';
       
}
header();