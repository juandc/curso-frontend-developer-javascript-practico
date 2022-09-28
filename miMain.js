let navBarEmail=document.querySelector('.navbar-email');
let desktopMenu=document.querySelector('.desktop-menu')

navBarEmail.addEventListener('click',mostrarYQuitarMenu);

function mostrarYQuitarMenu(){
    desktopMenu.classList.toggle('inactivo')
}