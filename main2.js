const menuEmail=document.querySelector('.navbar-email');    //selecciona el elemento con la clase navbar-email
const menuHamIcon=document.querySelector('.menu');      //selecciona el elemento con la clase menu
const menuCarritoIcon=document.querySelector('.navbar-shopping-cart');      //selecciona el elemento con la clase navbar-shopping-cart
const desktopMenu=document.querySelector('.desktop-menu');    //selecciona el elemento con la clase desktop-menu
const mobileMenu=document.querySelector('.mobile-menu');    //selecciona el elemento con la clase mobile-menu
const shoppingCartContainer=document.querySelector('#shoppingCartContainer');      //selecciona el elemento con la clase product-detail
const cardsContainer=document.querySelector('.cards-container');    //selecciona el elemento con la clase cards-container


menuEmail.addEventListener('click',toggleDesktopMenu); //se agrega un evento al hacer click en el menuEmail
menuHamIcon.addEventListener('click',toggleMobileMenu); //  se agrega un evento al hacer click en el menuHamIcon
menuCarritoIcon.addEventListener('click',toggleCarritoAside); // se agrega un evento al hacer click en el menuCarritoIcon

    //ejecuta la funcion toggleDesktopMenu

/* function toggleDesktopMenu(){ //funcion que se ejecuta al hacer click en el menuEmail
const isAsideClosed=aside.classList.contains('inactive'); //variable que verifica si el aside esta cerrado
if(!isAsideClosed){aside.classList.add('inactive');} //si el aside esta cerrado se agrega una clase al aside
desktopMenu.classList.toggle('inactive'); //se agrega una clase al desktopMenu
} */

 // funcion mejorada
function toggleDesktopMenu(){ //funcion que se ejecuta al hacer click en el menuEmail
    //const isAsideClosed=aside.classList.contains('inactive'); //variable que verifica si el aside esta cerrado
    shoppingCartContainer.classList.add('inactive'); //si el aside esta cerrado se agrega una clase al aside
    desktopMenu.classList.toggle('inactive'); //se agrega una clase al desktopMenu
    }

function toggleMobileMenu(){ //funcion que se ejecuta al hacer click en el menuHamIcon
//const isAsideClosed=aside.classList.contains('inactive'); //variable que verifica si el aside esta cerrado
shoppingCartContainer.classList.add('inactive'); //si el aside esta cerrado se agrega una clase al aside
mobileMenu.classList.toggle('inactive'); //se agrega una clase al mobileMenu
}

function toggleCarritoAside(){ //funcion que se ejecuta al hacer click en el menuCarritoIcon
//const isMobileMenuClosed=mobileMenu.classList.contains('inactive'); //variable que verifica si el mobileMenu esta cerrado
mobileMenu.classList.add('inactive'); //si el mobileMenu esta cerrado se agrega una clase al mobileMenu

shoppingCartContainer.classList.toggle('inactive');} //se agrega una clase al aside

    

// arreglos de productos
var listaProductos = [];
listaProductos.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
listaProductos.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
listaProductos.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
listaProductos.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
listaProductos.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
listaProductos.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
listaProductos.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
listaProductos.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


function renderProducts(array) { //funcion que recibe un arreglo de productos
    for(product of array){ //recorre el arreglo de productos
        const productCard  = document.createElement('div'); //crea un div
        productCard.classList.add('product-card'); //agrega una clase al div

        const productImg = document.createElement('img') //crea una imagen
        productImg.setAttribute('src', product.image) //agrega un atributo a la imagen

        const productInfo = document.createElement('div') //    crea un div
        productInfo.classList.add('product-info') //agrega una clase al div

        const productInfoDiv = document.createElement('div') //crea un div
        productInfoDiv.classList.add('product-info-div') //agrega una clase al div
        
        const productPrice = document.createElement('p') // crea un parrafo
        productPrice.innerText = '$'+ product.price; //agrega un texto al parrafo

        const productName = document.createElement('p') //crea un parrafo
        productName.innerText = product.name; //agrega un texto al parrafo

        const productInfoFigure = document.createElement('figure') //crea un figure
        const productImgCart = document.createElement('img') //crea una imagen

        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg') //agrega un atributo a la imagen
        
        productInfoDiv.appendChild(productPrice); //agrega un hijo al div
        productInfoDiv.appendChild(productName); //agrega un hijo al div

        productInfoFigure.appendChild(productImgCart) //agrega un hijo al figure
        productCard.appendChild(productImg); //agrega un hijo al div
        productCard.appendChild(productInfo); //agrega un hijo al div
      
        cardsContainer.appendChild(productCard); //agrega un hijo al div
    }
}
renderProducts(listaProductos); //llama a la funcion renderProducts y le pasa el arreglo de productos
console.log(renderProducts);