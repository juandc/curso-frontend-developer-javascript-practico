let navBarEmail=document.querySelector('.navbar-email');
let desktopMenu=document.querySelector('.desktop-menu');
let mobileMenu=document.querySelector('.mobile-menu');
let menuHamburguesa=document.querySelector('.menu');

let shoppingCar=document.querySelector('.navbar-shopping-cart')
let productDetail=document.getElementsByClassName('product-detail')

navBarEmail.addEventListener('click',mostrarYQuitarMenu);
menuHamburguesa.addEventListener('click',mostrarYQuitarMenuMobile);
shoppingCar.addEventListener('click',mostrarYQuitarProductDetail);

let cardsContainer=document.querySelector('.cards-container')

function mostrarYQuitarMenu(){
    let isProductDetailOpen= !productDetail[0].classList.contains('inactivo');

    if(isProductDetailOpen){
        productDetail[0].classList.add('inactivo')
    }

    desktopMenu.classList.toggle('inactivo')
}

function mostrarYQuitarMenuMobile(){
    let isProductDetailOpen= !productDetail[0].classList.contains('inactivo');

    if(isProductDetailOpen){
        productDetail[0].classList.add('inactivo')
    }

    mobileMenu.classList.toggle('inactivo')
}

function mostrarYQuitarProductDetail(){
    let isMobileMenuOpen= !mobileMenu.classList.contains('inactivo');
    let isDesktopMenuOpen= !desktopMenu.classList.contains('inactivo');

    if(isDesktopMenuOpen){
        desktopMenu.classList.add('inactivo')
    }

    if(isMobileMenuOpen){
        mobileMenu.classList.add('inactivo')
    }

    productDetail[0].classList.toggle('inactivo')
}


let productList=[];
//Creando los productos manualmente
productList.push({
    name:'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Bike 2',
    price:220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Bike 3',
    price:320,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});





for (parametro of productList){
    const productCard= document.createElement('div');
    productCard.classList.add('product-card');

    

    const productImg = document.createElement('img');
    productImg.setAttribute('src', parametro.image);

    const productInfo=document.createElement('div');
    productInfo.classList.add('product-info');

    

    const productNameAndPriceContainer= document.createElement('div');
    const productPrice=document.createElement('p');
    productPrice.innerText= '$'+ parametro.price;
    const productName=document.createElement('p');
    productName.innerText= parametro.name;

    productNameAndPriceContainer.appendChild(productPrice);
    productNameAndPriceContainer.appendChild(productName);


    const productInfoFigure= document.createElement('figure');
    const productInfoFigureImg= document.createElement('img');
    productInfoFigureImg.setAttribute('src',"./icons/bt_add_to_cart.svg")

    productInfoFigure.appendChild(productInfoFigureImg);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    productInfo.appendChild(productNameAndPriceContainer);
    productInfo.appendChild(productInfoFigure);



    cardsContainer.appendChild(productCard)
     
};

