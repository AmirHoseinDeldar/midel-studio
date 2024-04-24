const addEventonElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-Toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventonElements(navTogglers, "click", toggleNav);

// const header = document.querySelector("[data-header]");
// const headerActive = function () {
//   if (window.scrollY > 1) {
//     header.classList.add("active");
//   } else {
//     header.classList.remove("active");
//   }
// };

// window.addEventListener("scroll", headerActive);
