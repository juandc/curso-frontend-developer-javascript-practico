const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');


const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
carritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

// "element.classList": es una propiedad de solo lectura que muestra las clases dentro de una etiqueta en un HTML 
// "toggle(string[,forced])": es un método que cuando hay un solo argumento como en el ejemplo de abajo alterna el valor de la clase
// si la clase existe la elimina y si no la agrega. si va a compañada de un parametro o condicional como TRUE o FALSE añade o elimina el primer parametro
// ejemplo adicional
// añadir/eliminar visible, dependiendo de la condición, i menor que 10
// div.classList.toggle("visible", i < 10 );

function toggleDesktopMenu () {
    console.log('click')
    const isasideClosed = shoppingCartContainer.classList.contains('inactive'); 

    if (!isasideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
    console.log (desktopMenu.classList);
}

function toggleMobileMenu () {
    console.log('click')
    const isasideClosed = shoppingCartContainer.classList.contains('inactive'); 
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive'); 

    if (!isasideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside () {
    console.log('click')

    const ismobileMenuClosed = mobileMenu.classList.contains('inactive'); 
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive'); 
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive'); 
    
    if (!ismobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }



        shoppingCartContainer.classList.toggle('inactive');   
}

function openProductDetailAside ( ) {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside ( ) {
    productDetailContainer.classList.add('inactive')

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

productList.push({
    name:'mamahuevo',
    price:220000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});





function renderProducts(arr) {

    for (product of arr) {
        const productCard = document.createElement ('div');
        productCard.classList.add ('product-card');


        // product= {name, price, image} --> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
    
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
}

renderProducts(productList);
