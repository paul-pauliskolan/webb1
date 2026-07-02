// Hämta formuläret, fälten och elementet där feedback ska visas.
const form = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const feedback = document.querySelector("#feedback");

// Hjälpfunktionen visar samma typ av feedback på ett enhetligt sätt.
function showFeedback(text, type) {
  feedback.textContent = text;
  feedback.classList.remove("is-error", "is-ok");
  feedback.classList.add(type);
}

// submit fungerar både vid knappklick och när användaren trycker Enter.
form.addEventListener("submit", function (event) {
  // Stoppa formulärets vanliga sidomladdning.
  event.preventDefault();

  // trim tar bort mellanslag i början och slutet.
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === "") {
    showFeedback("Skriv ditt namn.", "is-error");
  } else if (email === "") {
    showFeedback("Skriv din e-postadress.", "is-error");
  } else if (message.length < 10) {
    showFeedback("Meddelandet måste vara minst 10 tecken.", "is-error");
  } else {
    showFeedback(`Tack ${name}! Formuläret är korrekt ifyllt.`, "is-ok");
  }
});
