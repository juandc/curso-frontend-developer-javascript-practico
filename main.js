const navbarEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const barMenu = document.querySelector(".menu")
const menuMobile = document.querySelector(".mobile-menu")
const carButton = document.querySelector(".navbar-shopping-cart")
const shoppingCart = document.querySelector(".product-detail")
const cardContainer = document.querySelector(".cards-container")

const nameProductList = ["Laptop", "Celular", "Bike", "Pescera", "El Psicoanalista - Libro"]
const priceProductList = [2100, 900, 120, 50, 10]
const imageProductList = [
  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  
  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
]

function products(name, price, image){
  this.name = name
  this.price = price
  this.image = image
}

function generateProducts( name, price, image){
  const items = []
  for(let i=0; i < name.length; i++){
    let newProduct
    newProduct = new products(name[i], price[i], image[i])
    items.push(newProduct)
  }
  return items
}

const productList = generateProducts(nameProductList, priceProductList, imageProductList)

/**
 * Permite agregar los productos al HTML
*/


// * FUNCIONES

function documentCreateHTMLProducts(){

  for(product of productList){
    let divProductCard = document.createElement("div")
    divProductCard.setAttribute("class", "product-card")
    
    let imgProduct = document.createElement("img")
    imgProduct.setAttribute("src", product.image)
    imgProduct.setAttribute("alt", "Imagen del producto no encontrado")
    
    let divProductInfo = document.createElement("div")
    divProductInfo.setAttribute("class", "product-info")
    
    let divPriceName = document.createElement("div")
    
    let pPrice, pName
    pPrice = document.createElement("p")
    pName = document.createElement("p")
    pPrice.innerText = product.price
    pName.innerText = product.name

    let figureProduct = document.createElement("figure")
    
    let iconProduct = document.createElement("img")
    iconProduct.setAttribute("src", "./icons/bt_add_to_cart.svg")
    iconProduct.setAttribute("alt", "Icono de comprar no encontrado")
    
    divPriceName.append(pPrice, pName)
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
})

carButton.addEventListener("click", (e) => {
  e.preventDefault()
  // toggleElement(".product-detail", "active")
  if (window.innerWidth >= 640){
    optimizarVisualizacionMenus(".product-detail", ".desktop-menu", "active")
  }else{
    optimizarVisualizacionMenus(".product-detail", ".mobile-menu", "active")
  }
})