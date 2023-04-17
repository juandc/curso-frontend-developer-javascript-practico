const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const movileMenu = document.querySelector('.mobile-menu');
const closeProductDetail = document.querySelector('.product-detail-second-close');
const shoppingCart= document.querySelector('.image-shopping-cart');
const productDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productdetailsecond = document.querySelector('.product-detail-second');
const darken = document.querySelector('.darken');


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMovileMenu);
shoppingCart.addEventListener('click', toggleDetail);
closeProductDetail.addEventListener('click', cerrarDetail);

function toggleDesktopMenu() {
    productDetail.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
    productdetailsecond.classList.add('inactive');
    darken.classList.add('inactive');
}

function toggleMovileMenu() {
    movileMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');
    darken.classList.add('inactive');
}

function toggleDetail() {
    movileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productdetailsecond.classList.add('inactive');
    productDetail.classList.toggle('inactive');
    darken.classList.add('inactive');
}

function openDetail() {
    productdetailsecond.classList.remove('inactive');
    movileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetail.classList.add('inactive')
    darken.classList.remove('inactive');
}

function cerrarDetail() {
    productdetailsecond.classList.add('inactive');
    darken.classList.add('inactive');
}



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
    name: 'Computadora',
    price: 600,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProduct(arr) {
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openDetail);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);

        cardsContainer.appendChild(productCard);

        
    }
}

renderProduct(productList);