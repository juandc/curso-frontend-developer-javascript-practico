document.addEventListener('DOMContentLoaded', function() {
  const menuEmail = document.querySelector('.navbar-email');
  const menuHamIcon = document.querySelector('.menu');
  const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
  const productDetailCloseIcon = document.querySelector('.product-detail-close');
  const desktopMenu = document.querySelector('.desktop-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
  const productDetailContainer = document.querySelector('#productDetail');
  const cardsContainer = document.querySelector('.cards-container');

  menuEmail.addEventListener('click', toggleDesktopMenu);
  menuHamIcon.addEventListener('click', toggleMobileMenu);
  menuCarritoIcon.addEventListener('click', toggleCarritoAside);
  productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

  function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
    if (!isAsideClosed) {
      shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
  }

  function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
      shoppingCartContainer.classList.add('inactive'); 
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
  }

  function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
      mobileMenu.classList.add('inactive');
    }

    if (!isDesktopClosed) {
      desktopMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
      productDetailContainer.classList.add('inactive'); 
    }

    shoppingCartContainer.classList.toggle('inactive');
  }

  function openProductDetailAside(product) {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
    fillProductDetail(product);
  }

  function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
  }

  function fillProductDetail(product) {
    const productImg = document.querySelector('#productImage'); 
    const productPrice = document.querySelector('#productDetail p:first-child');
    const productName = document.querySelector('#productDetail p:nth-child(2)');
    const productDescription = document.querySelector('#productDetail p:nth-child(3)');

    productImg.setAttribute('src', product.image);
    productPrice.innerText = '$' + product.price.toFixed(2);
    productName.innerText = product.name;
    productDescription.innerText = product.description;
}


  const productList = [];
  productList.push({
      name: 'PlayStation',
      price: 120.00,
      image: 'https://www.mundodeportivo.com/alfabeta/hero/2021/12/ps1.jpg?width=1200',
      description: 'The first console of Sony.'
    },

    {
      name: 'PlayStation 2',
      price: 180.00,
      image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/09/ps2.jpg?tf=3840x',
      description: 'The 2th generation of playstation consoles.'
    },

    {
      name: 'PlayStation 3',
      price: 220.00,
      image: 'https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/P/s/Ps3-Slim-160gb-With-10-Games-Including-Fifa17-And-Pes17-5549373.jpg',
      description: 'The 3th generation of playstation consoles.'
    },
    {
      name: 'PlayStation 4',
      price: 320.00,
      image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/01/ps4-playstation-4-2583487.jpg',
      description: 'The 4th generation of playstation consoles.'
    },
    {
      name: 'PlayStation 5',
      price: 620.00,
      image: 'https://cdn.vox-cdn.com/thumbor/I3okUTYVXPwsFTusBG8wRtbT510=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22015056/jbareham_201022_ply1040_ps5_lead_0002.jpg',
      description: 'The most powerfull console of Playstation.'
    },
    {
      name: 'Xbox',
      price: 120.00,
      image: 'https://cdn.gaminggorilla.com/wp-content/uploads/2023/02/The-Best-Original-Xbox-Games-of-All-Time-1000x600.jpg',
      description: 'The original Xbox.'
    },
    {
      name: 'Xbox 360',
      price: 220.00,
      image: 'https://i.blogs.es/06aa3e/xbox-360-adios-tienda-portada/1366_2000.jpeg',
      description: 'Second generation of Xbox.'
    },

    {
      name: 'Xbox One',
      price: 380.00,
      image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2013/05/225410-especificaciones-xbox-one-asi-es-nueva-consola.png?tf=3840x',
      description: 'The evolution from Xbox 360.'
    },

    {
      name: 'Xbox One S Series',
      price: 400.00,
      image: 'https://media.solotodo.com/media/products/1263786_picture_1604618116.jpg',
      description: 'A powerfull console from Xbox.'
    },

    {
      name: 'Xbox One X Series',
      price: 580.00,
      image: 'https://i.blogs.es/221297/xbox-series-x-11/1366_2000.jpeg',
      description: 'The last and most powerfull console from Microsoft.'
    },

    {
      name: 'NES',
      price: 180.00,
      image: 'https://s.yimg.com/uu/api/res/1.2/AD76PSFwBQbg32slKEKY1g--~B/Zmk9ZmlsbDtoPTU4Mzt3PTg3NTthcHBpZD15dGFjaHlvbg--/https://o.aolcdn.com/images/dims?resize=2000%2C2000%2Cshrink&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2019-09%2F48989ff0-dbe0-11e9-bdef-0e769759fde3&client=a1acac3e1b3290917d92&signature=2abbba35ac26b7a84b1b0a48c628af4c546c62cd.cf.jpg',
      description: 'The first console from Nintendo.'
    },

    {
      name: 'Super Nintendo',
      price: 190.00,
      image: 'https://www.latercera.com/resizer/cdbq94f3g2PnQm_QeWGweMB3Ggc=/1200x630/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/4H5WDB4IONB5LPGX2CC5JZKPIQ.jpg',
      description: 'Nintendo first 16-bit console.'
    },

    {
      name: 'Virtual Boy',
      price: 200.00,
      image: 'https://www.nintenderos.com/wp-content/uploads/2017/10/original-1.jpg',
      description: 'A strange but entertaining console. It is considered one of the first to promote virtual reality.'
    },

    {
      name: 'Nintendo 64',
      price: 180.00,
      image: 'https://cloudfront-us-east-1.images.arcpublishing.com/copesa/NIVULWKBQ5GSXEGWLGNZOY2GZE.jpg',
      description: 'The N64 got its name from the 64-bit CPU it used and was the last Nintendo home console to require cartridges.'
    },

    {
      name: 'Nintendo GameCube',
      price: 120.00,
      image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/03/gamecube-2656245.jpg?tf=3840x',
      description: 'Nintendo opted for the optical disc format for the GameCube, but had to face stiff competition from the Sony PlayStation 2, the Microsoft Xbox and the Sega Dreamcast.'
    },

    {
      name: 'Nintendo Wii',
      price: 190.00,
      image: 'https://www.latercera.com/resizer/Ua0Xmt3wXgFPD9ZOM1_cUnjoijM=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/RUQO33I3ZVHRBIHS7V5HMHLYL4.jpg',
      description: 'The Wii was Nintendo entry into the seventh generation of home consoles, facing formidable competition from Sony PlayStation 3 and Microsofts Xbox 360.'
    },

    {
      name: 'Nintendo Switch',
      price: 280.00,
      image: 'https://static1.pocketlintimages.com/wordpress/wp-content/uploads/wm/140949-games-review-alternatives-image1-utvih3w1pp.jpg?q=50&fit=crop&w=750&dpr=1.5',
      description: 'And so we come to the Switch, which first went on sale in March 2017. It consists of a tablet-like device with a touch screen, plus a docking station for playing at home on a TV.'
    },

    {
      name: 'Nintendo Switch OLED',
      price: 580.00,
      image: 'https://static1.pocketlintimages.com/wordpress/wp-content/uploads/wm/157862-games-review-hands-on-nintendo-switch-oled-model-review-the-switch-to-rule-them-all-image1-o2paas0p5q.jpg?q=50&fit=crop&w=750&dpr=1.5',
      description: 'Nintendo has yet to release a Switch Pro, despite years of rumors, but in 2021 it did offer an improved version of the Switch.'
    },

    {
      name: 'Sega Saturn',
      price: 150.00,
      image: 'https://img.asmedia.epimg.net/resizer/4wXBI9OL82IqZ0MeiQE_9Qq9Ulo=/644x0/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/W3TPT5ZZ2RJT7PRGACXFRK3BGM.jpg',
      description: 'While Sega continued its search for an icon to compete with Nintendo Mario, Naoto Ohshima designed "a teal hedgehog with red shoes that he called Mr. Needlemouse" in 1991. This character was the one who managed to win the contest and be renamed Sonic The Hedgehog,'
    },

    {
      name: 'Sega Genesis',
      price: 200.00,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Sega-Genesis-Mk2-6button.jpg/2560px-Sega-Genesis-Mk2-6button.jpg',
      description: 'A North American Sega Genesis video game console with 6-button controller. The Sega Genesis is a 16-bit, fourth generation game console that was first released in 1988. This is the second remodel of the console and is shown with a 6-button that was released later in the console life.'
    },

    {
      name: 'Sega Dreamcast',
      price: 280.00,
      image: 'https://fotografias-neox.atresmedia.com/clipping/cmsimages01/2014/10/12/9042F672-AE93-46CF-9EA0-62D2F7B2EE77/98.jpg?crop=640,360,x0,y10&width=1900&height=1069&optimize=high&format=webply',
      description: 'SEGA Dreamcast is one of the consoles most remembered by fans. Perhaps not because of its sales, which did not reach 10 million units sold, but because of some of its video games.'
    },

    );

    
    // Agregar más productos aquí


  function renderProducts(arr) {
    for (const product of arr) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
      productImg.classList.add('product-images');
      productImg.addEventListener('click', () => openProductDetailAside(product));

      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');

      const productInfoDiv = document.createElement('div');

      const productPrice = document.createElement('p');
      productPrice.innerText = '$' + product.price.toFixed(2);
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
  }

  renderProducts(productList);
});
