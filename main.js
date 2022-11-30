const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenuMovil = document.querySelector('.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobilMenu = document.querySelector('.mobile-menu');
const iconCarrito = document.querySelector('.navbar-shopping-cart');
const detalleCarrito = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenuMovil.addEventListener('click', toggleMobilMenu);
iconCarrito.addEventListener('click', toggleCartDetail);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
function toggleDesktopMenu(){
  const isdetalleCarritoClose = detalleCarrito.classList.contains('inactive');

  if (!isdetalleCarritoClose){
    detalleCarrito.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}

function toggleMobilMenu(){

  const isdetalleCarritoClose = detalleCarrito.classList.contains('inactive');

  if (!isdetalleCarritoClose){
    detalleCarrito.classList.add('inactive');
  }

  mobilMenu.classList.toggle('inactive');
  closeProductDetailAside();

}

function toggleCartDetail() {

  const ismobileMenuClose= mobilMenu.classList.contains('inactive');
  const isdesktopMenuClose= desktopMenu.classList.contains('inactive');
  const isproductDetailClose= productDetailContainer.classList.contains('inactive');

  if (!ismobileMenuClose){
    mobilMenu.classList.add('inactive');
  } 
  if (!isdesktopMenuClose){
    desktopMenu.classList.add('inactive');
  }
  if (!isproductDetailClose){
    productDetailContainer.classList.add('inactive');
  }

  detalleCarrito.classList.toggle('inactive');
}

function openProductDetailAside (){

  const isdetalleCarritoClose = detalleCarrito.classList.contains('inactive');

  if (!isdetalleCarritoClose){
    detalleCarrito.classList.add('inactive');
  } 

  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
  productDetailContainer.classList.add('inactive');
}

/* Consulta a los productos por medio de BD */

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Pantalla',
  price: 200,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Computador',
  price: 500,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Pantalla',
  price: 200,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Computador',
  price: 500,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


/* Función de cargar productos. */

function renderProducts(array){
  for (product of array){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
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