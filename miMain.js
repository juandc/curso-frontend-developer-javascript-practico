let navBarEmail=document.querySelector('.navbar-email');
let desktopMenu=document.querySelector('.desktop-menu');
let mobileMenu=document.querySelector('.mobile-menu');
let menuHamburguesa=document.querySelector('.menu');

let shoppingCar=document.querySelector('.navbar-shopping-cart')
let productDetail=document.getElementsByClassName('product-detail')

navBarEmail.addEventListener('click',mostrarYQuitarMenu);
menuHamburguesa.addEventListener('click',mostrarYQuitarMenuMobile);
shoppingCar.addEventListener('click',mostrarYQuitarProductDetail)

function mostrarYQuitarMenu(){
    let isProductDetailOpen= !productDetail[0].classList.contains('inactivo');

    if(isProductDetailOpen){
        productDetail[0].classList.add('inactivo')
    }

    desktopMenu.classList.toggle('inactivo')
}

function mostrarYQuitarMenuMobile(){
    let isProductDetailOpen= !productDetail[0].classList.contains('inactivo');

    if(isProductDetailOpen){
        productDetail[0].classList.add('inactivo')
    }

    mobileMenu.classList.toggle('inactivo')
}

function mostrarYQuitarProductDetail(){
    let isMobileMenuOpen= !mobileMenu.classList.contains('inactivo');
    let isDesktopMenuOpen= !desktopMenu.classList.contains('inactivo');

    if(isDesktopMenuOpen){
        desktopMenu.classList.add('inactivo')
    }

    if(isMobileMenuOpen){
        mobileMenu.classList.add('inactivo')
    }

    productDetail[0].classList.toggle('inactivo')
}