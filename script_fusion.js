const $loginContainerActive = document.querySelector('.navbar-email');

//esta es mi clase que tengo que llamar para desktop menu que le ponga o le quite a mi elemento
const $desktopMenu = document.querySelector('.desktop-menu');
const $burguerMenu = document.querySelector('.menu');
const $mobileMenu = document.querySelector('.mobile-menu');



function activeLogin (e) {

    // $desktopMenu.classList.toggle('inactive');

    //??? contains (e.targer) ??

    if ($loginContainerActive.contains(e.target)) {

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

function toogleMobileMenu () {

    $mobileMenu.classList.toggle('inactive');

};
/*


Tip

Para no tener que escribir siempre (document.querySelector) podemos usar esta simplificación con una arrow function

const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');



*/