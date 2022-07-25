// Importamos clases y id de nuestro html
const menuEmail = document.querySelector('.navbar-email');
const menuBurgerIcon = document.querySelector('.menu'); // 
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close') //Cierra los detalles del producto
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

//Utilizamos metodo addEvenListener para crear funciones importadas desde html
menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);



function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive'); 
  }

  closeProductDetailAside();
  
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
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
  name: 'Bicicleta de Montaña Optimus TUCANA - 12 Vel',
  price: "2,711,000.00",
  image: "./icons/Tucana-verde-1_1000x.webp"});
productList.push({
  name: 'Bicicleta de montaña optimus TUCANA - 9 velocidades',
  price: "2,291,000.00",
  image: "./icons/Tucana-9vel-roja_1000x.webp",
});
productList.push({
  name: 'Bicicleta de Carbono Tucana PRO',
  price: "4,097,000.00",
  image: "./icons/Bicicleta-de-carbono-Tucana-Pro-negra_1000x.webp",
});
productList.push({
  name: 'Bicicleta MTB Optimus Aquila Evo 13 velocidades',
  price: "1,782,000.00",
  image: "./icons/Bicicleta-de-MTB-Aquila-EVO_1000x.webp",
});
productList.push({
  name: 'Bicicleta de Ruta Cetus - 10vel',
  price: "2,990,000.00",
  image: "./icons/Bicicleta-de-ruta-Cetus-roja_1000x.webp",
});
productList.push({
  name: 'Bicicleta de montaña optimus AQUILA Max Lite 9 Vel',
  price: "1,384,000.00",
  image: "./icons/Bicicleta-de-MTB-Aquila-Max-Azul-rojo_1000x.webp",
});
productList.push({
  name: 'Bike Aquila Black',
  price: "1,317,000.00",
  image: "./icons/aquila-negro-verde-hidra-3_faa3c090-2ceb-49a4-95de-61cdd2e6541d_1000x.webp",
});

productList.push({
  name: 'Bicicleta de montaña optimus KORUNA 8v',
  price: "1,304,000.00",
  image: "./icons/Bicicleta-de-MTB-Koruna-Morado-Azul_1000x.webp",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
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
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
