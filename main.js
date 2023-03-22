const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHambIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const arrow = document.querySelector('.arrow');


navEmail.addEventListener('click', toggleDesktopMenu);
menuHambIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetail);
arrow.addEventListener('click', closeCart);

function closeCart(){
    aside.classList.add('inactive');
}

function toggleMobileMenu(){
    const isAsideClose = aside.classList.contains('inactive');

    if (!isAsideClose) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
};

function toggleDesktopMenu(){
    const isAsideClose = aside.classList.contains('inactive');
    const isProductDetailClose = productDetail.classList.contains('inactive')

    if (!isAsideClose || !isProductDetailClose) {
        aside.classList.add('inactive');
        productDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
};

function toggleCarritoAside(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');

    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');

    const isProductDetailClose = productDetail.classList.contains('inactive');
    
    aside.classList.toggle('inactive');
    
    if (!isMobileMenuClose || !isDesktopMenuClose || !isProductDetailClose) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        productDetail.classList.add('inactive');
    };
};

function openProductDetail(){
    const cartClose = aside.classList.contains('inactive');
    const navEmailClose = desktopMenu.classList.contains('inactive');

    if (cartClose || navEmailClose){
        aside.classList.add('inactive');
        desktopMenu.classList.add('inactive')
    }

    productDetail.classList.remove('inactive');
}

function closeProductDetail(){
    productDetail.classList.add('inactive');
}

const productList = [];

productList.push({
    name: 'Celular',
    price: '1.600.000',
    image: 'https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push({
    name: 'Tv 60 pulgadas',
    price: '800.000',
    image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push({
    name: 'Bike',
    price: '300.000',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Alexa',
    price: '630.000',
    image: 'https://images.pexels.com/photos/4790267/pexels-photo-4790267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push({
    name: 'Setup gamer',
    price: '28.000.000',
    image: 'https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push({
    name: 'Ropa al por mayor',
    price: '1.000.000',
    image: 'https://media.istockphoto.com/id/1464365204/es/foto/la-ropa-de-moda-cuelga-de-una-percha.jpg?s=612x612&w=is&k=20&c=sdZNP9YK1Yhcw0iVuD6Gvvpqh5yEGmamTcx__DJaJsY='
});

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        //product = {name, price, image} -> product.image
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        
        const ProductName = document.createElement('p');
        ProductName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(ProductName)
    
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
