const menuEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const iconMenuMobile = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');
const carritoCompras = document.querySelector('.navbar-shopping-cart');
const productDetailCarrito = document.querySelector('.product-detail');
const listadoProductosInicio = document.querySelector('.cards-container');

window.onresize = ValidarMenuVisible;
menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenuMobile.addEventListener('click', toggleIconMenuMobile);
carritoCompras.addEventListener('click',toggleProductosCarrito);

function toggleDesktopMenu(){
    desktopmenu.classList.toggle('inactive');
    if(!productDetailCarrito.classList.contains('inactive')){
        productDetailCarrito.classList.toggle('inactive');
    }
}

function toggleIconMenuMobile(){
    mobilemenu.classList.toggle('inactive');
    if(!productDetailCarrito.classList.contains('inactive')){
        productDetailCarrito.classList.toggle('inactive');
    }
}

function ValidarMenuVisible(){
    if(window.innerWidth <= 640){
        if(!desktopmenu.classList.contains('inactive')) desktopmenu.classList.add('inactive');
    }
    else {
        if(!mobilemenu.classList.contains('inactive')) mobilemenu.classList.add('inactive');
    }
}

function toggleProductosCarrito(){
    if(!desktopmenu.classList.contains('inactive')){
        toggleDesktopMenu();
    }
    if(!mobilemenu.classList.contains('inactive')){
        toggleIconMenuMobile();
    }
    productDetailCarrito.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla 32"',
    price: 350,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Audifonos',
    price: 750,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Portatil',
    price: 230,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Silla',
    price: 560,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Disco Duro',
    price: 270,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Ventilador',
    price: 435,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Escritorio',
    price: 630,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bolso',
    price: 389,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Impresora',
    price: 521,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

renderProducts(productList);

function renderProducts(arrProduct){
    for(product of arrProduct){
        /*listadoProductosInicio.innerHTML += 
        `<div class="product-card">
            <img src="${product.image}" alt="">
            <div class="product-info">
                <div>
                    <p>$${product.price}</p>
                    <p>${product.name}</p>
                </div>
                <figure>
                    <img src="./icons/bt_add_to_cart.svg" alt="">
                </figure>
            </div>
        </div>`;*/
    
        const productCar = document.createElement('div');
        productCar.classList.add('product-card');
    
        const productImage = document.createElement('img');
        productImage.src = product.image;
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerHTML = '$' + product.price;
        
        const productName = document.createElement('p');
        productName.innerHTML = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const IconAddproductCar = document.createElement('img');
        IconAddproductCar.src = "./icons/bt_add_to_cart.svg";
    
        productInfoFigure.appendChild(IconAddproductCar);
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCar.append(productImage, productInfo);
        listadoProductosInicio.appendChild(productCar);
    
        //productInfoDiv.appendChild(productPrice);
        //productInfoDiv.appendChild(productName);
        //productInfo.appendChild(productInfoDiv);
        //productInfo.appendChild(productInfoFigure);    
        //productCar.appendChild(productImage);
        //productCar.appendChild(productInfo);
    }
}

