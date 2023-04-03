/*VARIABLES*/
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')

/*EVENT LISTENERS*/

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click' , toggleMenuMobile);
shoppingCartIcon.addEventListener('click', toggleAsideCart);

/*FUNCTIONS*/

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    if (!aside.classList.contains('inactive')){
        aside.classList.add('inactive')
    }
}

function toggleMenuMobile(){
    mobileMenu.classList.toggle('inactive');
    if (!aside.classList.contains('inactive')){
        aside.classList.add('inactive')
    }
}

function toggleAsideCart(){
    aside.classList.toggle('inactive');

    if (!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.add('inactive')
    }    
    if (!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.add('inactive')
    }
}

const productList = [];
productList.push({
    name:'bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'pantalla',
    price:220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'computador',
    price:500,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
/*PRODUCT CARD INSERT*/



function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');   
    
        const productInfodiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+ product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfodiv.appendChild(productPrice);    
        productInfodiv.appendChild(productName);    
    
        const productInfoFigure = document.createElement('figure');
        const productImageCard = document.createElement('img');
        productImageCard.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImageCard);    
    
        productInfo.appendChild(productInfodiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);