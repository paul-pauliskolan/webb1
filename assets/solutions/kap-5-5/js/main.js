// querySelectorAll hämtar alla FAQ-knappar eftersom komponenten har flera frågor.
const faqButtons = document.querySelectorAll(".faq-button");

// Lägg samma klicklyssnare på varje knapp.
faqButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // aria-controls innehåller id för svaret som hör till knappen.
    const answerId = button.getAttribute("aria-controls");
    const answer = document.querySelector(`#${answerId}`);

    // Växla svarets synlighet och spara det nya läget.
    const isOpen = answer.classList.toggle("is-open");

    // Uppdatera det tillgängliga läget på knappen.
    button.setAttribute("aria-expanded", String(isOpen));
  });
});
