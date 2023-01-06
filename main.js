var menuEmail = document.querySelector('.navbar-email');
var desktopMenu = document.querySelector('.desktop-menu');
var menuHamburguer = document.querySelector('.menu');
var mobileMenu = document.querySelector('.mobile-menu')
var menuCarrito = document.querySelector('.navbar-shopping-cart');
var aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguer.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){
    if(!aside.classList.toggle('inactive')){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    if(!aside.classList.toggle('inactive')){
        aside.classList.add('inactive');
    }
        mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){

    if(!desktopMenu.classList.toggle('inactive')){
        desktopMenu.classList.add('inactive');
    }
    if(!mobileMenu.classList.toggle('inactive')){
        mobileMenu.classList.add('inactive');
    } 
        aside.classList.toggle('inactive');
}

