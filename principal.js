const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail')

const menuHamIcon= document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleDesktopMenuMobile);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
   
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive'); 
    }
    
    aside.classList.toggle('inactive')
}

function toggleDesktopMenu(){

   // desktopMenu.classList.toggle('inactive');
   const isCarritoClosed = aside.classList.contains('inactive');

   if(!isCarritoClosed){
       aside.classList.add('inactive');
       desktopMenu.classList.toggle('inactive');
   }

   desktopMenu.classList.toggle('inactive');
}

function toggleDesktopMenuMobile(){
    
    const isCarritoClosed = aside.classList.contains('inactive');

    if(!isCarritoClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
    
}