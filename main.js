const productList = [
    {name: 'Bike The Light', image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', price: 120, description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'},
    {name: 'Bike Butterfly', image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', price: 220, description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'},
    {name: 'Bike Fast & Furious', image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', price: 620, description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'},
    {name: 'Bike Imaginarious Friend', image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', price: 300, description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'},
    {name: 'Bike Wonderful Word', image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', price: 450, description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'},
    {name: 'Bike We are BF', image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', price: 850, description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.' },
    {name: 'Bike A Happy Family', image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', price: 1150, description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.' }

];

const emailMenuDesktop = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamMenuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carMenuButton = document.querySelector('.navbar-shopping-cart')
const carMenu = document.querySelector('.car-menu');
const productListContainer = document.querySelector('.cards-container');
const moreAboutMenu = document.querySelector('.showmore-menu');
const closeMoreAbout = document.querySelector('.product-detail-close');



emailMenuDesktop.addEventListener('click', toggleDesktopMenu);
hamMenuMobile.addEventListener('click', toggleMobileMenu);
carMenuButton.addEventListener('click',toggleCarMenu);
closeMoreAbout.addEventListener('click',closeMoreAboutMenu)

showProductList();


function toggleDesktopMenu(){
    closeOpenMenus(desktopMenu);
    desktopMenu.classList.toggle('active');
}

function toggleMobileMenu(){
    closeOpenMenus(mobileMenu);
    mobileMenu.classList.toggle('active');
}

function toggleCarMenu(){
    closeOpenMenus(carMenu);
    carMenu.classList.toggle('active');
}

function closeOpenMenus(elem){
    const openMenu = document.querySelector('.navmenu.active');
    if(openMenu != null && openMenu != elem){
            openMenu.classList.remove('active');
    }
}

function showProductList(){
    productList.forEach((element,i) => {
        const tempElement = document.createElement('div');
        tempElement.classList.add('product-card');
        tempElement.classList.add(i)
        tempElement.innerHTML = `<img src="${element.image}" alt="">
                                <div class="product-info">
                                    <div>
                                        <p>$${element.price}</p>
                                        <p>${element.name}</p>
                                    </div>
                                <figure>
                                    <img src="./icons/bt_add_to_cart.svg" alt="">
                                </figure>
                                </div>`;
                
        productListContainer.append(tempElement);
    });
}

function showMoreAboutProduct(e){
    const choosedElement = productList[e.currentTarget.classList[1]];
    document.querySelector('.showmore-menu .image').src = choosedElement.image;
    document.querySelector('.showmore-menu .price').innerText = '$'+ choosedElement.price;
    document.querySelector('.showmore-menu .name').innerText = choosedElement.name;
    document.querySelector('.showmore-menu .description').innerText = choosedElement.description;
    closeOpenMenus(moreAboutMenu);
    moreAboutMenu.classList.add('active');
}

function closeMoreAboutMenu(){
    moreAboutMenu.classList.remove('active');
}


const productCards = document.querySelectorAll('.product-card');
productCards.forEach(element => {
    element.addEventListener('click',showMoreAboutProduct);
});
