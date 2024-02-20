
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

//
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
burguerMenu.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

// creamos una funcion para realizar el evento de click
function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
      shoppingCartContainer.classList.add('inactive');
    } 
       desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
      shoppingCartContainer.classList.add('inactive');
    }
     
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
     }
     const isdesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if(!isdesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
     
}
// arreglo que nos devuelve la informacion luego de una consulta a BD
const productList=[];
//agregamos nuevos elementos al arreglo, mediante objetos
productList.push({
   name:'Bike',
   price:120,
   image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
   name:'Pantalla',
   price:253,
   image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
   name:'celular',
   price:820,
   image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
   name:'mouse',
   price:24,
   image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


function renderProducts(arreglo){
   for(product of arreglo){
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
   
      //creamos la imagen
      const productimg= document.createElement('img');
      productimg.setAttribute('src',product.image);
   
      //creamos class product-info
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
   
      // creamos un div vacio
     const productInfoDiv= document.createElement('div');
   
     const productPrice= document.createElement('p');
     productPrice.innerText= '$'+ product.price;
     const productName= document.createElement('p');
     productName.innerText= product.name;
   
     productInfoDiv.appendChild(productPrice);
     productInfoDiv.appendChild(productName);
   
     // creamos etiqueta figure
     const productInfoFigure= document.createElement('figure');
    //creamos la imagen
     const productImgCart= document.createElement('img');
     productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
   
    //appendChild()método agrega un nodo (elemento) como último hijo de un elemento
     productInfoFigure.appendChild(productImgCart);
   
     productInfo.appendChild(productInfoDiv);
     productInfo.appendChild(productInfoFigure);
   
     productCard.appendChild(productimg);
     productCard.appendChild(productInfo);
   
     cardsContainer.appendChild(productCard);
   }
}

renderProducts(productList);
