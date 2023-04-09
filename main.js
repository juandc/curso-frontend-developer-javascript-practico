const menuEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const iconMenuMobile = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');
const carritoCompras = document.querySelector('.navbar-shopping-cart');
const productDetailCarrito = document.querySelector("#shoppingCartContainer"); /*document.querySelector('.product-detail');*/
const listadoProductosInicio = document.querySelector('.cards-container');
const productDetail = document.querySelector('#productDetail');
const productDescriptionClose = document.querySelector('.product-description-close');
const productsAddCar = document.querySelector('.my-order-content');
const btnAddCar = document.querySelector('.add-to-cart-button');

window.onresize = ValidarMenuVisible;
menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenuMobile.addEventListener('click', toggleIconMenuMobile);
carritoCompras.addEventListener('click',toggleProductosCarrito);
productDescriptionClose.addEventListener('click', ProductoDetallesIconClose);
btnAddCar.addEventListener('click', addProductoCarrito);

const listadoProductos = crearProductos();
renderProducts(listadoProductos);


function toggleDesktopMenu(){
    if(!productDetailCarrito.classList.contains('inactive')){
        productDetailCarrito.classList.toggle('inactive');
    }
    if(!productDetail.classList.contains('inactive')){
        toggleProductoDetalles();
    }
    desktopmenu.classList.toggle('inactive');
}

function toggleIconMenuMobile(){
    if(!productDetailCarrito.classList.contains('inactive')){
        productDetailCarrito.classList.toggle('inactive');
    }
    if(!productDetail.classList.contains('inactive')){
        toggleProductoDetalles();
    }
    mobilemenu.classList.toggle('inactive');
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
    if(!productDetail.classList.contains('inactive')){
        toggleProductoDetalles();
    }
    productDetailCarrito.classList.toggle('inactive');
}

let productCard = undefined;

function toggleProductoDetalles (){

    if(!desktopmenu.classList.contains('inactive')) toggleDesktopMenu();
    if(!productDetailCarrito.classList.contains('inactive')) toggleProductosCarrito();
    if(productDetail.classList.contains('inactive') || this == productCard) productDetail.classList.toggle('inactive');
    
    if(this != window){
        const imagenProduct = productDetail.getElementsByTagName('img')[1];
        const producto = buscarProducto(this.id);
        imagenProduct.src = producto.image;
        imagenProduct.id = producto.id;
    
        const precio = productDetail.getElementsByTagName('p')[0];
        precio.innerText = '$' + producto.price;
        const nombre = productDetail.getElementsByTagName('p')[1];
        nombre.innerText = producto.name;
        const descripcion = productDetail.getElementsByTagName('p')[2];
        descripcion.innerText = producto.description;
    }    
    else productDetail.classList.add('inactive');
    productCard = this;
}

function ProductoDetallesIconClose(){
    productDetail.classList.add('inactive');
    desktopmenu.classList.add('inactive');
    mobilemenu.classList.add('inactive');
    productDetailCarrito.classList.add('inactive');
}

function buscarProducto (productId){
    const product_ = listadoProductos.find(function (producto){
        return (producto.id === productId)
    });
    return product_;
}

let numberProductsCar = 0;
let ValorTotalCarrito = 0;

function addProductoCarrito(){

    let producto = buscarProducto(this.parentNode.parentNode.getElementsByTagName('img')[0].id);    
    if(producto == undefined){
        producto = buscarProducto(this.parentNode.parentNode.getElementsByTagName('img')[1].id);
    }

    const productosCarrito = productsAddCar.getElementsByTagName('div')[0];
    const divshoppingCart = document.createElement('div');
    divshoppingCart.classList.add('shopping-cart');

    const figureProductCar = document.createElement('figure');
    const imageProductCar = document.createElement('img');
    imageProductCar.src = producto.image;
    imageProductCar.alt = producto.name;
    imageProductCar.id = producto.id;

    const nameProductCart = document.createElement('p');
    nameProductCart.innerText = producto.name;

    const priceProductCar = document.createElement('p');
    priceProductCar.innerText = '$' + producto.price;

    const iconClose = document.createElement('img');
    iconClose.src = "./icons/icon_close.png";
    iconClose.alt = "close";
    iconClose.style.cursor = 'pointer';
    iconClose.addEventListener('click', removeProductCar);
    iconClose.id = producto.id;

    figureProductCar.append(imageProductCar);
    divshoppingCart.append(figureProductCar, nameProductCart, priceProductCar, iconClose);
    productosCarrito.append(divshoppingCart);

    const divnumberProductsCar = document.getElementById('CantProductsCar');
    divnumberProductsCar.innerText = numberProductsCar += 1;

    const priceTotalCar = document.getElementById('priceTotalCar');
    priceTotalCar.innerText = '$' + (ValorTotalCarrito += producto.price);
}

function removeProductCar(){

    const productosCarrito = productsAddCar.getElementsByTagName('div')[0];

    for(let productCar of productosCarrito.getElementsByTagName('div')){        
        if(productCar.getElementsByTagName('img')[0].id === this.id){
            productosCarrito.removeChild(productCar);
            
            const divnumberProductsCar = document.getElementById('CantProductsCar');
            divnumberProductsCar.innerText = numberProductsCar -= 1;

            const producto = buscarProducto(this.id);
            const priceTotalCar = document.getElementById('priceTotalCar');
            priceTotalCar.innerText = '$' + (ValorTotalCarrito -= producto.price);
        }        
    }
}

function crearProductos(){
    const productList = [];

    productList.push({
        id: 'product_1',
        name: 'Bicicleta',
        price: 120,
        image: 'https://exitocol.vtexassets.com/arquivos/ids/16799339-800-auto?v=638137268530100000&width=800&height=auto&aspect=true',
        description: 'Boston X30 Negro/Azul Talla S, Con bloqueo'
    });
    productList.push({
        id: 'product_2',
        name: 'Televisor 32"',
        price: 350,
        image: 'https://exitocol.vtexassets.com/arquivos/ids/12296789-800-auto?v=637843599453570000&width=800&height=auto&aspect=true',
        description: 'Con el Smart TV LED 32LO68 BT ANDROID T2 accederás a diferentes contenidos a través de las aplicaciones. Además, podrás navegar por Internet, interactuar en redes sociales y divertirte con videojuegos.'
    });
    productList.push({
        id: 'product_3',
        name: 'Audifonos',
        price: 750,
        image: 'https://exitocol.vtexassets.com/arquivos/ids/15469650-800-auto?v=638041585111970000&width=800&height=auto&aspect=true',
        description: 'SLKJLKSJLDSJDKJSLDKJS'
    });
    productList.push({
        id: 'product_4',
        name: 'Portatil',
        price: 230,
        image: 'https://exitocol.vtexassets.com/arquivos/ids/14204274-800-auto?v=637957404582830000&width=800&height=auto&aspect=true',
        description: 'akslkjlkajdlkajlka'
    });
    productList.push({
        id: 'product_5',
        name: 'Silla',
        price: 560,
        image: 'https://exitocol.vtexassets.com/arquivos/ids/11116371-800-auto?v=637742816056170000&width=800&height=auto&aspect=true',
        description: 'ññlueqywkjajhaskdjhkajh'
    });
    productList.push({
        id: 'product_6',
        name: 'Disco Duro',
        price: 270,
        image: 'https://exitocol.vtexassets.com/arquivos/ids/254534-800-auto?v=637002248979100000&width=800&height=auto&aspect=true',
        description: 'lkajslkqwjlqkjwelk'
    });
    productList.push({
        id: 'product_7',
        name: 'Ventilador',
        price: 435,
        image: 'https://exitocol.vtexassets.com/arquivos/ids/14474326-800-auto?v=637980887204270000&width=800&height=auto&aspect=true',
        description: 'wqlkejsnas,mnalaiualkdalkdj'
    });
    productList.push({
        id: 'product_8',
        name: 'Escritorio',
        price: 630,
        image: 'https://exitocol.vtexassets.com/arquivos/ids/12895382-800-auto?v=637884065849070000&width=800&height=auto&aspect=true',
        description: 'lsjdlksjdoiwuen,mdskdhksdhk'
    });
    productList.push({
        id: 'product_9',
        name: 'Bolso',
        price: 389,
        image: 'https://exitocol.vtexassets.com/arquivos/ids/13518871-800-auto?v=637928826331800000&width=800&height=auto&aspect=true',
        description: 'kñlkasdywsbadhkjahdiuywqjksk'
    });
    productList.push({
        id: 'product_10',
        name: 'Impresora',
        price: 521,
        image: 'https://exitocol.vtexassets.com/arquivos/ids/11470885-800-auto?v=637768476830000000&width=800&height=auto&aspect=true',
        description: 'lñkñldkfiuykjskjksdhmnbxksh'
    });

    return productList;
}

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
        productImage.id = product.id;
        productImage.addEventListener('click', toggleProductoDetalles);
        productImage.src = product.image;
        productImage.alt = product.name;
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        productInfoFigure.addEventListener('click', addProductoCarrito);

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

