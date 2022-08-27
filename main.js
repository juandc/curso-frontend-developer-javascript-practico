const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const producDetailContaine = document.querySelector('#productDetail')
const producDetailCloseIcon = document.querySelector('.product-detail-close');


menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
producDetailCloseIcon.addEventListener('click', closeProductDetailAside)



const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "computador",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "sillas",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});



function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains("inactive");
  
    if (!isAsideClosed) {
      aside.classList.add("inactive");
    }
  
    desktopMenu.classList.toggle("inactive");
  }
  
  function toggleMobileMenu() {

    
    const isAsideClosed = aside.classList.contains("inactive");
  
    if (!isAsideClosed) {
      aside.classList.add("inactive");
    }
  
    mobileMenu.classList.toggle("inactive");
    closeProductDetailAside();
  }
  
  function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopmenuclosed = desktopMenu.classList.contains("inactive");
  
    if (!isMobileMenuClosed) {
      mobileMenu.classList.add("inactive");
    }
    if (!isDesktopmenuclosed) {
      desktopMenu.classList.add("inactive");
    }
  
  
    const isProductDetailClosed = producDetailContaine.classList.contains("inactive");
    ;
  
    if (!isProductDetailClosed) {
      producDetailContaine.classList.add("inactive");}
  
  
  
    aside.classList.toggle("inactive");
  }

function openProductDetailAsise(){    
    aside.classList.add('inactive');

    
    producDetailContaine.classList.remove('inactive')


}
 function closeProductDetailAside(){
    producDetailContaine.classList.add('inactive')

}


function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetailAsise);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productPrice.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
