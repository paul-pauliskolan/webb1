(function () {
    "use strict";
    const questions = window.SNABBFRAGOR.flatMap(item => item.questions.map(question => ({
        chapter: item.id, question: question[0], answer: question[1], code: question[2]
    })));
    const chapter = document.querySelector("[data-chapter]");
    const progress = document.querySelector("[data-progress]");
    const question = document.querySelector("[data-random-question]");
    const answer = document.querySelector("[data-random-answer]");
    const answerText = document.querySelector("[data-answer-text]");
    const codeWrap = document.querySelector("[data-code-wrap]");
    const answerCode = document.querySelector("[data-answer-code]");
    const showButton = document.querySelector("[data-show-answer]");
    const nextButton = document.querySelector("[data-next-random]");
    let order = [];
    let index = 0;
    let answerVisible = false;

    function shuffle() {
        order = questions.slice();
        for (let i = order.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [order[i], order[j]] = [order[j], order[i]];
        }
        index = 0;
    }
    function renderQuestion() {
        const item = order[index];
        chapter.textContent = "Kapitel " + item.chapter;
        progress.textContent = "Fråga " + (index + 1) + " av " + order.length;
        question.textContent = item.question;
        answerText.textContent = item.answer;
        answerCode.textContent = item.code;
        codeWrap.hidden = !item.code;
        answer.hidden = true;
        showButton.hidden = false;
        nextButton.hidden = true;
        answerVisible = false;
        showButton.focus();
    }
    function showAnswer() {
        answer.hidden = false;
        showButton.hidden = true;
        nextButton.hidden = false;
        nextButton.textContent = index === order.length - 1 ? "Blanda om och börja om" : "Nästa slumpfråga";
        answerVisible = true;
        nextButton.focus();
    }
    function nextQuestion() {
        if (index === order.length - 1) shuffle();
        else index += 1;
        renderQuestion();
    }
    showButton.addEventListener("click", showAnswer);
    nextButton.addEventListener("click", nextQuestion);
    document.addEventListener("keydown", event => {
        if (event.key === " " && event.target.tagName !== "BUTTON") {
            event.preventDefault();
            if (answerVisible) nextQuestion();
            else showAnswer();
        }
    });
    shuffle();
    renderQuestion();
}());
