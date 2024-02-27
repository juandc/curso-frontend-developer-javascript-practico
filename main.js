
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
const buttonComprar= document.querySelector("#idButton");


menuEmail.addEventListener('click',toggleDesktopMenu);
burguerMenu.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);
buttonComprar.addEventListener('click',eventButton);

//generador de objetos



// generador de eventos de botones
function eventButton(event){
   console.log("evento boton");   
   var valor= document.getElementById("idprice").innerHTML;
   var imagencompra= imagen.getAttribute("src", event.target.src);   
   console.log(imagencompra+" - "+valor);
}

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
   name:'Zapato para dama',
   price:120,
   image:'https://www.paylesscolombia.co/38855-medium_default/women_s_fashion_sneakers.jpg'
})

productList.push({
   name:'Zapato casual Hombre',
   price:253,
   image:'https://www.paylesscolombia.co/38645-medium_default/men_s_botero_casual_shoes.jpg'
})

productList.push({
   name:'Zapato casual Hombre',
   price:820,
   image:'https://www.paylesscolombia.co/38684-medium_default/men_s_chukka_casual_shoes.jpg'
})
productList.push({
   name:'Zapato para Niño',
   price:24,
   image:'https://www.paylesscolombia.co/38882-medium_default/boy_s_toddler_lace_court_sport_shoes.jpg'
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
