const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetailIconClose = document.querySelector('.product-detail-close')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarrishoppingCartContainer);
productDetailIconClose.addEventListener('click', closeProductDetailIcon)

function toggleDesktopMenu() {
  const shoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

  if(!shoppingCartContainerClosed){
shoppingCartContainer.classList.add('inactive')
  }
  closeProductDetailIcon();
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const shoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
  

  if(!shoppingCartContainerClosed){
    shoppingCartContainer.classList.add('inactive')
  }
  
  closeProductDetailIcon();
  mobileMenu.classList.toggle('inactive');
}

function toggleCarrishoppingCartContainer() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopclosed = desktopMenu.classList.contains('inactive');
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  

  if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive')
  }
  if(!isDesktopclosed){
    desktopMenu.classList.add('inactive')
  }
  if(!isProductDetailClosed){
    productDetailContainer.classList.add('inactive')
  }

shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAsaid() {
  productDetailContainer.classList.remove('inactive');
  shoppingCartContainer.classList.add('inactive');
}

function closeProductDetailIcon() {
  productDetailContainer.classList.add('inactive');
  shoppingCartContainer.classList.add('inactive');
}

const productList =[];
productList.push({
  name: 'bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Televisor',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Computador',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

// Con el array listo. solo resta ingresar los datos en el HTML, eso, recorriendo el array
// con un ciclo for of

function renderProducts (arr) {
  for (const product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image); 
    productImg.addEventListener('click', openProductDetailAsaid)
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$'+ product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    // ahora, vamos a meter cada variable dentro de su variable padre
  
    productInfoFigure.appendChild(productImgCard);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    // en la siquiente linea de codigo se agrega el producto ya maquetado(productCard) a la const cardsContainer, que es la que permitira dibujar todo el codigo maquetado en HTML.
  
    cardsContainer.appendChild(productCard);
    
  
  }
}

renderProducts(productList);
/* product es el objeto que recorre cada uno de los elementos
 en el array, para crear con document.createElement
cada uno de los elementos del HTML, pero en JS.*/

