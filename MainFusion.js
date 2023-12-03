const menuEmail = document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');
const menuHamburger= document.querySelector('.menu');
const mobilmenu= document.querySelector('.mobile-menu');




menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburger.addEventListener('click', togglemobilmenu);//inicialmente se escucha cuando le den click al elemento en cuestión

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
    console.log('menuHamburger');
}

function togglemobilmenu() {
    mobilmenu.classList.toggle('inactive')//se hace el llamado a la clase inactive la cual mediante la funsión toggle se le añade
}

