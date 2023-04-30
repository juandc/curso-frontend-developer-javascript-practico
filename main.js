const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');
const menuHamburguesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');
const productlist = [];



// MENÚ EMAIL

navbarEmail.addEventListener('click',() =>{
  const  productDetailInactive =  productDetail.classList.contains('inactive');

  if(!productDetailInactive){
    productDetail.classList.add('inactive')
  }

  desktopMenu.classList.toggle('inactive');
});

// MENÚ HAMBURGUESA

menuHamburguesa.addEventListener('click',() =>{
  const  productDetailInactive =  productDetail.classList.contains('inactive');

  if(!productDetailInactive){
    productDetail.classList.add('inactive');
  }
    mobileMenu.classList.toggle('inactive');
  
});

// CARRITO COMPRAS
menuCarrito.addEventListener('click',() =>{
  const mobileMenuInactive = mobileMenu.classList.contains('inactive');
  const desktopMenuInactive = desktopMenu.classList.contains('inactive');
  if(!mobileMenuInactive || !desktopMenuInactive ){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
  }

    productDetail.classList.toggle('inactive')


});

// PRODUCTOS DEL ARRAY PRODUCLIST (Lista)

productlist.push({name:'Bike',precio:120,imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'});
productlist.push({name:'Patines',precio:90,imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'});
productlist.push({name:'Patineta',precio:620,imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'});
productlist.push({name:'Patineta',precio:620,imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'});


  // FUNCION RECORRE EL PRODUCTLIST Y CREA LOS PRODUCTOS EN EL DOM
function ImprimirProductosDOM (listaProductos){
  listaProductos.forEach(product =>{

    // MAQUETACION DEL HTML EN JS
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const img =document.createElement('img');
    img.setAttribute('src',product.imagen);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv= document.createElement('div');
  
    const precio = document.createElement('p');
    precio.innerText = `$ ${product.precio}`;
  
    const productName = document.createElement('p');
    productName.innerText = `${product.name}`;
   
     const productFigure = document.createElement('figure');
    
    const productFigureImg = document.createElement('img');
    productFigureImg.setAttribute('src','/github-proyectos/frontend-js-practico/icons/bt_add_to_cart.svg');
  
    productFigure.append(productFigureImg);
    productInfoDiv.append(precio,productName);
    productInfo.append(productInfoDiv, productFigure);
    productCard.append(img,productInfo);
    cardsContainer.append(productCard);
 })
}

ImprimirProductosDOM(productlist);