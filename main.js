const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productCartDetail = document.querySelector('.product-cart-detail');
const btnCloseProductCartDetail = document.querySelector('.product-detail-close');


menuEmail.addEventListener('click', toggleDesktop);
menuBurguer.addEventListener('click', toggleMobile);
menuCart.addEventListener('click', toggleAside);

function toggleDesktop() {
  desktopMenu.classList.toggle('inactive');
}

function toggleMobile() {
  const isAsideOpen = aside.classList.contains('inactive');
  productCartDetail.classList.add('inactive');
  
  if(!isAsideOpen){
    aside.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}

function toggleAside() {
  const isMobileMenuOpen = mobileMenu.classList.contains('inactive');
  const isProductDetailOpen = productCartDetail.classList.contains('inactive');

  if(!isMobileMenuOpen){
    mobileMenu.classList.add('inactive');
  }
  if(!isProductDetailOpen){
    productCartDetail.classList.add('inactive');
  }

  
  
  aside.classList.toggle('inactive');
}


function openProductDetail(){
  aside.classList.add('inactive');
  productCartDetail.classList.remove('inactive');
}

function closeProductDetail(){
  productCartDetail.classList.add('inactive');
}

btnCloseProductCartDetail.addEventListener('click', closeProductDetail);




const productList = [];

productList.push({
  name: 'Bike',
  price: 120,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})

productList.push({
  name: 'Computer',
  price: 840,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})

productList.push({
  name: 'Alexa',
  price: 40,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})



for (product of productList){
  const productCard = document.createElement('div');
  productCard.setAttribute('class', 'product-card');

  const imageProduct = document.createElement('img');
  imageProduct.setAttribute('src', product.image);
  imageProduct.addEventListener('click', openProductDetail);

  const infoProduct = document.createElement('div');
  infoProduct.setAttribute('class', 'product-info');

  const divPrecio = document.createElement('div');
  
  const pPrecio = document.createElement('p');
  pPrecio.innerHTML = '$ ' + product.price;
  const pNombre = document.createElement('p');
  pNombre.innerHTML = product.name;

  const figCart = document.createElement('figure');
  const imgCart = document.createElement('img');

  imgCart.setAttribute('src','./icons/bt_add_to_cart.svg')

  cardsContainer.append(productCard);
  productCard.append(imageProduct);
  productCard.append(infoProduct);
  infoProduct.append(divPrecio);
  infoProduct.append(figCart);
  divPrecio.append(pPrecio);
  divPrecio.append(pNombre);
  figCart.append(imgCart);
}

