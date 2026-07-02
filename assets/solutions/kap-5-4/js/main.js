// Hämta knappen och menyn som ska visas eller döljas.
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", function () {
  // toggle returnerar true när klassen finns efter växlingen.
  const isOpen = menu.classList.toggle("is-open");

  // Synlig knapptext ska stämma med komponentens läge.
  menuButton.textContent = isOpen ? "Dölj meny" : "Visa meny";

  // aria-expanded hjälper hjälpmedel att förstå samma läge.
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
