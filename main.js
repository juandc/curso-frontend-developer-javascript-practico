const emailMenu = document.querySelector('.navbar-email');
const iconoMenuBurger = document.querySelector('.menu');
const detallesCarritoMenu = document.querySelector('.navbar-shopping-cart');

const mobileMenu = document.querySelector('.mobile-menu');
const desktopMenu = document.querySelector('.desktop-menu');
const carritoMenu = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container')


emailMenu.addEventListener('click', toggleMenuDesktop);

iconoMenuBurger.addEventListener('click', toggleMenuMobile)

detallesCarritoMenu.addEventListener('click', toggleMenuDetallesCarrito)

function toggleMenuDesktop() {

  const estacarritoMenuClosed = carritoMenu.classList.contains('inactive');

  if(!estacarritoMenuClosed){
    carritoMenu.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive')

}
function toggleMenuMobile() {

  // EL IF SIRVE JUNTO CON EL CONST PARA PONER INACTIVO AL OTRO MENU Y NO SE SOLAPEN
  const estacarritoMenuClosed = carritoMenu.classList.contains('inactive');

  if(!estacarritoMenuClosed){
    carritoMenu.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive')
  
}

function toggleMenuDetallesCarrito() {
  // EL IF SIRVE JUNTO CON EL CONST PARA PONER INACTIVO AL OTRO MENU Y NO SE SOLAPEN
  const estaMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const estaDesktopMenuClosed =  desktopMenu.classList.contains('inactive')

  if(!estaMobileMenuClosed){
    mobileMenu.classList.add('inactive');
  }

  if(!estaDesktopMenuClosed){
    desktopMenu.classList.add('inactive');
  }

  carritoMenu.classList.toggle('inactive');
}

const productList =[];
productList.push ({
  nombre:'Bike',
  precio: 12700,
  imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
  nombre:'Bicycle helmet',
  precio: 1200,
  imagen: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
  nombre:'Bicycle helmet',
  precio: 1600,
  imagen: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
  nombre:'Bicycle helmet',
  precio: 1500,
  imagen: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
  nombre:'Seat',
  precio: 300,
  imagen: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
  nombre:'Tennis Montain Bike',
  precio: 2200,
  imagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
  nombre:'Sunglasses',
  precio: 800,
  imagen: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
  nombre:'Sunglasses',
  precio: 600,
  imagen: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
  nombre:'Bicycle seat bag',
  precio: 876,
  imagen: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 

    /*
    <div class="product-card"> Este div quedo como productCard

        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.
        jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""> **esta imagen quedo como imgCard**
        
        <div class="product-info"> este div quedo como productInfo

          <div> este div quedo como productInfoDiv ya que no tiene nombre de clase por eso solo div

            <p>$120,00</p> este quedo como productPrice

            <p>Bike</p> este quedo como productName
            
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
      */
    //  aqui hacemos una function para poder llamar a cualquier lista que tenga productos
function ListaProductos(arr) {
  for (product of arr){
    // Aqui estamos creando un elemento en este caso un div y agregandole la clase product-card
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // Aqui al crear una imagen hay que darle un set atributte con src y la imagen que se le esta dando al objeto
    // product.imagen
    const imgCard = document.createElement('img');
    imgCard.setAttribute('src', product.imagen);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
  
    const productInfoDiv = document.createElement('div');
  
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.precio;
  
    const productName = document.createElement('p');
    productName.innerText = product.nombre;
  
  
    const productInfoFigure = document.createElement('figure');
  
  
    const productImgCarrito = document.createElement('img');
    productImgCarrito.setAttribute('src', './icons/bt_add_to_cart.svg' );


    
    productInfoFigure.append(productImgCarrito);

    productInfoDiv.append(productPrice,productName);

    productInfo.append(productInfoDiv, productInfoFigure);
    
    productCard.append(imgCard,productInfo);

    cardsContainer.append(productCard);
  }
}

ListaProductos(productList);
