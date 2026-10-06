(function () {
    "use strict";
    const chapterId = document.body.dataset.chapter;
    const chapter = window.SNABBFRAGOR.find(item => item.id === chapterId);
    const deck = document.querySelector(".deck");
    const number = document.querySelector("[data-question-number]");
    const type = document.querySelector("[data-card-type]");
    const previousButton = document.querySelector("[data-previous]");
    const nextButton = document.querySelector("[data-next]");
    let slides = [];
    let index = 0;

    function element(tag, className, text) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text) node.textContent = text;
        return node;
    }

    function createSlide(kind, question, position) {
        const slide = element("section", "slide " + kind + "-slide");
        slide.dataset.question = String(position + 1);
        const content = element("div");
        const label = kind === "question" ? "Fråga" : "Facit";
        content.append(element("p", "eyebrow", `Kapitel ${chapter.id} · ${label} ${position + 1}`));
        content.append(element("h1", "", kind === "question" ? question[0] : question[1]));
        if (kind === "question") {
            content.append(element("p", "prompt", "Tänk på svaret först. Tryck sedan på mellanslag för att visa facit."));
        } else if (question[2]) {
            const pre = element("pre");
            pre.append(element("code", "", question[2]));
            content.append(pre);
        }
        slide.append(content);
        return slide;
    }

    if (!chapter) {
        location.href = "index.html";
        return;
    }
    document.title = `Snabbfrågor ${chapter.id} – ${chapter.title}`;
    chapter.questions.forEach((question, position) => {
        deck.append(createSlide("question", question, position));
        deck.append(createSlide("answer", question, position));
    });
    slides = [...document.querySelectorAll(".slide")];

    function render() {
        slides.forEach((slide, position) => slide.classList.toggle("is-active", position === index));
        number.textContent = slides[index].dataset.question;
        type.textContent = slides[index].classList.contains("answer-slide") ? "Facit" : "Fråga";
        previousButton.disabled = index === 0;
        nextButton.textContent = index === slides.length - 1 ? "Till översikten" : "Nästa →";
    }
    function next() {
        if (index < slides.length - 1) { index += 1; render(); }
        else location.href = "index.html";
    }
    function previous() { if (index > 0) { index -= 1; render(); } }
    document.addEventListener("keydown", event => {
        if (event.target.matches("button, a, input, textarea, select")) return;
        if (event.key === " " || event.key === "ArrowRight") { event.preventDefault(); next(); }
        if (event.key === "ArrowLeft") { event.preventDefault(); previous(); }
    });
    nextButton.addEventListener("click", next);
    previousButton.addEventListener("click", previous);
    render();
}());
