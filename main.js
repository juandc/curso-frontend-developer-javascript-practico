const menuEmail =document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", aparecerMenu);

function aparecerMenu() {
desktopMenu.classList.toggle("inactive");
}