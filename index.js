const listeningEmail = document.querySelector(".navbar-email");
const destokpChange = document.querySelector(".desktop-menu");

const listeningMenu = document.querySelector(".menu");
const mobileChange = document.querySelector(".mobile-menu");

const carrito = document.querySelector(".navbar-shopping-cart");
const productos = document.querySelector("#shopingCardContain");

const ChangeMobile = () => {
  if (!productos.classList.contains("inactive")) {
    productos.classList.toggle("inactive");
  }
  mobileChange.classList.toggle("inactive");
};

const Change = () => {
  if (!productos.classList.contains("inactive")) {
    productos.classList.toggle("inactive");
  }
  destokpChange.classList.toggle("inactive");
};

const Active = () => {
  if (!mobileChange.classList.contains("inactive")) {
    mobileChange.classList.toggle("inactive");
  }
  productos.classList.toggle("inactive");
};

listeningEmail.addEventListener("click", Change);
listeningMenu.addEventListener("click", ChangeMobile);
carrito.addEventListener("click", Active);

/*
<div class="product-card">
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
      </div>
*/

const cardContainer = document.querySelector(".cards-container");

const products = [
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
  {
    name: "Bike",
    precio: "$ 12.000",
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computeer",
    precio: "$ 100'200.000",
    imagen: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
  },
  {
    name: "Phone",
    precio: "$ 1'200.000",
    imagen:
      "https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-black-mobile-png-image_5569395.jpg",
  },
];

const renderProducts = (products) => {
  products.map((product) => {
    const OpenProductDetailAsise = () => {
      productCardDedail.classList.remove("inactive");
    };

    const Closed = () => {
      productCardDedail.classList.add("inactive");
    };

    const productCardDedail = document.querySelector("#productDetail");
    const close = document.querySelector("#close");
    close.addEventListener("click", Closed);

    const productsCard = document.createElement("div");
    productsCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", product.imagen);
    img.addEventListener("click", OpenProductDetailAsise);

    const divInfo = document.createElement("div");
    divInfo.classList.add("product-info");

    const div = document.createElement("div");

    divInfo.appendChild(div);

    const productPrice = document.createElement("p");
    productPrice.innerHTML = product.precio;

    const productName = document.createElement("p");
    productName.innerHTML = product.name;

    div.appendChild(productPrice);
    div.appendChild(productName);

    const figure = document.createElement("figure");
    divInfo.appendChild(figure);

    const icono = document.createElement("img");
    icono.setAttribute("src", "./icons/bt_add_to_cart.svg");

    figure.appendChild(icono);

    productsCard.appendChild(img);
    productsCard.appendChild(divInfo);

    cardContainer.appendChild(productsCard);
  });
};

renderProducts(products);
