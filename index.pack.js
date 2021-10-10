const hamburgerBtn = document.querySelector(".nav-toggle");
const hamburgerEl = document.querySelector(".hamburger");
const linkEls = document.querySelectorAll(".nav__link");
const navEl = document.querySelector(".nav");

hamburgerBtn.addEventListener("click", () => {
  navEl.classList.toggle("nav-open");
  hamburgerEl.classList.toggle("nav-open");
});

linkEls.forEach(linkEl => {
  linkEl.addEventListener("click", () => {
    navEl.classList.toggle("nav-open");
    hamburgerEl.classList.toggle("nav-open");
  });
});
