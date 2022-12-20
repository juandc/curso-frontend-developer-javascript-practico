const menuemail= document.querySelector(".navbar-email");
const desktopmenu= document.querySelector(".desktop-menu");
const menuhamicon= document.querySelector(".menu");
const mobilmenu= document.querySelector(".mobile-menu");
const productdetail= document.querySelector(".product-detail");
const shoppingcart= document.querySelector(".navbar-shopping-cart");
const productdetailcontainer= document.querySelector("#Pdetalles");
const productdetailclose= document.querySelector(".product-detail-close");
const cardscontainer= document.querySelector(".cards-container");


menuemail.addEventListener('click', toggledesktopmenu);
menuhamicon.addEventListener('click', togglemobilmenu);
shoppingcart.addEventListener('click', toggleshoppingcart);
productdetailclose.addEventListener("click", CloseProductDetailAsaid )

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
    productdetailcontainer.classList.add("inactive");
    
 }
 function openProductDetailAsaid() {
   productdetailcontainer.classList.remove("inactive");
   productdetail.classList.add("inactive");
}
function CloseProductDetailAsaid() {
   productdetailcontainer.classList.add("inactive");
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
 
 function renderproducts(arr) {
   for (product of arr) {
      const productcard=document.createElement("div");
      productcard.classList.add("product-card");    
  
      const Pimg=document.createElement("img");
      Pimg.setAttribute("src", product.image);
      Pimg.addEventListener("click", openProductDetailAsaid);
  
      const productinfo=document.createElement("div");
      productinfo.classList.add("product-info");
  
      const productinfodiv=document.createElement("div");
      
      const productinfoname=document.createElement("p");
      productinfoname.innerText=product.name;
      const productinfoprice=document.createElement("p");
      productinfoprice.innerText= "$" + product.price;
  
      productinfodiv.appendChild(productinfoprice);
      productinfodiv.appendChild(productinfoname);
  
  
      const productinfofigure=document.createElement("Figure");
      const productimgcart=document.createElement("img");
      productimgcart.setAttribute("src", "./icons/bt_add_to_cart.svg");
  
      productinfofigure.appendChild(productimgcart); 
  
      productinfo.appendChild(productinfodiv);
      productinfo.appendChild(productinfofigure);
  
      productcard.appendChild(Pimg);
      productcard.appendChild(productinfo);
  
      cardscontainer.appendChild(productcard);
  
   }
 }

 renderproducts(productlist);

 
