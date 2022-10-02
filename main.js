const menuEmail =document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menHamIcon = document.querySelector(".menu");

menHamIcon.addEventListener("click", aparecerMenuMobil);
menuEmail.addEventListener("click", aparecerMenu);

function aparecerMenu() {
desktopMenu.classList.toggle("inactive");
}

function aparecerMenuMobil() {
  mobileMenu.classList.toggle("inactive");
  }