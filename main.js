const navbarEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const barMenu = document.querySelector(".menu")
const menuMobile = document.querySelector(".mobile-menu")
const carButton = document.querySelector(".navbar-shopping-cart")
const shoppingCart = document.querySelector(".product-detail")

console.log(desktopMenu.classList.contains("active") )




// * FUNCIONES
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


