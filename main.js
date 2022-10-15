const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);



function toggleDesktopMenu() {
  const isAsideClose = shoppingCartContainer.classList.contains('inactive');
  if (!isAsideClose){
    shoppingCartContainer.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}



function toggleMobileMenu() {
  const isAsideClose = shoppingCartContainer.classList.contains('inactive');
 
  if (!isAsideClose){
    shoppingCartContainer.classList.add('inactive');
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle('inactive');
}



function toggleCarritoAside() {
  const isMobileMenuClose = mobileMenu.classList.contains('inactive');

  
  if (!isMobileMenuClose){
    mobileMenu.classList.add('inactive');
  }


  const isProductDetailClose = productDetailContainer.classList.contains('inactive');

  
  if (!isProductDetailClose){
    productDetailContainer.classList.add('inactive');
  }

  shoppingCartContainer.classList.toggle('inactive');

  
}

function openProductDetailsAside(){

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
})

productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/987586/pexels-photo-987586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

productList.push({
  name: 'PC',
  price: 620,
  image: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

productList.push({
  name: 'Billetera',
  price: 15,
  image: 'https://images.pexels.com/photos/910122/pexels-photo-910122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

productList.push({
  name: 'pendrive',
  price: 220,
  image: 'https://images.pexels.com/photos/3631991/pexels-photo-3631991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

productList.push({
  name: 'Nike',
  price: 80,
  image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

function renderProducts(arr){
  for (product of arr) {

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);  
    productImg.addEventListener('click', openProductDetailsAside);
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
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');  
  
    productInfoFigure.appendChild(productImgCard);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardContainer.appendChild(productCard);
  
  }
}

renderProducts(productList);