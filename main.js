const menuEmail =document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const carritoCompras = document.querySelector(".product-detail");

menHamIcon.addEventListener("click", aparecerMenuMobil);
menuEmail.addEventListener("click", aparecerMenu);
menuCarritoIcon.addEventListener("click", aparecerMenuCarrito);

function aparecerMenu() {
  desktopMenu.classList.toggle("inactive");
  carritoCompras.classList.add("inactive");
}

function aparecerMenuMobil() {
  mobileMenu.classList.toggle("inactive");
  carritoCompras.classList.add("inactive");
}

function aparecerMenuCarrito() {
  carritoCompras.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
}