
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click',toggleDesktopMenu);

// creamos una funcion para realizar el evento de click
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}