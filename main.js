// // Añadir una clase
// h1.classList.add('verde');
// // Eliminar una clase
// h1.classList.remove('ROJO');



const menuEmail = document.querySelector('.navbar-email');
const menuMobile = document.querySelector('.mobile-menu');
const shoppingCar = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');


const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu-burger');
const shoppingList = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
shoppingCar.addEventListener('click', toggleShoppingList);


// toggle (pone o quita la clase depende el caso)

// Toggle Menu Desktop
function toggleDesktopMenu() {
  const isShoppingListClosed = shoppingList.classList.contains('inactive');

  if (!isShoppingListClosed) {
    shoppingList.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}


// Toggle Menu Burger-Mobile
function toggleMobileMenu() {
  const isShoppingListClosed = shoppingCar.classList.contains('inactive');

  if (!isShoppingListClosed) {
    shoppingList.classList.add('inactive');
  }
  menuMobile.classList.toggle('inactive');

}


// Toggle Menu Shopping Car
function toggleShoppingList() {
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isMenuMobileClosed = menuMobile.classList.contains('inactive');

  if (!isDesktopMenuClosed || !isMenuMobileClosed) {
    desktopMenu.classList.add('inactive');
    menuMobile.classList.add('inactive');
  }
  shoppingList.classList.toggle('inactive');
}


const productList = [];

productList.push({
  name: 'bike',
  price: 120,
  imgProduct: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
  name: 'llanta',
  price: 20,
  imgProduct: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
  name: 'casco',
  price: 10,
  imgProduct: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
  name: 'Rueda',
  price: 10,
  imgProduct: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});



function listarProductos(arr) {
  for (product of arr) {
    const divProductCard = document.createElement('div');
    divProductCard.classList.add('product-card');
  
    const imagenProducto = document.createElement('img');
    imagenProducto.setAttribute('src', "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  
    const divProductInfo = document.createElement('div');
    divProductInfo.classList.add('product-info');
  
    const divProductInfoHijo = document.createElement('div');
  
    const parrafoPrecio = document.createElement('p');
    parrafoPrecio.innerText = '$' + product.price;
  
    const parrafoNombre = document.createElement('p');
    parrafoNombre.innerText = product.name;
  
    const icono = document.createElement('figure');
    const imgIcono = document.createElement('img');
    imgIcono.setAttribute('src', "./icons/bt_add_to_cart.svg");
  
    divProductInfoHijo.appendChild(parrafoNombre);
    divProductInfoHijo.appendChild(parrafoPrecio);
  
    icono.appendChild(imgIcono);
  
    divProductInfo.appendChild(divProductInfoHijo);
    divProductInfo.appendChild(icono);
  
    divProductCard.appendChild(imagenProducto);
    divProductCard.appendChild(divProductInfo);
  
    cardsContainer.appendChild(divProductCard);
  }
}

listarProductos(productList); 
