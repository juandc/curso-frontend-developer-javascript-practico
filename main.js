const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu() {
  // cierra el menu del carrito al abrir menu de cuentas
  const isAsideClosed = aside.classList.contains('inactive');
  if(!isAsideClosed) {
    aside.classList.toggle('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
  // ocultar menu de produnctos lista
  const isAsideClosed = aside.classList.contains('inactive');
  if(!isAsideClosed) {
    aside.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside() {
  // ocultar menu de producto con img vs lista de productos
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  if(!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }
  aside.classList.toggle('inactive');
}