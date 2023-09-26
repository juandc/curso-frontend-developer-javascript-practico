
document.addEventListener("DOMContentLoaded", function () {
    const navEmail = document.querySelector('.navbar-email');
    const desktopMenu = document.querySelector('.desktop-menu');
    const burguerMenu = document.querySelector('.menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
    const aside = document.querySelector('.product-detail');
    
    navEmail.addEventListener("click", toggleDesktopMenu);
    burguerMenu.addEventListener("click", toggleMobileMenu);
    menuCarritoIcon.addEventListener('click', toggleCarritoAside);
    
    function toggleDesktopMenu() {
        const isAsideClosed = aside.classList.contains('inactive');
        /* desktopMenu.classList.toggle('inactive'); */
        if(!isAsideClosed) {
            aside.classList.add('inactive');
        }
        desktopMenu.classList.toggle('inactive');
    }
    
    function toggleMobileMenu() {
        const isAsideClosed = aside.classList.contains('inactive');
    /*     mobileMenu.classList.toggle('inactive'); */
    
        if(!isAsideClosed) {
            aside.classList.add('inactive');
        }/* la condicion en cuestion se basa en que si el aside no está cerrado, entonces se le añade la clase inactive para cerrarlo */
        mobileMenu.classList.toggle('inactive');
    }
    
    function toggleCarritoAside() {
        const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
        const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
        
        if(!isMobileMenuClosed) {
            mobileMenu.classList.add('inactive');
        } /* la condicion en cuestion se basa en que si el mobileMenu no está cerrado, entonces se le añade la clase inactive para cerrarlo */
    
        if(!isDesktopMenuClosed){
            desktopMenu.classList.toggle('inactive');
        } /* aca tambinen se pone un condicional por si está abierto el menudesktop para cerrarlo automaticamente y no que simplemente quede solapado por el productDetail */
    
    
        aside.classList.toggle('inactive');
    
    }

    const cardsContainer = document.querySelector('.cards-container');
    
    const productList = [];
    productList.push({
        name: 'bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    })

    productList.push({
        name: 'pantalla',
        price: 220,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    })

    productList.push({
        name: 'Computador',
        price: 620,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    })

    
    
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

    function renderProduct(arr) {
        for (product of arr) {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
    
            //product = {name, price, image} -> product.image
            const productImg = document.createElement('img');
            productImg.setAttribute('src', product.image);
    
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
    
            const productInfoDiv = document.createElement('div');
    
            const productPrice = document.createElement('p');
            productPrice.innerHTML = '$' + product.price;
            const productName = document.createElement('p');
            productName.innerText = product.name;
    
            productInfoDiv.appendChild(productPrice);
            productInfoDiv.appendChild(productName);
    
            const productFigure = document.createElement('figure');
            const addProductImage = document.createElement('img');
            addProductImage.setAttribute('src', './icons/bt_add_to_cart.svg');
    
            productFigure.appendChild(addProductImage);
    
            productInfo.appendChild(productInfoDiv);
            productInfo.appendChild(productFigure);
    
            productCard.appendChild(productImg);
            productCard.appendChild(productInfo);
    
            cardsContainer.appendChild(productCard);

    
        }
        
    }

    renderProduct(productList);

    })

