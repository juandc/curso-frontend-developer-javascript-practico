const user_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');
const mobile_icon = document.querySelector('.menu')
const menu_mobile = document.querySelector('.mobile-menu')
const cart_icon = document.querySelector('.navbar-shopping-cart')
const cart_detail = document.querySelector('#shopping-cart')
const card_container = document.querySelector('.cards-container')
const product_card = document.querySelector('.product-card img')
const product_detail = document.querySelector('#product-detail')
const close_button = document.querySelector('.product-detail-close')
/* Agregamos el evento click */

user_email.addEventListener('click', toggleProfileMenu)
mobile_icon.addEventListener('click', toggleMenu)
cart_icon.addEventListener('click', toggleCart)
close_button.addEventListener('click', closeButton)
function toggleProfileMenu() {
  desktop_menu.classList.toggle('inactive')
}

function toggleMenu() {
  if(!cart_detail.classList.contains('inactive')){
    cart_detail.classList.add('inactive')
  }
  menu_mobile.classList.toggle('inactive')
}

function toggleCart() {

  if(!menu_mobile.classList.contains('inactive')){
    menu_mobile.classList.add('inactive')
  }
  cart_detail.classList.toggle('inactive')
}

const productList = [];

productList.push ({
  name:'Bike',
  price: 12700,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
  name:'Bicycle helmet',
  price: 1200,
  image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
  name:'Bicycle helmet',
  price: 1600,
  image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
  name:'Bicycle helmet',
  price: 1500,
  image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
  name:'Seat',
  price: 300,
  image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
  name:'Tennis Montain Bike',
  price: 2200,
  image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
  name:'Sunglasses',
  price: 800,
  image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
  name:'Sunglasses',
  price: 600,
  image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
  name:'Bicycle seat bag',
  price: 876,
  image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 



function showProducts(arr) {
  for (product of arr) {
    card_container.innerHTML += `
      <div class="product-card" onclick="openDetail()">
            <img src="${product.image}" alt="">
            <div class="product-info">
              <div>
                <p>$${product.price}</p>
                <p>${product.name}</p>
              </div>
              <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
              </figure>
            </div>
          </div>
    `
    
  }
  //product_card.addEventListener('click', openDetail)
}

showProducts(productList);

function openDetail() {
  product_detail.classList.remove('inactive')
}

function closeButton(params) {
  product_detail.classList.add('inactive')
}