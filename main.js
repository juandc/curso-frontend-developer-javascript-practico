
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
const myOrderContent = document.querySelector('.my-order-content');
myOrderContent.setAttribute("id","idmyOrderContent");
const ididshopping=document.querySelector('#idshopping');

const imagen = document.querySelector("#idImgpr");
const priceProduct = document.querySelector("#idprice");
const nombProduct = document.querySelector("#idnomprod");
const buttonComprar= document.querySelector("#idButton");
const carritoCant= document.querySelector("#idcarritoCant");
const shoppingcart= document.querySelector(".shopping-cart");


menuEmail.addEventListener('click',toggleDesktopMenu);
burguerMenu.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);
buttonComprar.addEventListener('click',eventButton);

//arreglos 
const valorDetallesProductos=[];
var canTotalDetaProd;


// generador de eventos de botones
function eventButton(event){
   console.log("evento boton");   
   var valorDetalle=document.getElementById("idprice").innerHTML;
 
   var imagencompra= imagen.getAttribute("src", event.target.src); 
   var valorProdDetalle= valorDetalle.substring(1,7);
   var valorDetalleProducto= valorDetalle.substring(15,50);
   
   valorDetallesProductos.push({
      detImag:imagencompra,
      valorProd: valorProdDetalle,
      valorDetalleProd:valorDetalleProducto
   });
   // asignamos al icono de carrito la cantidad de productos que comprará
   var valorCarritoprevio= parseInt(document.getElementById("idcarritoCant").innerHTML);    
   valorCarritoprevio +=1;
   carritoCant.innerHTML= valorCarritoprevio;
  
   
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

function toggleCarritoAside(e){
   myOrderContent.innerHTML="";
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
     
     const isshoppingCartContainerclose= shoppingCartContainer.classList.contains('inactive');
     if(!isshoppingCartContainerclose){      
       console.log("esta abierto el menu detalles compra");
       renderDetallesCompra(valorDetallesProductos);
       console.log("cantidad de registros en array:"+ valorDetallesProductos.length);   
     }   
     if(isshoppingCartContainerclose){
      console.log("esta cerrado el menu detalles compra");
      console.log("cantidad de registros en array:"+ valorDetallesProductos.length);        
      
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
   price:'120,00',
   image:'https://www.paylesscolombia.co/38855-medium_default/women_s_fashion_sneakers.jpg'
})

productList.push({
   name:'Zapato casual Hombre',
   price:'150,00',
   image:'https://www.paylesscolombia.co/38645-medium_default/men_s_botero_casual_shoes.jpg'
})

productList.push({
   name:'Zapato casual Hombre',
   price:'112,00',
   image:'https://www.paylesscolombia.co/38684-medium_default/men_s_chukka_casual_shoes.jpg'
})
productList.push({
   name:'Zapato para Niño',
   price:'100,00',
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
function renderDetallesCompra(array){
   for(detalleCompraProduct of array){
      const shoppingCart = document.createElement('div');
      shoppingCart.classList.add('shopping-cart');
      shoppingCart.setAttribute("id","idshopping");
      // creamos etiqueta figure
      const detalleInfoFigure= document.createElement('figure');
     //creamos la imagen
      const detalleImg= document.createElement('img');
      detalleImg.setAttribute('src',detalleCompraProduct.detImag);
      detalleInfoFigure.appendChild(detalleImg);
     // creamos los p
     const detalleProductNombre= document.createElement('p');
     detalleProductNombre.innerText=  detalleCompraProduct.valorDetalleProd;

     const detalleProductPrice= document.createElement('p');
     detalleProductPrice.innerText= '$'+ detalleCompraProduct.valorProd;     

     //creamos la imagen de cerrar 
     const detalletImgCart= document.createElement('img');
     detalletImgCart.setAttribute('src','./icons/icon_close.png');
     detalletImgCart.setAttribute('alt','close');

     shoppingCart.appendChild(detalleInfoFigure);
     shoppingCart.appendChild(detalleProductNombre);
     shoppingCart.appendChild(detalleProductPrice);
     
     myOrderContent.appendChild(shoppingCart);
   }
};


