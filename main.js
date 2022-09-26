const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');

const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
carritoIcon.addEventListener('click', toggleCarritoAside);


// "element.classList": es una propiedad de solo lectura que muestra las clases dentro de una etiqueta en un HTML 
// "toggle(string[,forced])": es un método que cuando hay un solo argumento como en el ejemplo de abajo alterna el valor de la clase
// si la clase existe la elimina y si no la agrega. si va a compañada de un parametro o condicional como TRUE o FALSE añade o elimina el primer parametro
// ejemplo adicional
// añadir/eliminar visible, dependiendo de la condición, i menor que 10
// div.classList.toggle("visible", i < 10 );

function toggleDesktopMenu () {
    console.log('click')
    const isasideClosed = aside.classList.contains('inactive'); 

    if (!isasideClosed) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
    console.log (desktopMenu.classList);
}

function toggleMobileMenu () {
    console.log('click')
    const isasideClosed = aside.classList.contains('inactive'); 

    if (!isasideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside () {
    console.log('click')

    const ismobileMenuClosed = mobileMenu.classList.contains('inactive'); 
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive'); 
    
    if (!ismobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
        aside.classList.toggle('inactive');   
}

const productList = [];

productList.push({
    name:'bike',
    price:120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productList.push({
    name:'automovil',
    price:1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productList.push({
    name:'gun',
    price:220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});




/* 
<div class="cards-container">

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


for (product of productList) {
    const productCard = document.createElement ('div');
    productCard.classList.add ('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement ('div');
    productInfo.classList.add ('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);




    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('figure');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);


}

