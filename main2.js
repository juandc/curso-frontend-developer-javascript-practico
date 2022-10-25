const menuEmail = document.querySelector('.navbar-email'); //seleccionando la etiqueta que contenga esta clase
const desktopMenu = document.querySelector('.desktop-menu'); //seleccinando la etiqueta que corresponde al cuadro que vamos a quitar y poner

menuEmail.addEventListener('click', IntercambiarMenu)

function IntercambiarMenu(){
    desktopMenu.classList.toggle('inactive'); //quita la clase o pone dependiendo de como sea el estado.
}

