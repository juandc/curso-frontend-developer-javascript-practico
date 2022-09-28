let navBarEmail=document.querySelector('.navbar-email');
let desktopMenu=document.querySelector('.desktop-menu');
let mobileMenu=document.querySelector('.mobile-menu');
let menuHamburguesa=document.querySelector('.menu');

navBarEmail.addEventListener('click',mostrarYQuitarMenu);
menuHamburguesa.addEventListener('click',mostrarYQuitarMenuMobile);

function mostrarYQuitarMenu(){
    desktopMenu.classList.toggle('inactivo')
}

function mostrarYQuitarMenuMobile(){
    mobileMenu.classList.toggle('inactivo')
}