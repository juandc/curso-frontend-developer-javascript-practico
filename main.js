
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

//
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailCloseIcon= document.querySelector('.product-detail-close');

const imagen = document.querySelector("#idImgpr");
const priceProduct = document.querySelector("#idprice");
const nombProduct = document.querySelector("#idnomprod");


menuEmail.addEventListener('click',toggleDesktopMenu);
burguerMenu.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

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
    closeProductDetailAside();
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
     
    const isproductDetailClose = productDetailContainer.classList.contains('inactive');
    if(!isproductDetailClose){
      productDetailContainer.classList.add('inactive');
     }

}
function openProductDetailAside (event){
   shoppingCartContainer.classList.add('inactive');  
   productDetailContainer.classList.remove('inactive');
   desktopMenu.classList.add("inactive");
   imagen.setAttribute("src", event.target.src);
   priceProduct.innerText = event.target.nextElementSibling.innerText; 
}

function closeProductDetailAside (){
   productDetailContainer.classList.add('inactive');
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
      productimg.addEventListener('click',openProductDetailAside);
   
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
