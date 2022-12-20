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

 const productlist = []; 
 productlist.push({
    name: "bike",
    price: "120",
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
 });

 productlist.push({
    name: "Compu",
    price: "1200",
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
 });

 productlist.push({
    name: "Casco",
    price: "20",
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
 });

 productlist.push({
    name: "Portatil",
    price: "800",
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
 });

 for (product of productlist) {
    const productcard=document.createElement("div");
    productcard.classList.add("product-card");

    const img=document.createElement("img");
    img.setAttribute("src", product.image);

    const productinfo=document.createElement("div");
    productinfo.classList.add("product-info");

    const productinfodiv=document.createElement("div");
    
    const productinfoname=document.createElement("p");
    productinfoname.innerText=product.name

    const productinfoprice=document.createElement("p");
    productinfoprice.innerText= "$" + product.price;

    const figure=document.createElement("Figure");

    const logo=document.createElement("img");
    logo.setAttribute("src", "./icons/bt_add_to_cart.svg");


 }