const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1500,
};

// header container
ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// feature container
ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
});

// news container
ScrollReveal().reveal(".news__card", {
  ...scrollRevealOption,
  interval: 500,
});

// --- Background Slider logic ---
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

// Change slide every 3 seconds
setInterval(nextSlide, 3000);

// distance container reveal
ScrollReveal().reveal(".distance__card", {
  ...scrollRevealOption,
  interval: 500,
});

// attractions container reveal
ScrollReveal().reveal(".attractions__card", {
  ...scrollRevealOption,
  interval: 500, // This creates the staggered effect (0.5s between each card)
});

ScrollReveal().reveal(".menu__col", {
  ...scrollRevealOption,
  interval: 500, // 0.5s stagger between categories
});


menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  // Optional: Change the icon from 'menu' to 'close' when open
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close the menu when a link is clicked
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});