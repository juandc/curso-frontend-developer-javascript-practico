const navbarEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const barMenu = document.querySelector(".menu")
const menuMobile = document.querySelector(".mobile-menu")
const carButton = document.querySelector(".navbar-shopping-cart")
const shoppingCart = document.querySelector(".product-detail")
const cardContainer = document.querySelector(".cards-container")
const productDetailStore = document.querySelector("#productDetailStore")
const productDetailClose = document.querySelector(".product-detail-close")

const nameProductList = ["Laptop", "Celular", "Bike", "Pescera", "El Psicoanalista - Libro"]
const priceProductList = [2100, 900, 120, 50, 10]
const imageProductList = [
  "https://http2.mlstatic.com/D_NQ_NP_793921-MLM50274201387_062022-O.webp",

  "https://ichef.bbci.co.uk/news/640/cpsprodpb/BE54/production/_117842784_lg.jpg",

  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  
  "https://http2.mlstatic.com/D_NQ_NP_738877-MCO49337902230_032022-O.webp",

  "https://resources.claroshop.com/imagenes-sanborns-ii/1200/9786073831413_3.jpg"
]

const descriptionProductList = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos id corporis assumenda quas odit repellat animi facilis aut eius voluptate?",

  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque rerum eligendi sapiente quia fuga quos maxime velit ratione fugiat porro nihil ipsam ullam quo repellat, voluptas eveniet ducimus iste fugit.",

  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates voluptas vitae ducimus possimus explicabo. Ea?",
  
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officiis, architecto voluptates harum libero doloribus illum reprehenderit est, necessitatibus, mollitia possimus at ullam!",

  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum distinctio sit repellendus voluptatum, facere a."
]

function products(name, price, image, description){
  this.name = name
  this.price = price
  this.image = image
  this.description = description
}

function generateProducts( name, price, image, description){
  const items = []
  for(let i=0; i < name.length; i++){
    let newProduct
    newProduct = new products(name[i], price[i], image[i], description[i])
    items.push(newProduct)
  }
  return items
}

const productList = generateProducts(nameProductList, priceProductList, imageProductList, descriptionProductList)

/**
 * Permite agregar los productos al HTML
*/


// * FUNCIONES
function openProductDetail(){
  productDetailStore.classList.add('active')
}

function closeProductDetail(){
  productDetailStore.classList.remove('active')
}

function setDataProduct(precio, nombre, urlImage, description){
  const lblPrice = document.querySelector("#priceDetailStore")
  const lblName = document.querySelector("#nameDetailStore")
  const imageProduct = document.querySelector("#imageDetailStore")
  const descriptionProduct = document.querySelector("#descriptionDetailStore")
  lblPrice.innerText ="$"+precio
  lblName.innerText = nombre 
  imageProduct.setAttribute("src", urlImage)
  descriptionProduct.innerText = description
}

function documentCreateHTMLProducts(){
  // Creando y agregando elementos al DOM
  for(product of productList){
    let divProductCard = document.createElement("div")
    divProductCard.setAttribute("class", "product-card")
    
    let imgProduct = document.createElement("img")
    imgProduct.setAttribute("src", product.image)
    imgProduct.setAttribute("alt", "Imagen del producto no encontrado")
    // Agregando un evento a la imagen
    imgProduct.addEventListener('click', (e) =>{
      openProductDetail()
      let urlImageProduct = e.target.getAttribute("src")
      let precioProducto = e.target.parentElement.childNodes[1].childNodes[0].childNodes[0].textContent
      let nombreProducto = e.target.parentElement.childNodes[1].childNodes[0].childNodes[1].textContent
      let descripcionProducto = e.target.parentElement.childNodes[1].childNodes[0].childNodes[2].getAttribute('value')

      setDataProduct(precioProducto, nombreProducto, urlImageProduct, descripcionProducto)


      if(shoppingCart.classList.contains('active')) shoppingCart.classList.remove('active')
      if(desktopMenu.classList.contains('active')) desktopMenu.classList.remove('active')
      if(barMenu.classList.contains('active')) barMenu.classList.remove('active')
    })
    
    let divProductInfo = document.createElement("div")
    divProductInfo.setAttribute("class", "product-info")
    
    let divPriceName = document.createElement("div")

    let hiddenInput = document.createElement("input")
    hiddenInput.setAttribute("type", 'hidden')
    
    let pPrice, pName
    pPrice = document.createElement("p")
    pName = document.createElement("p")
    pPrice.innerText = product.price
    pName.innerText = product.name
    hiddenInput.value = product.description

    let figureProduct = document.createElement("figure")
    
    let iconProduct = document.createElement("img")
    iconProduct.setAttribute("src", "./icons/bt_add_to_cart.svg")
    iconProduct.setAttribute("alt", "Icono de comprar no encontrado")

    
    
    divPriceName.append(pPrice, pName, hiddenInput)
    figureProduct.appendChild(iconProduct)

    divProductInfo.append(divPriceName, figureProduct)

    divProductCard.append(imgProduct, divProductInfo)
    
    cardContainer.appendChild(divProductCard)
  }
}


function toggleElement(selectorElement, className){
  let tagHTML;
  tagHTML = document.querySelector(selectorElement)
  tagHTML.classList.toggle(className);
}
/**
 * Permite cerrar un menú cuando el otro esta activo de forma que permite evitar la superposición de elementos, optimizando la visualizacion de los menus.
 * Verifica si el menu2 (menu invasor) cuenta con la clase active (abierto) y en tal caso cierra tal menu y agrega la clase active al menu (menú que se desea mostrar)
 * @param {string} classMenu1 
 * @param {string} classMenu2 
 * @param {string} classElement 
 */
function optimizarVisualizacionMenus(classMenu1, classMenu2, classElement){
  const menu1 = document.querySelector(classMenu1)
  const menu2 = document.querySelector(classMenu2)  
  let isOpenMenu2 = menu2.classList.contains(classElement)
  if (isOpenMenu2){
    menu2.classList.remove(classElement)
    menu1.classList.add(classElement)
  }else{
    toggleElement(classMenu1, classElement)
  }
}

// * EVENTOS

document.addEventListener("DOMContentLoaded", () =>{
  console.log("El documento esta listo para ser manipulado")
  // GENERAR LA LISTA DE PRODUCTOS
  documentCreateHTMLProducts()
})
window.addEventListener("resize", ()=>{
  const anchoVentana = window.innerWidth
  if( anchoVentana >= 640){
    menuMobile.classList.remove("active")
  }
})

navbarEmail.addEventListener("click", (e) =>{
  e.preventDefault()

  // toggleElement(".desktop-menu","active")
  optimizarVisualizacionMenus(".desktop-menu", ".product-detail", "active")
  if(productDetailStore.classList.contains('active')) productDetailStore.classList.remove('active')
  // if (!desktopMenu.classList.contains("active")){
  //   desktopMenu.classList.add('active')
  // }else{
  //   desktopMenu.classList.remove('active')
  // }
})

barMenu.addEventListener("click", (e) => {
  e.preventDefault()
  // toggleElement(".mobile-menu"," active")
  optimizarVisualizacionMenus(".mobile-menu", ".product-detail", "active")
  if(productDetailStore.classList.contains('active')) productDetailStore.classList.remove('active')
})

carButton.addEventListener("click", (e) => {
  e.preventDefault()
  // toggleElement(".product-detail", "active")
  if (window.innerWidth >= 640){
    optimizarVisualizacionMenus(".product-detail", ".desktop-menu", "active")
  }else{
    optimizarVisualizacionMenus(".product-detail", ".mobile-menu", "active")
  }

  if(productDetailStore.classList.contains('active')) productDetailStore.classList.remove('active')
  
})

productDetailClose.addEventListener('click', closeProductDetail)