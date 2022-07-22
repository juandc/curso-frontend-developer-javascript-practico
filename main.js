const menuEmail = document.querySelector('.navbar-email');
const leftIconMenu = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shopIconClose = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
leftIconMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleShopMenu);
shopIconClose.addEventListener('click', closeMenuIconShopClose)

// estas funciones sirven para pdoer abrir y cerrar los elementos que contiene la web
function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  desktopMenu.classList.add("inactive");
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}

function toggleShopMenu() {
  shoppingCartContainer.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productDetailContainer.classList.add('inactive');
}

function openProductDetailAside() {
  productDetailContainer.classList.remove('inactive');
}

function closeMenuIconShopClose() {
  shoppingCartContainer.classList.toggle('inactive');
  productDetailContainer.classList.add('inactive');
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
}

//vamos a agregar un array que meta productos auto
const productsList = [];
productsList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productsList.push({
  name: 'Goku',
  price: 1200,
  image: 'https://m.media-amazon.com/images/I/6104mBGl-ZL._AC_SS450_.jpg',
});
productsList.push({
  name: 'Bills',
  price: 1300,
  image: 'https://cf.shopee.com.mx/file/be55314b586e70ea488a8acd2e0e1b21',
});
productsList.push({
  name: 'Bills',
  price: 1300,
  image: 'https://cf.shopee.com.mx/file/be55314b586e70ea488a8acd2e0e1b21',
});

productsList.push({
  name: 'Bills',
  price: 1300,
  image: 'https://cf.shopee.com.mx/file/be55314b586e70ea488a8acd2e0e1b21',
});
productsList.push({
  name: 'Bills',
  price: 1300,
  image: 'https://cf.shopee.com.mx/file/be55314b586e70ea488a8acd2e0e1b21',
});

function renderProducts(arr) {
//con este código podemos meter todos los productos que queramos
for (product of arr) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  // producto = { name, price image] _> product.image}
  const productoImg = document.createElement('img');
  productoImg.setAttribute('src', product.image);
  productoImg.addEventListener('click', openProductDetailAside);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

  const productInfoDiv = document.createElement('div');

  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.price;

  const productName = document.createElement('p');
  productName.innerText = product.name;

  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);

  const productInfoFigure = document.createElement('figure');
  const productoImgCart = document.createElement('img');
  productoImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

  productInfoFigure.appendChild(productoImgCart);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productoImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);
}  
};
renderProducts(productsList);