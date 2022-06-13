let menuBtn = document.querySelector(".menu-bar");
let navCard = document.querySelector(".mobile-nav-card");
let closeBtn = document.querySelector(".close-button");


menuBtn.addEventListener("click", displayMobileMenu);

function displayMobileMenu() {
   navCard.classList.add("display");
}

closeBtn.addEventListener("click", removeMobileMenu);

function removeMobileMenu() {
   navCard.classList.remove("display");
}


