(function () {
  "use strict";

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav__list a");

  function closeMenu() {
    if (!navToggle || !nav) return;
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Abrir menu");
    nav.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  function openMenu() {
    if (!navToggle || !nav) return;
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Fechar menu");
    nav.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      isOpen ? closeMenu() : openMenu();
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", function () {
      if (window.matchMedia("(min-width: 768px)").matches) {
        closeMenu();
      }
    });
  }
})();
