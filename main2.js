const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamMenu = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamMenu.addEventListener('click', toggleHamMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClose = aside.classList.contains('inactive');

    if (!isAsideClose) {
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')

    desktopMenu.addEventListener('mouseout', mouseDesktopMenu);
}

function mouseDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}

function toggleHamMenu() {
    const isAsideClose = aside.classList.contains('inactive');

    if (!isAsideClose) {
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')

    mobileMenu.addEventListener('mouseout', mouseoutHamMenu);
}
function mouseoutHamMenu() {
    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside() {
    const isDesktopMenu = desktopMenu.classList.contains('inactive')
    const isMobileMenu = mobileMenu.classList.contains('inactive')

    if (!isMobileMenu) {
        mobileMenu.classList.add('inactive')
    } else if (!isDesktopMenu) {
        desktopMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive')

    /*     aside.addEventListener('mouseout', mouseoutCarritoIcon); */
}

function mouseoutCarritoIcon() {
    aside.classList.toggle('inactive')
}

const productList = [];
productList.push({
    name: 'Bike Rally',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Bike GW',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Bike Venzo',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

/* guia de html
    <div class="product-card">
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="">
                <div class="product-info">
                    <div>
                        <p>$120,00</p>
                        <p>Bike</p>
                    </div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div> */

//se utiliza una funcion para acoger el codigo que crea, organiza y muestra el html de los productos
function renderProducts (arrs) {
    for (product of arrs) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        //imagen del producto
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
        //info del producto
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        const productInfoDiv = document.createElement('div');
        const productInfoPrice = document.createElement('p');
        productInfoPrice.innerHTML = '$' + product.price;
        const productInfoName = document.createElement('p');
        productInfoName.innerHTML = product.name;
        // imagen de carrito
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
        //insertando elementos a bloques
        productInfoFigure.appendChild(productImgCart);//img en figure
    
        productInfoDiv.appendChild(productInfoPrice);//precio en div
        productInfoDiv.appendChild(productInfoName);// nombre en div
    
        productInfo.appendChild(productInfoDiv); //div en product-info
        productInfo.appendChild(productInfoFigure);//figure en product-info
    
        productCard.appendChild(productImg);//img a product-card
        productCard.appendChild(productInfo);//product-info a product-card
    
        cardsContainer.appendChild(productCard);//metemos todo en el div contenedor en el html
    }
}

renderProducts(productList)