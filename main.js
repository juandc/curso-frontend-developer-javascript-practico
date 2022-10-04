const menuEmail =document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const carritoCompras = document.querySelector(".product-detail");
const cardContainer = document.querySelector(".cards-container");

menHamIcon.addEventListener("click", aparecerMenuMobil);
menuEmail.addEventListener("click", aparecerMenu);
menuCarritoIcon.addEventListener("click", aparecerMenuCarrito);

function aparecerMenu() {
  desktopMenu.classList.toggle("inactive");
  carritoCompras.classList.add("inactive");
}

function aparecerMenuMobil() {
  mobileMenu.classList.toggle("inactive");
  carritoCompras.classList.add("inactive");
}

function aparecerMenuCarrito() {
  carritoCompras.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
}

const productArrayList = [];

productArrayList.push({
  nombre: "bike",
  precio: 120,
  imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productArrayList.push({
  nombre: "Computadora",
  precio: 60,
  imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productArrayList.push({
  nombre: "Calendario especial",
  precio: 15,
  imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productArrayList.push({
  nombre: "caneca",
  precio: 34,
  imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})


/*<div class="product-card">
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
  <div class="product-info"> divProductInfo
    <div> divCaract
      <p>$120,00</p>
      <p>Bike</p>
    </div>
    <figure> imgProducto
      <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
  </div>
</div> */

//La recomendación de JUan DC era mejor colocar esto en una función para poder reutilizar código.
//Pienso que también es bueno para reutilizar código.

function renderProducts(arr) {
  for (product of arr) {
  const divCard= document.createElement("div");
  divCard.classList.add("product-card");

  const productCardImg= document.createElement("img");
  productCardImg.setAttribute("src", product.imagen);

  
  //Product-info, tiene dos hijos de etiqueta p

  const divProductInfo = document.createElement("div");
  divProductInfo.classList.add("product-info");
  
  const divCaract = document.createElement("div");
    
  const precio =document.createElement("p");
  precio.innerText= "$$$" + product.precio;
  const nombre =document.createElement("p");
  nombre.innerText=product.nombre;

  divCaract.appendChild(precio); //Padre de las 2 p
  divCaract.appendChild(nombre); //Padre de las 2 p

  
  //La imagen de cada producto

  const imgProducto = document.createElement("figure");
  const imagenReal = document.createElement("img");
  imagenReal.setAttribute("src", "./icons/bt_add_to_cart.svg");

  imgProducto.appendChild(imagenReal); //padre de la imagen contenida en figure

  divProductInfo.appendChild(divCaract); // Padre de las info y de la imagen del producto.
  divProductInfo.appendChild(imgProducto); // Padre de las info y de la imagen del producto.


  divCard.appendChild(productCardImg); // El padre de todos
  divCard.appendChild(divProductInfo); // El padre de todos

  cardContainer.appendChild(divCard); //El que contiene todos los elementos de html de la sección.

}
}

renderProducts(productArrayList); // Esto para renderizar pero con orden de na función. Esto podría servir para cuando demos click en algún elemento se despliegue la lista.
