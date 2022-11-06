const listeningEmail = document.querySelector(".navbar-email");
const destokpChange = document.querySelector(".desktop-menu");

const listeningMenu = document.querySelector(".menu");
const mobileChange = document.querySelector(".mobile-menu");

const ChangeMobile = () => {
  mobileChange.classList.toggle("inactive");
};

const Change = () => {
  destokpChange.classList.toggle("inactive");
};

listeningEmail.addEventListener("click", Change);
listeningMenu.addEventListener("click", ChangeMobile);
