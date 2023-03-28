const $loginContainerActive = document.querySelector('.navbar-email');

//esta es mi clase que tengo que llamar para desktop menu que le ponga o le quite a mi elemento
const $desktopMenu = document.querySelector('.desktop-menu');
const $burguerMenu = document.querySelector('.menu');
const $shoppingCar = document.querySelector('.navbar-shopping-cart');
const $mobileMenu = document.querySelector('.mobile-menu');

const asideElement = document.querySelector('.product-detail');


function activeLogin (e) {

    // $desktopMenu.classList.toggle('inactive');

    //??? contains (e.target) ??

    if ($loginContainerActive.contains(e.target)) {

        const isAsideClose = asideElement.classList.contains('inactive');

        if (!isAsideClose) {
            asideElement.classList.add('inactive');
        };

        $desktopMenu.classList.toggle('inactive');
        console.log('Navbar');

    } else if ($desktopMenu.contains(e.target)) {
        
        console.log('Clickdentro');
        $desktopMenu.classList.remove('inactive');

    } else {
    
        console.log('click_fuera');
        $desktopMenu.classList.add('inactive');
        
    };


};

// $loginContainerActive.addEventListener('click', activeLogin); //showmenu
document.addEventListener('click', activeLogin);
$burguerMenu.addEventListener('click', toogleMobileMenu);
$shoppingCar.addEventListener('click', toogleCarAside);

function toogleMobileMenu () {

    const isAsideClose = asideElement.classList.contains('inactive');

    if (!isAsideClose) {
        asideElement.classList.add('inactive');
    }

    $mobileMenu.classList.toggle('inactive');

};

function toogleCarAside () {

    const isMobileMenuClosed = $mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        $mobileMenu.classList.add ('inactive');
    }

    asideElement.classList.toggle('inactive');

};
/*


Tip

Para no tener que escribir siempre (document.querySelector) podemos usar esta simplificación con una arrow function

const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');



*/