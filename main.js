const menuEmail = document.querySelector('.navbar-email');
const leftIconMenu = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
leftIconMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleShopMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  aside.classList.add("inactive");

}
//con estos que están arriba y abajo, se puede activar y desactivar elementos
//dentro de una página web

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  aside.classList.add("inactive");
}

function toggleShopMenu() {
  aside.classList.toggle("inactive");
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

  const productoImg = document.createElement('img');
  productoImg.setAttribute('src', product.image);

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

s