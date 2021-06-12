const menuButton = document.querySelector(".adapt-menu-button");
const navMenu = document.querySelector(".nav-menu");
const closeButton = document.querySelector(".close-button");

menuButton.addEventListener("click", () => {
  navMenu.classList.add("is-active");
  closeButton.classList.add("is-active");
});

closeButton.addEventListener("click", () => {
  navMenu.classList.remove("is-active");
  closeButton.classList.remove("is-active");
});
