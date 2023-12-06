const menuEmail = document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');
const menuHamburger= document.querySelector('.menu');
const mobilmenu= document.querySelector('.mobile-menu');
const product_detail_close= document.querySelector('.product-detail-close');
const carrito_compras= document.querySelector('.navbar-shopping-cart');//esta es la clase general pero llama a la clase "aside"
const shoppinCartContainer= document.querySelector('#shoppinCartContainer');
const CardsContainer= document.querySelector('.cards-container');
const product_detailContainer= document.querySelector('#product-detail');






menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburger.addEventListener('click', togglemobilmenu);//inicialmente se escucha cuando le den click al elemento en cuestión
carrito_compras.addEventListener('click', toggle_carrito_compras);


// document.addEventListener("click", (e)=>{
//     if(e.target.matches(".mobile-menu"))
//     alert("click fuera del elemento");

// });


function toggleDesktopMenu() {
    const isasideclosed= shoppinCartContainer.classList.contains('inactive');

    if (!isasideclosed) {
        shoppinCartContainer.classList.add('inactive');

    }
    desktopMenu.classList.toggle('inactive')
    console.log('menuHamburger');
}

function togglemobilmenu() {
    product_detailContainer.classList.add('inactive');
    const isasideclosed= shoppinCartContainer.classList.contains('inactive');
    if (!isasideclosed) {
        shoppinCartContainer.classList.add('inactive');

    }

    mobilmenu.classList.toggle('inactive')//se hace el llamado a la clase inactive la cual mediante la funsión toggle se le añade
    }

function toggle_carrito_compras() {//el carrito de compras es manejado por la variable aside para recordar eso 
    const ismobileMenuclosed = mobilmenu.classList.contains('inactive');
    const isdesktopMenuclosed = desktopMenu.classList.contains('inactive');

        if (!isdesktopMenuclosed) {
            desktopMenu.classList.add('inactive');

        }

        if (!ismobileMenuclosed) {
            mobilmenu.classList.add('inactive');

        }
            /////////cierra el product datail si esta abierto
        const isproduct_detailContainerClosed = product_detailContainer.classList.contains('inactive');
        if (!isproduct_detailContainerClosed) {
            product_detailContainer.classList.add('inactive');

        }

        if (!ismobileMenuclosed) {
            mobilmenu.classList.add('inactive');

        }
        shoppinCartContainer.classList.toggle('inactive');
        
    }



    function openProductDeatailAside() {
        shoppinCartContainer.classList.add('inactive');//para este caso de estas 2 funciones se puede hacer el cierre de esta forma por que no es un toggle

        product_detailContainer.classList.remove('inactive');//utilizamos remove para quitarle la clase inactive al elemento
    }
    function closeProductDeatailAside() {
        product_detailContainer.classList.add('inactive');
    }

const productlist = [];
productlist.push({
    id:1,
    name:'bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productlist.push({
    id:2,
    name:'pantalla',
    price:320,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

productlist.push({
    id:3,
    name:'telefonos',
    price:150,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productlist.push({
    id:4,
    name:'bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productlist.push({
    id:5,
    name:'pantalla',
    price:320,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

productlist.push({
    id:6,
    name:'telefonos',
    price:150,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

/*<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> -->*/


    function renderProducts(arr) {
        for (product of arr){//este tipo de for mas simplificado nos arroja cada obejteo almacenado dentro de un array
            // maquetacion de todos los elementos HTML desde javascript
            const productCard= document.createElement('div');
            productCard.classList.add('product-card');
            const  productimg= document.createElement('img');
            productimg.setAttribute('src',product.image);
            productimg.addEventListener('click',openProductDeatailAside);
            product_detail_close.addEventListener('click',closeProductDeatailAside);

            const productInf= document.createElement('div');
            productInf.classList.add('product-info');
            const productInfDiv= document.createElement('div');
            const productPrice= document.createElement('p');
            productPrice.innerText='$ '+ product.price;
            const productName= document.createElement('p');
            productName.innerText= product.name;
            const productInfoFigure= document.createElement('figure');
            const  productImgCart= document.createElement('img');
            productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
            
            // unificación de hijos y padres desde javascript
            productInfoFigure.append(productImgCart);
            productInfDiv.append(productPrice,productName);
            productInf.append(productInfDiv);
            productCard.append(productimg,productInf);
            CardsContainer.appendChild(productCard);
            
            // productCard.appendChild(productimg); //el apendchil solo permite añadir un hijo mientras que apend permite añadir todos los hijos que sean necesarios
            // productCard.appendChild(productInf);
            // productInf.appendChild(productInfDiv);
            // productInf.appendChild(productInfoFigure);
            // productInfDiv.appendChild(productPrice);
            // productInfDiv.appendChild(productName);
            // productInfoFigure.appendChild(productImgCart);
            }


            
    }renderProducts(productlist);





