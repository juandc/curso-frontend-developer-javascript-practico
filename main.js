const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


navbarEmail.addEventListener('click',() =>{
  desktopMenu.classList.toggle('inactive')
});

menuHamburguesa.addEventListener('click',() =>{
  mobileMenu.classList.toggle('inactive')
});