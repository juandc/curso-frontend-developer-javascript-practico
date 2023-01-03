const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburgesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamburgesa.addEventListener('click',toggleMobileMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('innactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('innactive');
}