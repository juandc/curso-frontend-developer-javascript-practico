const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
console.log(navbarEmail,
  desktopMenu);
navbarEmail.addEventListener('click',() =>{
  desktopMenu.classList.toggle('inactive')
})