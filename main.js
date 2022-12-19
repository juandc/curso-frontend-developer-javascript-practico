const menuemail= document.querySelector(".navbar-email");
const desktopmenu= document.querySelector(".desktop-menu");
const menuhamicon= document.querySelector(".menu");
const mobilmenu= document.querySelector(".mobile-menu");
const productdetail= document.querySelector(".product-detail");
const shoppingcart= document.querySelector(".navbar-shopping-cart");


menuemail.addEventListener('click', toggledesktopmenu);
menuhamicon.addEventListener('click', togglemobilmenu);
shoppingcart.addEventListener('click', toggleshoppingcart);

function toggledesktopmenu() {

    desktopmenu.classList.toggle("inactive");
    productdetail.classList.add("inactive");
    
}
function togglemobilmenu() {

   mobilmenu.classList.toggle("inactive");
   productdetail.classList.add("inactive");
}
function toggleshoppingcart() {

    productdetail.classList.toggle("inactive");
    desktopmenu.classList.add("inactive");
    mobilmenu.classList.add("inactive");
 }