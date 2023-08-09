const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuButton = document.querySelector('.menu');
const menuProductDetail = document.querySelector('.product-detail');
const shoppingCartButton = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuButton.addEventListener('click', toggleMobileMenu);
shoppingCartButton.addEventListener('click', toggleMenuProductDetail);

function toggleDesktopMenu()
{
    const isMenuProductDetail = menuProductDetail.classList.contains('inactive');

    if(!isMenuProductDetail)
    {
        menuProductDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu()
{
    const isMenuProductDetail = menuProductDetail.classList.contains('inactive');

    if(!isMenuProductDetail)
    {
        menuProductDetail.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleMenuProductDetail()
{
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed)
    {
        mobileMenu.classList.add('inactive');
    }
    else if (!isDesktopMenuClosed)
    {
        desktopMenu.classList.add('inactive');
    }

    menuProductDetail.classList.toggle('inactive');
}