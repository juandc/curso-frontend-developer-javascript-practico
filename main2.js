//menu Email
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    listaCarrito.classList.add('inactive');
    productDetailContainer.classList.add("inactive")
    desktopMenu.classList.toggle('inactive');
    
}

// Boton hamburgesa
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

burgerMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    listaCarrito.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

//carrito de orden
const carritoMenu = document.querySelector(".navbar-shopping-cart");
const listaCarrito =document.querySelector(".product-detail");

carritoMenu.addEventListener("click", toggleCarritoMenu);


function toggleCarritoMenu() {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add("inactive")
    listaCarrito.classList.toggle('inactive');
    
}

//Lista de productos
const listaProductos = [];
const cardsContainer = document.querySelector(".cards-container")

listaProductos.push({
    name: "bike", 
    price: 100, 
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",    
});
listaProductos.push({
    name: "Pantalla", 
    price: 220, 
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",    
});
listaProductos.push({
    name: "Targeta", 
    price: 300, 
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",    
});
listaProductos.push({
    name: "Motor", 
    price: 700, 
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",    
});
listaProductos.push({
    name: "Carro", 
    price: 1500, 
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",    
});
listaProductos.push({
    name: "Avion", 
    price: 3000, 
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",    
});

function renderListaProducto() {
    for (producto of listaProductos) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const imgLista = document.createElement("img");
        imgLista.setAttribute("src", producto.img);
        imgLista.addEventListener("click", openPDaside)
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const div1 = document.createElement("div");
    
        const pprice = document.createElement("p");
        pprice.innerText = "$" + producto.price;
        
        const pname = document.createElement("p");
        pname.innerText = producto.name;
    
        const pfigure = document.createElement("figure");
        
        const pimg = document.createElement("img");
        pimg.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
    
        cardsContainer.appendChild(productCard);
        
        productCard.appendChild(imgLista);
        productCard.appendChild(productInfo);
        
        productInfo.appendChild(div1);
        productInfo.appendChild(pfigure);
    
        div1.appendChild(pname);
        div1.appendChild(pprice);
        
        pfigure.appendChild(pimg);       
    }
}

renderListaProducto(listaProductos);

//Detalles de Productos
const productDetailContainer = document.querySelector("#productDetail");
const botonClosePD = document.querySelector("#productDetailClose");

function openPDaside() {
    desktopMenu.classList.add('inactive');
    listaCarrito.classList.add('inactive');
    productDetailContainer.classList.remove("inactive")
}

botonClosePD.addEventListener("click", bClose)

function bClose () {
    productDetailContainer.classList.add("inactive")
}

