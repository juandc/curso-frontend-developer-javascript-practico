const menuEmail=document.querySelector('.navbar-email');
const menuburguer=document.querySelector('.menu');
const menuCart=document.querySelector('.navbar-shopping-cart');
const closedCart=document.querySelector('.product-detail-close');

const desktopMenu=document.querySelector('.desktop-menu');
const mobileMenu=document.querySelector('.mobile-menu');
const shoppingCartContainer=document.querySelector('#shoppingCartContainer');
const cardsContainer=document.querySelector('.cards-container');
const productDetailContainer=document.querySelector('#productDetail');

menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu(){
  const isProductMenuClosed=shoppingCartContainer.classList.contains('inactive');
  const isproductDetailClosed=productDetailContainer.classList.contains('inactive');
  if(!isProductMenuClosed){
    shoppingCartContainer.classList.add('inactive');
  }
  if(!isproductDetailClosed){
    productDetailContainer.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}

menuburguer.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu(){
  const isProductMenuClosed=shoppingCartContainer.classList.contains('inactive');
  const isproductDetailClosed=productDetailContainer.classList.contains('inactive');
  if(!isProductMenuClosed){
    shoppingCartContainer.classList.add('inactive');
  }
  if(!isproductDetailClosed){
    productDetailContainer.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

menuCart.addEventListener('click', toggleProductMenu);
function toggleProductMenu(){
  const isMobileMenuClosed=mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed=desktopMenu.classList.contains('inactive');
  const isproductDetailClosed=productDetailContainer.classList.contains('inactive');
  if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');
  }
  if(!isDesktopMenuClosed){
    desktopMenu.classList.add('inactive');
  }
  if(!isproductDetailClosed){
    productDetailContainer.classList.add('inactive');
  }
  shoppingCartContainer.classList.toggle('inactive');
}

function openproductDetailAside(){
  productDetailContainer.classList.remove('inactive');
  const isDesktopMenuClosed=desktopMenu.classList.contains('inactive');
  const isProductMenuClosed=shoppingCartContainer.classList.contains('inactive');
  if(!isDesktopMenuClosed){
    desktopMenu.classList.add('inactive');
  }
  if(!isProductMenuClosed){
    shoppingCartContainer.classList.add('inactive');
  }
}

closedCart.addEventListener('click',productDetailClosed);
function productDetailClosed(){
  productDetailContainer.classList.add('inactive');
}
/*

<div class="product-card">
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
</div>
*/

const productList=[];
productList.push({
  name:'Pantalla',
  price:220,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name:'Computadora',
  price:620,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name:'bicy',
  price:120,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProduct(arr){
  for (producto of arr) {
    const productCard=document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg=document.createElement('img');
    productImg.setAttribute('src',producto.image);

    productImg.addEventListener('click', openproductDetailAside);
  
    const productInfo=document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv=document.createElement('div');
  
    const productPrice=document.createElement('p');
    productPrice.innerText='$'+producto.price;
    const productName=document.createElement('p');
    productName.innerText=producto.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productFigure=document.createElement('figure');
  
    const productImgAdd=document.createElement('img');
    productImgAdd.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productFigure.appendChild(productImgAdd);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProduct(productList);
