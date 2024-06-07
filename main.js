const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener('click', ToggleDesktopMenu);
menuHamIcon.addEventListener('click', ToggleMobileMenu);
menuCarritoIcon.addEventListener('click', ToggleCarritoAside);

function ToggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains("inactive");
 
    if(!isAsideClosed){
        aside.classList.add("inactive"); 
     }

    desktopMenu.classList.toggle("inactive");

}

function ToggleMobileMenu() {
const isAsideClosed = aside.classList.contains("inactive");
    

    if(!isAsideClosed){
        aside.classList.add("inactive"); 
     }

    mobileMenu.classList.toggle("inactive");

}

function ToggleCarritoAside() {
    const ismobileMenuClosed = mobileMenu.classList.contains("inactive");
    
        if(!ismobileMenuClosed){
           mobileMenu.classList.add("inactive"); 
        }

        aside.classList.toggle("inactive");

}