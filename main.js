const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
  /* primero le asignamos una variable a la palabra que pulsaremos (menuEmail) despues le asignamos
  una evento click y que ejecute una funcion. esta funcion le pondremos esto
      (  desktopMenu.classList.toggle('inactive'); lo que hara es que le quitara o pondra la clase a nuestro elemento con su variable ya asignada . esta clase tendra display:none y si se le quita aparera block.

)*/
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle("inactive");
  /* primero le asignamos una variable a la palabra que pulsaremos (menuHamIcon) despues le asignamos
  una evento click y que ejecute una funcion. esta funcion le pondremos a la variable que queremos que aparesca la propiedad classList junto con su funcion toggle) (  mobileMenu.classList.toggle("inactive"))
  ; lo que hara es que le quitara o pondra la clase a nuestro elemento con su variable ya asignada . esta clase tendra display:none y si se le quita aparera block cada vez que pulse mobileMenu

)*/
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isdesktoktopmenu = desktopMenu.classList.contains("inactive");
  if (!isdesktoktopmenu) {
    desktopMenu.classList.add("inactive");
  }
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive'); 
  }
  
  shoppingCartContainer.classList.toggle('inactive');
  
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
/* creamos nuestros propios arrays porque no tenemos base de datos en el caso de que si ,lo usariamos . */
function renderProducts(arr) {
  /* con el for hacemos referencia a cada uno de los elemento del array */

  /* lo colocamos todo en una funcion si en el futuro usamos otro array y asi reutilizarlo */
  for (product of arr) {
    /* ahora creamos un div y le agregamos una clase ya lista en el css */
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  /*  creamos una imagen que seria la de nuestros productos , con setAttribute le agregamo el atributo src y hacemos referencia elemento array con nombre (product)
  junto con la propiedad image que tendra la url de cada uno de las imagenes */
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.append(productPrice, productName);
    /* este el div que contiene precio y nombre */
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    /* no es necesario poner la url porque solo usaremos un icono */
    /* ahora le agregaremos a la figura la imagen  */
    productInfoFigure.appendChild(productImgCart);
    /* div que contien el div con precios y name, el la figura contiene lo anterior hecho */
    productInfo.append(productInfoDiv, productInfoFigure);
    /* el div principal le agregamos la imagen y el otro div que contiene todo los elementos y sus ramas */
    productCard.append(productImg, productInfo);
  
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
