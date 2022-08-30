/*CONSTANS */
const menuEmail = document.querySelector('.navbar-email');
const deskMenu = document.querySelector('.desktop-menu');
const mobileMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

/*EVENTS LISTENERS*/
menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu(){
  deskMenu.classList.toggle('inactive');
  const isAsideClosed = aside.classList.contains('inactive');
  if(!isAsideClosed){
    aside.classList.add('inactive');
  }
}
function toggleMobileMenu(){
  mobileMenu.classList.toggle('inactive');
  const isAsideClosed = aside.classList.contains('inactive');
  if(!isAsideClosed){
    aside.classList.add('inactive');
  }
}
function toggleCarritoAside(){
  aside.classList.toggle('inactive');
  deskMenu.classList.add('inactive');
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');
  }
}

// creacion e insercion de elementos HTML
const productList= [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Monitor',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Televisor',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Moto',
  price: 620000,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

for(product of productList){
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const imageProduct = document.createElement('img');
  imageProduct.setAttribute('src', product.image);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

  const productInfoDiv = document.createElement('div');  
 
  const productPrice = document.createElement('p');
  productPrice.innerText= '$'+ product.price;
  const productName = document.createElement('p');
  productName.innerText = product.name;
  productInfoDiv.append(productPrice, productName);

  const productInfoFigure = document.createElement('figure');
  const cartImage = document.createElement ('img');
  cartImage.setAttribute('src', './icons/bt_add_to_cart.svg');
  productInfoFigure.appendChild(cartImage);
  productInfo.append(productInfoDiv, productInfoFigure);
  productCard.append(imageProduct, productInfo);
  cardsContainer.appendChild(productCard);
}