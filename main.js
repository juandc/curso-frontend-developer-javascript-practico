var menuEmail = document.querySelector('.navbar-email');
var desktopMenu = document.querySelector('.desktop-menu');
var menuHamburguer = document.querySelector('.menu');
var mobileMenu = document.querySelector('.mobile-menu')
var menuCarrito = document.querySelector('.navbar-shopping-cart');
var shoppingCartContainer = document.querySelector('#shoppingCartContainer');
var cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguer.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){
    if(!shoppingCartContainer.classList.toggle('inactive')){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    if(!shoppingCartContainer.classList.toggle('inactive')){
        shoppingCartContainer.classList.add('inactive');
    }
        mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){

    if(!desktopMenu.classList.toggle('inactive')){
        desktopMenu.classList.add('inactive');
    }
    if(!mobileMenu.classList.toggle('inactive')){
        mobileMenu.classList.add('inactive');
    } 
    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Bike 2',
    price: 150,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Bike 3',
    price: 200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

renderProducts(productList);

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
     
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = 'S/' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
     
        //Insertar p precio y p name en div
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        const productFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
     
        //Insertar img en figure
        productFigure.appendChild(productImgCard);
     
        //Insertar div y figure en div product-card
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
     
        //Insertar div product-info e img en product-card
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
     
        //Insertar div product-car a div cards-container
         cardsContainer.appendChild(productCard);
     }
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
*/