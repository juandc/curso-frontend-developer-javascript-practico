const menuEmail = document.querySelector('.navbar-email');
const desktopMenu =document.querySelector('.desktop-menu');
const menuHamIcon =document.querySelector('.menu');
const mobileMenu =document.querySelector('.mobile-menu');
const menuCarritoIcon =document.querySelector('.navbar-shopping-cart');
const  aside = document.querySelector('.product-detail');

//variables con eventos

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu)
menuCarritoIcon.addEventListener('click',togglecarritoAside)
//funciones para que se cierre y abran los menus
function toggleDesktopMenu (){
  console.log('click');
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed){
    aside.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');

}
console.log('JS funcionando');

function toggleMobileMenu(){
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed){
    aside.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}

function togglecarritoAside(){
  const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
  

  if (!ismobileMenuClosed){
    mobileMenu.classList.add('inactive');
  }

    aside.classList.toggle('inactive');
  
}