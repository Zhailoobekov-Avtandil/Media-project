const menuToggler = document.querySelector(".menu-toggler");

const menuShow = document.querySelector(".header__menu");

menuToggler.addEventListener("click", function () {
  menuShow.classList.toggle("menu-show");
});
