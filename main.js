const menuEmail = document.querySelector ('.navbar-email')
const desktopMenu = document.querySelector ('.desktop-menu')
const burguerMenu = document.querySelector ('.menu')
const mobileMenu = document.querySelector ('.mobile-menu')
const menuCarritoIcon = document.querySelector ('.navbar-shopping-cart')
const productDetailCloseIcon = document.querySelector ('.product-detail-close')
const shoppinCartContainer = document.querySelector ('#shoppinCartContainer')
const productDetailContainer = document.querySelector ('#product-detail')
const cardsContainer = document.querySelector ('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoShoppinCartContainer)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu (){
 desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu (){
    mobileMenu.classList.toggle('inactive');
   }

function toggleCarritoShoppinCartContainer(){
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')
    
    if (!isProductDetailClosed){
        productDetailContainer.classList.contains('inactive')
      }

      shoppinCartContainer.classList.add('inactive');

}

function toggleCarritoShoppinCartContainer () {
    shoppinCartContainer.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: "Bicicleta",
    precio: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: "Pantalla",
    precio: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: "Computadora",
    precio: 500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function openProductDetailAside (){
    productDetailContainer.classList.remove('inactive');
}

 function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

function renderProducts (arr){
    for (product of arr){
    
        const productCard = document.createElement ('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement ('img');
        productImg.setAttribute ('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
    
    
        const productInfo = document.createElement ('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement ('div');
    
        const productInfoName = document.createElement ('p');
        productInfoName.innerText = product.name;
    
        const productInfoPrecio = document.createElement ('p');
        productInfoPrecio.innerText = '$' + product.precio;
    
        productInfoDiv.appendChild (productInfoName);   
        productInfoDiv.appendChild (productInfoPrecio);
    
        const productInfoFigure = document.createElement ('figure');
        
        const productImgCard = document.createElement ('img');
        productImgCard.setAttribute ('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild (productImgCard);
        
        productInfo.appendChild (productInfoDiv);
        productInfo.appendChild (productInfoFigure);
        
        productCard.appendChild (productImg);
        productCard.appendChild (productInfo);
    
        cardsContainer.appendChild (productCard);
    
    }
}

renderProducts (productList);

  





