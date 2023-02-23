const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamMenu = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamMenu.addEventListener('click', toggleHamMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClose = aside.classList.contains('inactive');

    if (!isAsideClose) {
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')

    desktopMenu.addEventListener('mouseout', mouseDesktopMenu);
}

function mouseDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}

function toggleHamMenu() {
    const isAsideClose = aside.classList.contains('inactive');

    if (!isAsideClose) {
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')

    mobileMenu.addEventListener('mouseout', mouseoutHamMenu);
}
function mouseoutHamMenu() {
    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside() {
    const isDesktopMenu = desktopMenu.classList.contains('inactive')
    const isMobileMenu = mobileMenu.classList.contains('inactive')

    if (!isMobileMenu) {
        mobileMenu.classList.add('inactive')
    } else if (!isDesktopMenu) {
        desktopMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive')

    /*     aside.addEventListener('mouseout', mouseoutCarritoIcon); */
}

function mouseoutCarritoIcon() {
    aside.classList.toggle('inactive')
}