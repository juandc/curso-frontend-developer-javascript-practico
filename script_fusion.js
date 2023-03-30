const $loginContainerActive = document.querySelector('.navbar-email');

//esta es mi clase que tengo que llamar para desktop menu que le ponga o le quite a mi elemento
const $desktopMenu = document.querySelector('.desktop-menu');
const $burguerMenu = document.querySelector('.menu');
const $shoppingCar = document.querySelector('.navbar-shopping-cart');
const $mobileMenu = document.querySelector('.mobile-menu');
const $productDetailCloseIcon = document.querySelector('.product-detail-close');

const $shoppingCartContainer = document.querySelector('#shoppingCartContainer');


const $productDetailContainer = document.querySelector('#productDetail');

const cardsContainer = document.querySelector('.cards-container');


function activeLogin (e) {

    // $desktopMenu.classList.toggle('inactive');

    //??? contains (e.target) ??

    if ($loginContainerActive.contains(e.target)) {

        const isAsideClose = $shoppingCartContainer .classList.contains('inactive');

        if (!isAsideClose) {
           $shoppingCartContainer.classList.add('inactive');
        };

        $desktopMenu.classList.toggle('inactive');
        console.log('Navbar');

    } else if ($desktopMenu.contains(e.target)) {
        
        console.log('Clickdentro');
        $desktopMenu.classList.remove('inactive');

    } else {
    
        console.log('click_fuera');
        $desktopMenu.classList.add('inactive');
        
    };


};

// $loginContainerActive.addEventListener('click', activeLogin); //showmenu
document.addEventListener('click', activeLogin);
$burguerMenu.addEventListener('click', toogleMobileMenu);
$shoppingCar.addEventListener('click', toogleCarAside);
$productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toogleMobileMenu () {

    const isAsideClose = $shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClose) {
        $shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    $mobileMenu.classList.toggle('inactive');

};

function toogleCarAside () {

    const isMobileMenuClosed = $mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        $mobileMenu.classList.add ('inactive');
    }

    const isProdcutDetailClose = $productDetailContainer.classList.contains('inactive');

    if (!isProdcutDetailClose) {
        $productDetailContainer.classList.add ('inactive');
    }

    $shoppingCartContainer.classList.toggle('inactive');

};

function openProductDetailAside (){

    $shoppingCartContainer.classList.add('inactive');

    $productDetailContainer.classList.remove('inactive');

};

function  closeProductDetailAside () {

    $productDetailContainer.classList.add('inactive');

}

const productsList = [];

productsList.push({
    name: "Bike",
    price: 120, 
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productsList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});

productsList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
});

productsList.push({
    name: "Xbox",
    price: 1000, 
    image: "https://cdn.pixabay.com/photo/2017/05/08/02/22/game-2294201_640.jpg",
});

productsList.push ({
    name:'Console Old',
    price: 600,
    image: 'https://cdn.pixabay.com/photo/2016/02/14/14/47/xbox-1199604_640.jpg'
});

productsList.push ({
    name:'Nintendo',
    price: 9000,
    image: 'https://cdn.pixabay.com/photo/2019/01/24/23/54/nintendo-switch-3953601_640.jpg'
});

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


function renderProducts (arr)  {

    for (product of arr) {


        const productCards = document.createElement('div');
    
        productCards.classList.add('product-card');
    
        const imgElement = document.createElement('img');
        imgElement.setAttribute('src', product.image);
        imgElement.addEventListener('click', openProductDetailAside);
        //product = {name, price, img} -> product.img
    
    
        const cardInfo = document.createElement('div');
    
        cardInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
    
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
    
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        //figure
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCard);
    
        cardInfo.append(productInfoDiv, productInfoFigure);
    
        productCards.append(imgElement, cardInfo);
    
        cardsContainer.appendChild(productCards);
    
    };


};

//functions with window.load example se crea una función y mandandola a llmar con el array que me envien cuando este llamando a mi funcion
renderProducts(productsList);

/*

¿FUNCIONA? ¿CÓMO?

Lo que hice fue crear una clase
las clases son como plantillas, por lo que nos podrían ayudar con los productos

ya que tiene muchos beneficios, como:

reutilizar código
código más legible
mayor escalado
modularizamos mejor
podemos agregarle funcionalidades únicas, dependiendo de lo que queremos que haga, como su propio renderizado


productList.map(function (product){ 
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
  productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

  productInfoFigure.appendChild(productImgCart);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);
});


Tip

Para no tener que escribir siempre (document.querySelector) podemos usar esta simplificación con una arrow function

const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');


for (product in productsList) {
  console.log(product);  
};

VM3833:2 0
VM3833:2 1
VM3833:2 2
undefined

for (product of productsList) {
  console.log(product.name);  
};

VM3861:2 Bike
VM3861:2 Sunglasses
VM3861:2 Bicycle seat bag
undefined



*/

// for (let i = 0; i < 100; i ++){document.write(i + "</br>")};