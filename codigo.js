const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const detalles_producto = document.querySelector(".product-detail-detalles-producto")
const close_detalles_producto = document.querySelector(".product-detail-close")
const contenedor = document.querySelector(".main-container")
const img_producto = document.querySelector(".imagen_producto")



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
close_detalles_producto.addEventListener("click", cerrarDetallesProducto)








function cerrarDetallesProducto()
{
  detalles_producto.classList.add("inactivo")

  contenedor.classList.remove("opacar")

}


function mostrarDetallesProducto()
{


  
  contenedor.classList.add("opacar")

  if(!aside.classList.contains("inactivo"))
  {
    aside.classList.add("inactivo")
  }

  if(!mobileMenu.classList.contains("inactivo"))
  {
    mobileMenu.classList.add("inactivo")
  }

 
  
  detalles_producto.classList.remove("inactivo")

}

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains('inactivo');

  if (!isAsideClosed) {
    aside.classList.add('inactivo');
  }
  

  desktopMenu.classList.toggle('inactivo');
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactivo');

  if (!isAsideClosed) {
    aside.classList.add('inactivo'); 
  }

  if(!detalles_producto.classList.contains("inactivo"))
  {
    detalles_producto.classList.add("inactivo")
  }
  
  mobileMenu.classList.toggle('inactivo');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactivo');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactivo'); 
  }

  if (!desktopMenu.classList.contains('inactivo')) 
  {
    desktopMenu.classList.add('inactivo');
  }

  if(!detalles_producto.classList.contains("inactivo"))
  {
    detalles_producto.classList.add("inactivo")
  }
 
  
  aside.classList.toggle('inactivo');
}

const productList = [];
productList.push(
    {
        name: 'RXT 4090',
        price: 120,
        image: 'https://casemod.es/141801-thickbox_default/zotac-gaming-geforce-rtx-4090-trinity-24576-mb-gddr6x.jpg',
      },
      {
        name: 'silla gamer',
        price: 220,
        image: 'https://inval.com.co/col/4567-large_default/silla-gamer-master-xpro-negroblanco.jpg',
      },
      {
        name: 'pc gamer',
        price: 620,
        image: 'https://servisistemas.com.co/informatica-y-tecnologia/img/p/1/2/6/5/8/12658.jpg',
      },
      
      
)




    for (product of productList) {

      //cards-container
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.addEventListener("click", mostrarDetallesProducto)
      
        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        
      
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
      
        const productInfoDiv = document.createElement('div');
      
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
      
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
      
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
      
        productInfoFigure.appendChild(productImgCart);
      
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
      
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
      
        cardsContainer.appendChild(productCard);
      }
 
      

















