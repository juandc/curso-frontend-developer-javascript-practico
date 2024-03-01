const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuPhone = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const navbarShoppingCart = document.querySelector(".navbar-shopping-cart")
const productDetail = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')


menuEmail.addEventListener('click', toggleDesktopMenu);
menuPhone.addEventListener('click', togglePhone_menu);
navbarShoppingCart.addEventListener('click', toggle_my_order_menu);


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    
    if (!productDetail.classList.contains('inactive-my-order')) {
        productDetail.classList.add('inactive-my-order');
    }

}

function togglePhone_menu(){
    mobileMenu.classList.toggle('inactive-mobile');

    if (!productDetail.classList.contains('inactive-my-order')) {
        productDetail.classList.add('inactive-my-order');
    }
    

}

function toggle_my_order_menu(){
    productDetail.classList.toggle('inactive-my-order');

    if (!mobileMenu.classList.contains('inactive-mobile')) {
        mobileMenu.classList.add('inactive-mobile');
    }

    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }
    
    
}

const productList = []
productList.push(
    {
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);

productList.push(
    {
        name: 'Screen',
        price: 220,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);

productList.push(
    {
        name: 'Computer',
        price: 620,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);

/* <div class="product-card">
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

for (let i = 0; i < 20; i++) {
    productList.push(
        {
            name: 'Computer',
            price: 620,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
    );        
}


function renderProducts(arr){

    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src',product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
            const productInfoDiv = document.createElement('div');    
    
                const productPrice = document.createElement('p');
                productPrice.innerText = '$'+ product.price;
    
                const productName = document.createElement('p');
                productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
            const productImgCart = document.createElement('img');
            productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardsContainer.append(productCard);
     
    }

}

renderProducts(productList);
