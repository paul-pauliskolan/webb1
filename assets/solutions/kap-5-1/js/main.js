// Första kontrollen: meddelandet ska synas i webbläsarens Console.
console.log("JavaScript fungerar");

// Hämta knappen och texten från HTML-dokumentet.
const testButton = document.querySelector("#test-button");
const status = document.querySelector("#status");

// Funktionen körs först när användaren klickar på knappen.
testButton.addEventListener("click", function () {
  status.textContent = "JavaScript reagerade på klicket.";
  console.log("Testknappen klickades");
});
