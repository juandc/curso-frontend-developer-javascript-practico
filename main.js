const navbarEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const barMenu = document.querySelector(".menu")
const menuMobile = document.querySelector(".mobile-menu")

console.log(desktopMenu.classList.contains("active") )




// * FUNCIONES
function toggleElement(selectorElement, className){
  let tagHTML;
  tagHTML = document.querySelector(selectorElement)
  tagHTML.classList.toggle(className);
}


// * AGREGANDO EVENTOS
navbarEmail.addEventListener("click", (e) =>{
  e.preventDefault()
  
  toggleElement(".desktop-menu","active")

  // if (!desktopMenu.classList.contains("active")){
  //   desktopMenu.classList.add('active')
  // }else{
  //   desktopMenu.classList.remove('active')
  // }
})


barMenu.addEventListener("click", (e) => {
  e.preventDefault()
  toggleElement(".mobile-menu", "active")
})

