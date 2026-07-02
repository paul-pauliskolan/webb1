// querySelector använder samma selektorer som CSS.
const button = document.querySelector(".toggle-button");
const message = document.querySelector("#message");
const box = document.querySelector(".box");

// Lyssna efter klick på knappen.
button.addEventListener("click", function () {
  // toggle lägger till klassen om den saknas och tar annars bort den.
  box.classList.toggle("is-active");

  // contains kontrollerar vilket läge rutan har efter toggle.
  const isActive = box.classList.contains("is-active");

  // textContent visar en text som stämmer med det aktuella läget.
  message.textContent = isActive
    ? "Rutan är nu aktiv."
    : "Rutan är inte aktiv.";
});
