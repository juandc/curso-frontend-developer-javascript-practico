const menuEmail = document.querySelector (".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const iconeMobileMenu = document.querySelector(".menu");
/** el carrito a renderiza*/
const menuCarrito = document.querySelector(".product-detail")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const cardContainer = document.querySelector(".cards-container");
const productInfo = document.querySelector("#productInfo");

const aside = document.getElementById ("productInfo");

const carrito = []




menuEmail.addEventListener ("click", showDesktopMenu);
iconeMobileMenu.addEventListener ("click", showMobileMenu);
menuCarritoIcon.addEventListener ("click", showShoppingMenu);

renderProducts (productList);
renderMyOrder(productList);

const carritoCounter = document.querySelector("#carrito-counter")
const botonesCategorias = document.querySelectorAll(".boton-categoria");
 
function showDesktopMenu () {
   const isMenuCarritoClosed = menuCarrito.classList.contains("inactive");

   if (!isMenuCarritoClosed){
      menuCarrito.classList.add("inactive");
   }
   
   desktopMenu.classList.toggle("inactive");
}

function showMobileMenu () {
   const isMenuCarritoClosed = menuCarrito.classList.contains("inactive");

   if (!isMenuCarritoClosed){
      menuCarrito.classList.add("inactive");
   }
   
   
   mobileMenu.classList.toggle("inactive");
}

function showShoppingMenu () {
   const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

   if (!isMobileMenuClosed) {
      mobileMenu.classList.add('inactive');
   }
    const isProductInfoClosed = productInfo.classList.contains("inactive");
   if (!isProductInfoClosed) {
      productInfo.classList.add('inactive');
   }
   const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

   if (!isDesktopMenuClosed){
      desktopMenu.classList.add("inactive");
   }
   
   
   menuCarrito.classList.toggle ("inactive");  
}

function openProductInfo () {
   const isMenuCarritoClosed = menuCarrito.classList.contains("inactive");

   if (!isMenuCarritoClosed){
      menuCarrito.classList.add("inactive");
   }
   
   productInfo.classList.remove ("inactive");
}
function closeProductInfo () {
   productInfo.classList.add ("inactive");

}



const eliminarDelCarrito = (productId) => {
      const item = carrito.find((product) => product.id === productId);
      const i = carrito.indexOf(item);
      carrito.splice(i, 1);
      carritoCounter.innerHTML =`${carrito.length}`;
      item.quantity = 1;
      renderMyOrder();
}  



function renderMyOrder () {
   const orderContent = document.querySelector(".my-order-content");
   orderContent.innerHTML = '';

   carrito.forEach ((product) => {

      const productContainer = document.createElement("div");
      const xButton = document.createElement("button");
      const removeButton = document.createElement("button");
      const addButton = document.createElement("button");

      xButton.innerHTML= "Delete"
      addButton.innerHTML = "+"
      removeButton.innerHTML = "-"
      
      const removeQuantity = (productQ) => {
   
         if (productQ === 1){
            callback ();
         }else{
            const actualItem = carrito.find((product2) => product2.name === product.name)

            actualItem.quantity--
         }
         
         renderMyOrder();
      }
      
      const addQuantity = () => {
         const actualItem = carrito.find((product2) => product2.name === product.name)

         actualItem.quantity++

         renderMyOrder();
      }
      
     
   
      const callback2= () => {
         addQuantity(product.quantity)
      }

      const callback3= () => {
         removeQuantity(product.quantity)
      }
      
      xButton.addEventListener("click", callback);
      removeButton.addEventListener("click", callback3);
      addButton.addEventListener("click", callback2);
      xButton.setAttribute("id", "button3");
      removeButton.setAttribute("id", "button3");
      addButton.setAttribute("id", "button3");
      
      productContainer.innerHTML = `
      <div class="shopping-cart">
      <figure>
        <img src="${product.image}" alt="">
      </figure>
      <p>${product.name}</p>
      <p>${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}</p>
      <p>${product.quantity}</p>
    </div>
    `

    orderContent.appendChild(productContainer);
    productContainer.appendChild(addButton);
    productContainer.appendChild(removeButton);
    productContainer.appendChild(xButton);
    
    
   });

   const valorTotal = document.querySelector("#total");

   valorTotal.innerHTML =`${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(carrito.reduce((accumulator, product) => accumulator + product.price * product.quantity, 0))}`

 }

 function renderProducts (arr) {
   arr.forEach ((product) => {
      const productCard = document.createElement("div");

      const callback = () => {
         const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
         if (repeat){
            carrito.map((prod) => {
               if(prod.id === product.id){
                 ++ prod.quantity;
               } 
               
            });
         } 
         else {
            product.addToCart()

         };
         renderMyOrder();
         carritoCounter.innerHTML =`${carrito.length}`;

      }

      const addToCartButton = document.createElement('button')
      addToCartButton.setAttribute("id", "btn-add-to-cart")
      addToCartButton.innerText = 'add to cart'
      addToCartButton.addEventListener('click',  callback)
      
      productCard.id = product.name
      productCard.classList.add("product-card");

     productCard.innerHTML =
     `<img src= "${product.image}" id= "${product.id}" class="boton-imagen" onclick= " >
     <div class="product-info">
       <div>
         <p class = "price">${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}</p>
         <p>${product.name}</p>
       </div>
     </div>`;
   
     productCard.appendChild(addToCartButton)

     cardContainer.appendChild (productCard);

   })
 
}





botonesCategorias.forEach(boton => {
   boton.addEventListener("click", (e) => {
      
      
      botonesCategorias.forEach(boton => boton.classList.remove("active"))
      
      e.currentTarget.classList.add("active");
      
      cardContainer.innerHTML = ""
      
      if(e.currentTarget.id != "all"){
      const choosenProduct = productList.filter(product => product.type == e.currentTarget.id);
      
      renderProducts (choosenProduct);
      } else {
         renderProducts (productList);
      }
   })
})

function renderMyProductInfo (array) {

  
   array.forEach ((product) => {
   
 


      const productInfoContainter = document.createElement("div");
      productInfoContainter.setAttribute("id", "product-info");


   productInfoContainter.innerHTML=`
         <div id="product-info-close">
         <img src="./icons/icon_close.png" alt="close">
         </div>
        <img src=${product.image} id= "close" >
        <p>${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}</p>
        <p>${product.name}</p>
        <p>${product.description}</p>
        <button class="primary-button-info add-to-cart-button-info" >
        <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
        Add to cart
      </button>
      `
      aside.appendChild(productInfoContainter);

   })

 }

 let botonImagen = document.querySelectorAll(".boton-imagen");

  botonImagen.forEach(boton => {
   boton.addEventListener("click", (e) => {
      
      botonImagen.forEach (boton => boton.classList.remove("active"));

      e.currentTarget.classList.add("active");

      aside.innerHTML= ""

      if(e.currentTarget.id){
         const choosenImg = productList.filter(product => product.id == e.currentTarget.id);
         
         openProductInfo ();
         renderMyProductInfo (choosenImg);
         
         const productInfoClose = document.querySelector("#product-info-close");
         productInfoClose.addEventListener ("click", closeProductInfo);

         
         }else {
            console.log("error")
         }

   })
  })



