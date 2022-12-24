// ! aqui estan todas las variables que estamos utilizando
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu-icon')
const menuMobil = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const asideProductDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailAlone = document.querySelector('.product-detail-alone');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

// ! aqui esta el array de los productos
const productList = [];
productList.push(
    {
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
    {
    name: 'Televisor',
    price: 3200,
    image: 'https://elektragt.vtexassets.com/arquivos/ids/163209-800-auto?v=637505582100630000&width=800&height=auto&aspect=true'
},
    {
    name: 'Computer',
    price: 2500,
    image: 'https://www.max.com.gt/media/catalog/product/cache/40cff66e483d5074b1ae49efef994171/h/p/hp24df1501la_3.jpg'
},

);


// ! En esta funcion estamos agregando y quitando la clase inactive para que aparezca el User menu

const toggleDesktopMenu = () =>{

    const isCartClosed = asideProductDetail.classList.contains('inactive');
     if (!isCartClosed) {
        asideProductDetail.classList.add('inactive');
     }

     desktopMenu.classList.toggle('inactive');
}
menuEmail.addEventListener('click', toggleDesktopMenu);

// ! Muestra el menu mobil
const toogleMenuMobil = () =>{
    const isCartClosed = asideProductDetail.classList.contains('inactive');
     if (!isCartClosed) {
        asideProductDetail.classList.add('inactive');
     }
     
     menuMobil.classList.toggle('inactive');
}

menuIcon.addEventListener('click', toogleMenuMobil);


// ! Vamos a mostrar el menu del carrito

const toggleCartIcon = () =>{
    const isMobileMenuClosed = menuMobil.classList.contains('inactive');
    const isDesktopMenuclosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailAlone.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        menuMobil.classList.add('inactive');
    }

    if (!isProductDetailClosed) {
        productDetailAlone.classList.add('inactive');
    }
    
    if (!isDesktopMenuclosed) {
        desktopMenu.classList.add('inactive');
    }

    asideProductDetail.classList.toggle('inactive');
    
}

cartIcon.addEventListener('click', toggleCartIcon);

// ! Muestra el aside donde esta los detalles del producto
const openProductDetail = () =>{
    const isProductClose = productDetailAlone.classList.contains('inactive');
    asideProductDetail.classList.add('inactive');
     if (!isProductClose) {
        menuIcon.classList.add('inactive');
        menuMobil.classList.add('inactive');
     }

     productDetailAlone.classList.remove('inactive');
}

// todo Ocultar el product Detail
const closeProductDetail = () =>{
   
    productDetailAlone.classList.add('inactive');
}

productDetailCloseIcon.addEventListener('click', closeProductDetail);


const renderProducts=(arr) =>{

    for (const product of arr) {
    
        // !estamos creando un div con la clase product-card
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        // !Creamos la imagen y le mandamos el url por el comando setAtrribute
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        const productInfoDiv = document.createElement('div');
    
        // ! se cerea un parrafo y se agrega el precio.
        const pricePara = document.createElement('p');
        pricePara.innerText = '$' + product.price;
        
        const namePara = document.createElement('p');
        namePara.innerText = product.name;
    
        productInfoDiv.appendChild(pricePara);
        productInfoDiv.appendChild(namePara);
    
        // ! creamos la figura
        
        const productFigure = document.createElement('figure');
        const imgProduct = document.createElement('img');
        imgProduct.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productFigure.appendChild(imgProduct);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
    
        // !Agregamos la imagen info al productcard
        productCard.appendChild(productImg);
    
        // !Agregamos el div product info al productcard
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
        
    }
}


renderProducts(productList);