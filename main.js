const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktop);
menuBurguer.addEventListener('click', toggleMobile);
menuCart.addEventListener('click', toggleAside);

function toggleDesktop() {
  desktopMenu.classList.toggle('inactive');
}

function toggleMobile() {
  const isAsideOpen = aside.classList.contains('inactive');
  
  if(!isAsideOpen){
    aside.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}

function toggleAside() {
  const isMobileMenuOpen = mobileMenu.classList.contains('inactive');

  
  if(!isMobileMenuOpen){
    mobileMenu.classList.add('inactive');
  }
  
  aside.classList.toggle('inactive');
}

const productList = [];

productList.push({
  name: 'Bike',
  price: 120,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})

productList.push({
  name: 'Computer',
  price: 840,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})

productList.push({
  name: 'Alexa',
  price: 40,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})

/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
</div> */


for (product of productList){
  const productCard = document.createElement('div');
  productCard.setAttribute('class', 'product-card');

  const imageProduct = document.createElement('img');
  imageProduct.setAttribute('src', product.image)

  const infoProduct = document.createElement('div');
  infoProduct.setAttribute('class', 'product-info');

  const divPrecio = document.createElement('div');
  
  const pPrecio = document.createElement('p');
  pPrecio.innerHTML = '$ ' + product.price;
  const pNombre = document.createElement('p');
  pNombre.innerHTML = product.name;

  const figCart = document.createElement('figure');
  const imgCart = document.createElement('img');

  imgCart.setAttribute('src','./icons/bt_add_to_cart.svg')

  cardsContainer.append(productCard);
  productCard.append(imageProduct);
  productCard.append(infoProduct);
  infoProduct.append(divPrecio);
  infoProduct.append(figCart);
  divPrecio.append(pPrecio);
  divPrecio.append(pNombre);
  figCart.append(imgCart);
}

