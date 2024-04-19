// variables
const navEmail =document.querySelector('.navbar-email');
const desktop = document.querySelector('.desktop-menu')
const menuHamburguesa = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarrito = document.querySelector('.navbar-shopping-cart')
const shoppingCart =document.querySelector('#shoppingCart')
const cardsContainer = document.querySelector('.cards-container')


//eventos
navEmail.addEventListener('click',toggleDesktopMenu)
menuHamburguesa.addEventListener('click',toggleMobileMenu)
menuCarrito.addEventListener('click',toggleaside)


//funciones
function toggleDesktopMenu(){
//desktop.classList.toggle('inactive')
const escritorio = desktop.classList.contains('inactive');
 
if (!escritorio){
    shoppingCart.classList.add('inactive') 
   
}
 
mobileMenu.classList.toggle('inactive')  
}

function toggleMobileMenu(){
  const isAside = shoppingCart.classList.contains('inactive');
 
      if (!isAside){
        shoppingCart.classList.add('inactive') 
         
      }
       
     mobileMenu.classList.toggle('inactive')  
    }




function toggleaside(){
    
    const mobileMenuClose = mobileMenu.classList.contains('inactive');

    if (!mobileMenuClose){
        mobileMenu.classList.add('inactive') 
        
    }
    shoppingCart.classList.toggle('inactive')  
    

}
const productList = [];

productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
 
productList.push({
    name: 'pantalla',
    price: 500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
 
productList.push({
    name: 'computadora',
    price: 1000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'muñeca System',
    price: 69,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

/*
<div class="shopping-cart">
<figure>
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
</figure>
<p>Bike</p>
<p>$30,00</p>
<img src="./icons/icon_close.png" alt="close">
</div>
*/
function renderProducts(){
for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg =document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productName)
    productInfoDiv.appendChild(productPrice)

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')

productInfoFigure.appendChild(productImgCart)

productInfo.appendChild(productInfoDiv);
productInfo.appendChild(productInfoFigure);
productCard.appendChild(productImg);
productCard.appendChild(productInfo);


cardsContainer.appendChild(productCard);
}

}
// product = {name, price, image} -> product.image

renderProducts(productList);
console.log(product.image)