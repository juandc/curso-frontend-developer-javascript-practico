const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
carritoIcon.addEventListener('click', toogleasideCarrito);

function toogleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

function toogleasideCarrito() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.toggle('inactive');
  }
  if (!isDesktopMenuClosed) {
    desktopMenu.classList.toggle('inactive');
  }

  shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];

productList.push({
  name: 'bike',
  price: '100',
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'computer',
  price: '400',
  image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Computadora-PC.png/800px-Computadora-PC.png',
});

productList.push({
  name: 'car',
  price: '1000',
  image:
    'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D',
});

productList.push({
  name: 'bike',
  price: '100',
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'computer',
  price: '400',
  image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Computadora-PC.png/800px-Computadora-PC.png',
});

productList.push({
  name: 'car',
  price: '1000',
  image:
    'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D',
});

/* <div class='product-card'>
        <img
          src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          alt=''>
        <div class='product-info'>
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src='./icons/bt_add_to_cart.svg' alt=''>
          </figure>
        </div>
      </div>
  */

function renderProducts(arr) {

  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

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
  productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

  productInfoFigure.appendChild(productImgCart);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);

}
}

renderProducts(productList);

