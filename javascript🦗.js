const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburgesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon =document.querySelector('.product-detail-close')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamburgesa.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClose = shoppingCartContainer.classList.contains('innactive')
    if(!isAsideClose){
        shoppingCartContainer.classList.add('innactive');
    }
    desktopMenu.classList.toggle('innactive');
}

function toggleMobileMenu(){
    const isAsideClose = shoppingCartContainer.classList.contains('innactive')
    if(!isAsideClose){
        shoppingCartContainer.classList.add('innactive');
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle('innactive');
}

function toggleCarritoAside(){
    const isMobileMenuClose = mobileMenu.classList.contains('innactive');
        if(!isMobileMenuClose){
            mobileMenu.classList.add('innactive');
        }
        const isProductDetailClose = productDetailContainer.classList.contains('innactive');
        if(!isProductDetailClose){
            productDetailContainer.classList.add('innactive');
        }
        shoppingCartContainer.classList.toggle('innactive');
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('innactive')
    productDetailContainer.classList.remove('innactive')
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('innactive')
}

/*para crear productos*/
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

function renderProducts(arr) {
    for (product of arr) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
    
      // product= {name, price, image} -> product.image
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
      productImg.addEventListener('click',openProductDetailAside)
    
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

