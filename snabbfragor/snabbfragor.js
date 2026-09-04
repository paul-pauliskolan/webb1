(function () {
    const slides = [...document.querySelectorAll(".slide")];
    const number = document.querySelector("[data-question-number]");
    const type = document.querySelector("[data-card-type]");
    const previousButton = document.querySelector("[data-previous]");
    const nextButton = document.querySelector("[data-next]");
    let index = 0;
    function render() {
        slides.forEach((slide, position) => slide.classList.toggle("is-active", position === index));
        number.textContent = slides[index].dataset.question;
        type.textContent = slides[index].classList.contains("answer-slide") ? "Facit" : "Fråga";
        previousButton.disabled = index === 0;
        nextButton.textContent = index === slides.length - 1 ? "Till översikten" : "Nästa →";
    }
    function next() { if (index < slides.length - 1) { index += 1; render(); } else { location.href = "index.html"; } }
    function previous() { if (index > 0) { index -= 1; render(); } }
    document.addEventListener("keydown", event => {
        if (event.target.matches("button, a, input, textarea, select")) return;
        if (event.key === " " || event.key === "ArrowRight") { event.preventDefault(); next(); }
        if (event.key === "ArrowLeft") { event.preventDefault(); previous(); }
    });
    nextButton.addEventListener("click", next);
    previousButton.addEventListener("click", previous);
    render();
})();
