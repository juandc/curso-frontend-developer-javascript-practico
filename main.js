const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
  // toggle (pone o quita la clase depende el caso)
  desktopMenu.classList.toggle('inactive')
}
toggleDesktopMenu(desktopMenu);

// // Añadir una clase
// h1.classList.add('verde');
// // Eliminar una clase
// h1.classList.remove('ROJO');
