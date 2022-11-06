const listeningEmail = document.querySelector(".navbar-email");
const destokpChange = document.querySelector(".desktop-menu");

const Change = () => {
  destokpChange.classList.toggle("inactive");
};

listeningEmail.addEventListener("click", Change);
