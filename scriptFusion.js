const menuEmail = document.querySelector (".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const iconeMobileMenu = document.querySelector(".menu");
const menuCarrito = document.querySelector(".product-detail")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const cardContainer = document.querySelector(".cards-container")

menuEmail.addEventListener ("click", showDesktopMenu);
iconeMobileMenu.addEventListener ("click", showMobileMenu);
menuCarritoIcon.addEventListener ("click", showShoppingMenu);

function showDesktopMenu () {
   desktopMenu.classList.toggle("inactive");
}

function showMobileMenu () {
   mobileMenu.classList.toggle("inactive");
}

function showShoppingMenu () {
   menuCarrito.classList.toggle ("inactive");  
}


const productList = [];
productList.push ({
   name: "bike",
   price: 120,
   image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push ({
   name: "pantalla",
   price: 200,
   image: "https://th.bing.com/th/id/OIP.8r7HumlZNbYSoJwT46SueAHaE8?pid=ImgDet&rs=1",
});


productList.push ({
   name: "pc",
   price: 700,
   image: "https://th.bing.com/th/id/R.654020a8a7e61bd770ffe80b7e191128?rik=WFb149RY2yVWnQ&pid=ImgRaw&r=0",
});

productList.push ({
   name: "tv",
   price: 800,
   image: "https://th.bing.com/th/id/R.a988390738d846e7f5f8687161e6daaf?rik=YKyzNyl96rL8Aw&pid=ImgRaw&r=0",
});

productList.push ({
   name: "tv",
   price: 50,
   image: "https://th.bing.com/th/id/R.22d5e53bca43907b8c1852435e9432d3?rik=qWWtlEiosKJByA&riu=http%3a%2f%2fblog.linio.com.mx%2fwp-content%2fuploads%2f2018%2f11%2fhistoria-tv.jpg&ehk=IncbIh19eMJFVZ8y7tSWIdNdVLiiyRc6wf7vv767VMI%3d&risl=&pid=ImgRaw&r=0",
});

productList.push ({
   name: "audiculares",
   price: 100,
   image: "https://s3-eu-west-3.amazonaws.com/web-magazines/entornos/deployment/mine/wp-content/uploads/2020/01/21145638/cascos1.jpg",
});


productList.push ({
   name: "audiculares",
   price: 120,
   image: "https://th.bing.com/th/id/OIP.87jgObKtw8qi0Ed3TwUHZAHaEU?pid=ImgDet&rs=1",
});

 // for of y for in

// for (product of productList) {console.log(product.name)}

// VM1339:1 bike
// VM1339:1 pantalla
// VM1339:1 pc

// for (product in productList) {console.log(product)}
// VM1363:1 0
// VM1363:1 1
// VM1363:1 2


{/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> */}


function renderProducts (arr) {
   for (product of productList) {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
   
      // product = {name, price, image } = product.image
      const img = document.createElement("img");
      img.setAttribute("src", product.image);
   
      const productInfo = document.createElement("div");
      productInfo.classList.add("product-info");
   
      const productInfoDiv = document.createElement("div");
   
      const productPrice = document.createElement("p");
      productPrice.innerHTML = "$" + product.price;
   
      const productName = document.createElement("p")
      productName.innerHTML = product.name;
   
      
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
      
      const productInfoFigure = document.createElement("figure");
      const productImgCart = document.createElement("img");
      productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
   
      productInfoFigure.appendChild(productImgCart);
   
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);
   
      productCard.appendChild(img);
      productCard.appendChild(productInfo);
   
      cardContainer.appendChild(productCard)
   
   }
}
renderProducts (productList);