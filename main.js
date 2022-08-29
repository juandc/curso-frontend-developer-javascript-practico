const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close');
const cerrarCarrito = document.querySelector('#btnCerrarCarrito');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailClose.addEventListener('click', toggleInfoMenu);
cerrarCarrito.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu(){
  const isCarritoClosed = shoppingCartContainer.classList.contains('incative');

  if(!isCarritoClosed){
    shoppingCartContainer.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  const isCarritoClosed = shoppingCartContainer.classList.contains('incative');

  if(!isCarritoClosed){
    shoppingCartContainer.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
  
}

function toggleInfoMenu (){
  const isMobileMenuClosed = mobileMenu.classList.contains('incative');
  const isMenuEmailClosed = menuEmail.classList.contains('incative');
  const idShoppingCartContainer = shoppingCartContainer.classList.contains('incative');

  if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');
  }
  if(!isMenuEmailClosed){
    desktopMenu.classList.add('inactive');
  }
  if(!idShoppingCartContainer){
    shoppingCartContainer.classList.add('inactive');
  }

  productDetail.classList.toggle('inactive');
}

function toggleCarritoAside(){
  const isMobileMenuClosed = mobileMenu.classList.contains('incative');
  const isMenuEmailClosed = menuEmail.classList.contains('incative');
  const isProductDetail = productDetail.classList.contains('incative');

  if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');
  }
  if(!isMenuEmailClosed){
    desktopMenu.classList.add('inactive');
  }
  if(!isProductDetail){
    productDetail.classList.add('inactive');
  }

  shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];

productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
  name: 'Monitor',
  price: 600,
  image: 'https://www.pngplay.com/wp-content/uploads/6/Laptop-Computer-Monitor-PNG-Clipart-Background.png'
});

productList.push({
  name: 'Mac',
  price: 1300,
  image: 'https://www.rioja2.com/images/noticias/66287/recortes/12x5-ordenador-mac-apple.jpg'
});

function renderProducts(arr){
  for (product of arr){

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const img = document.createElement('img');
    img.setAttribute('src', product.image);
    img.addEventListener('click', toggleInfoMenu);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
  
    const productName = document.createElement('div');
    productName.innerText = product.name;
  
    productInfoDiv.append(productPrice, productName)
  
    const productInfoPicture = document.createElement('figure');
    const productImgInfo = document.createElement('img');
    productImgInfo.setAttribute('src', './icons/bt_add_to_cart.svg');
    

    productInfoPicture.appendChild(productImgInfo);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoPicture);
  
    productCard.appendChild(img);
    productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard);
  }
}


function renderProducts2(arr){
  for (product of arr){
    const htmlCards = `<div class="product-card">
    <img src= ${product.image} alt="">
    <div class="product-info">
      <div>
        <p>$${product.price}</p>
        <p>${product.name}</p>
      </div>  
      <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
      </figure>
    </div>
  </div>` 
  cardsContainer.innerHTML += htmlCards; 
  }
  
}


renderProducts(productList);