const meanuEmail = document.querySelector(".desktop-menu");
const navbarEmail = document.querySelector('.navbar-email');
const menuIconMobile = document.querySelector('.menuIconMobile');
const menuMobile = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const menuShopping = document.querySelector('.product-detail')
const productDetail = document.querySelector('.product-detail-in')
const productDetailClose = document.querySelector('.product-detail-in-close')

productList = [];
productList.push({
  name:'Bike',
  price:'$120',
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name:'Computer',
  price:'$350',
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name:'Screen',
  price:'$780',
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name:'Televisor',
  price:'$710',
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

for (product of productList) {

  const cardsConteiner = document.querySelector('.cards-container')

  const divProductCard = document.createElement('div');
  const divProductInfo = document.createElement('div');

  const divInfoPN = document.createElement('div');
  const imgProduct = document.createElement('img');
  const imgCart = document.createElement('img');
  const pPrice = document.createElement('p');
  const pName = document.createElement('p');
  const figure = document.createElement('figure');

  divProductCard.classList.add('product-card');
  divProductInfo.classList.add('product-info');
 

  cardsConteiner.appendChild(divProductCard);
  imgProduct.src = product.image

  divProductCard.append(imgProduct,divProductInfo);

  divProductInfo.append(divInfoPN,figure);

  pPrice.textContent = product.price
  pName.textContent = product.name
  divInfoPN.append(pPrice,pName );
  
  imgCart.src = './icons/bt_add_to_cart.svg'
  figure.appendChild(imgCart)
  
  imgProduct.addEventListener('click',openProduct)
}


navbarEmail.addEventListener('click',toggleMenuEmail);
menuIconMobile.addEventListener('click', toggleMenuIconMobile);
shoppingCart.addEventListener('click',toggleMenuShopping)
productDetailClose.addEventListener('click',closeProduct)

function toggleMenuEmail () {
  meanuEmail.classList.toggle('inactive')
};
function toggleMenuIconMobile() {
  menuMobile.classList.toggle('inactive')
  // SI Menu Mobile esta abierto no podemos abrir product detail y carrit de compras
  if (!menuIconMobile.classList.contains('inactive')) {
    menuShopping.classList.add('inactive')
    productDetail.classList.add('inactive')
  }
};
function toggleMenuShopping() {
  menuShopping.classList.toggle('inactive')

  // Si carrito de compras esta abierto no podemos abrir a product detail y Menu Mobile
  if (!menuShopping.classList.contains('inactive')) {
    productDetail.classList.add('inactive')
    menuMobile.classList.add('inactive')
  }
};


function openProduct() {
  productDetail.classList.remove('inactive');
  // Si ProductDetail esta abierto vamos no podemos abrir carrito de comprar Y MENU MOBILE
  if (!productDetail.classList.contains('inactive')){
    menuShopping.classList.add('inactive')
    menuMobile.classList.add('inactive')
  }
}

function closeProduct () {
  productDetail.classList.add('inactive');
}

