const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close');
const productList = [];

productList.push({
  name:'bike',
  price:120,
  image: 'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


productList.push({
  name:'pantalla',
  price:150,
  image: 'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


productList.push({
  name:'Computadora',
  price:240,
  image: 'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


/* agregar eventos a los elementos*/ 

// muesta menu cuando se realiza el evento click (funcion desplegar menu)
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside)
productDetailClose.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu(){
/*
desktopMenu: Es una variable que hace referencia a un elemento HTML con la clase "desktopMenu".

classList: Es una propiedad de los elementos HTML que proporciona acceso a las clases CSS aplicadas a ese elemento.

toggle('inactive'): Es un método de la propiedad classList que alterna la presencia 
de la clase especificada en el elemento. Si la clase "inactive" está presente, 
se quita; si no está presente, se agrega.
*/
  desktopMenu.classList.toggle('inactive')
};


function toggleMobileMenu(){
  shoppingCartContainer.classList.add('inactive')
  mobileMenu.classList.toggle('inactive');
  productDetailContainer.classList.add('inactive')
}


function toggleCarritoAside(){
  mobileMenu.classList.add('inactive');
  shoppingCartContainer.classList.toggle('inactive');
  productDetailContainer.classList.add('inactive')
}




// for of itera sobre cada elemento, for if ietra sobre propiedades deobjetos.
function renderProducts(array){
  for (product of array){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);
  
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
  
  }
}


// llamada a funcion para  actualizar lista de productos.
renderProducts(productList)



// funcion para abrir el aside de detalles cuando hacemos click en imagen.
function openProductDetailAside() {
  productDetailContainer.classList.remove('inactive')
}


// cerrar detalles del prodcuto

function closeProductDetailAside(){
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive')
  mobileMenu.classList.toggle('inactive');
  mobileMenu.classList.add('inactive');
}