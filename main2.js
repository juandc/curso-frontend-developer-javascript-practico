const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamMenu.addEventListener('click', toggleHamMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')

    desktopMenu.addEventListener('mouseout', mouseDesktopMenu);
}

function mouseDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}

function toggleHamMenu() {
    mobileMenu.classList.toggle('inactive')

    mobileMenu.addEventListener('mouseout', mouseoutHamMenu);
}
function mouseoutHamMenu () {
    mobileMenu.classList.toggle('inactive')
}
