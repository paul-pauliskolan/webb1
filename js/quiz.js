// Reusable quiz renderer for static chapter pages
// Usage: window.renderQuiz(containerElement, quizData)
(function () {
  const QUIZ_STATISTICS_ENDPOINT = "https://script.google.com/macros/s/AKfycbyAwZzSNGro2YnjFZABzDncLpcfstXGokZQwJFqM4tuZ8_qXw8vTbtEIjMlyBlVwXvm/exec";

  function recordQuizStatistics({ quizId, chapter, answers }) {
    if (!QUIZ_STATISTICS_ENDPOINT || !Array.isArray(answers) || !answers.length) {
      return;
    }

    fetch(QUIZ_STATISTICS_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        quizId,
        chapter,
        pagePath: window.location.pathname,
        answers,
      }),
    }).catch(() => {
      // Rattningen ska fungera aven om statistik inte kan skickas.
    });
  }

  function quizIdentifier(container, quizData) {
    if (quizData.quizId) return quizData.quizId;
    if (container.id) return container.id.replace(/^quiz-/, "kapitel-");
    return window.location.pathname.split("/").pop().replace(/\.html$/, "") || "quiz";
  }

  function chapterTitle(quizData) {
    if (quizData.chapter) return quizData.chapter;
    if (quizData.title) return quizData.title.replace(/^Quiz:\s*/i, "");
    const heading = document.querySelector("h1");
    return heading ? heading.textContent.trim() : "";
  }

  function answerRows(form, quizData) {
    return quizData.questions.map((question, questionIndex) => {
      const name = `quiz${questionIndex}`;
      const selected = form.querySelector(`input[name="${name}"]:checked`);
      const selectedIndex = selected ? Number(selected.value) : -1;

      return {
        questionNumber: questionIndex + 1,
        questionText: question.question,
        selectedAnswer: selectedIndex >= 0 ? question.options[selectedIndex] : "",
        correctAnswer: question.options[question.correct],
        isCorrect: selectedIndex === question.correct,
      };
    });
  }

  function createOption(name, qIndex, optIndex, text) {
    const id = `${name}-q${qIndex}-o${optIndex}`;
    const wrapper = document.createElement("div");
    wrapper.className = "quiz-option";
    const input = document.createElement("input");
    input.type = "radio";
    input.name = name;
    input.id = id;
    input.value = String(optIndex);
    const label = document.createElement("label");
    label.htmlFor = id;
    label.innerText = text;
    wrapper.appendChild(input);
    wrapper.appendChild(label);
    return wrapper;
  }

  function formatInlineCode(text) {
    return escapeHtml(text).replace(/`([^`]+)`/g, "<code>$1</code>");
  }

  function renderQuestion(form, qIndex, q) {
    const name = `quiz${qIndex}`;
    const container = document.createElement("div");
    container.className = "quiz-question";

    const qEl = document.createElement("p");
    qEl.className = "quiz-qtext";
    qEl.innerHTML = `${qIndex + 1}. ${formatInlineCode(q.question)}`;
    container.appendChild(qEl);

    q.options.forEach((opt, i) => {
      container.appendChild(createOption(name, qIndex, i, opt));
    });

    const feedback = document.createElement("div");
    feedback.className = "quiz-feedback";
    feedback.setAttribute("aria-live", "polite");
    container.appendChild(feedback);

    form.appendChild(container);
  }

  function clearFeedback(container) {
    container
      .querySelectorAll(".quiz-feedback")
      .forEach((f) => (f.innerHTML = ""));
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function evaluate(form, quizData) {
    const results = [];
    quizData.forEach((q, i) => {
      const name = `quiz${i}`;
      const selected = form.querySelector(`input[name="${name}"]:checked`);
      const feedbackEl = form.querySelectorAll(".quiz-feedback")[i];
      if (!selected) {
        feedbackEl.innerHTML = `<span class="quiz-warn">Välj ett alternativ först.</span>`;
        results.push(false);
        return;
      }
      const chosen = parseInt(selected.value, 10);
      if (chosen === q.correct) {
        feedbackEl.innerHTML = `<span class="quiz-correct">Rätt! ${q.explanation || ""}</span>`;
        results.push(true);
      } else {
        const correctText = escapeHtml(q.options[q.correct] || "rätt svar");
        feedbackEl.innerHTML = `<span class="quiz-incorrect">Fel — ${q.feedback || "Det här svaret är inte korrekt."} Rätt svar: <strong>${correctText}</strong></span>`;
        results.push(false);
      }
    });
    return results;
  }

  function styles() {
    return `
        .quiz { border-top:1px solid #e0e0e0; padding-top:1rem; margin-top:1.2rem }
        .quiz h3{margin:0 0 .5rem}
        .quiz-question{margin-bottom:1rem}
        .quiz-option{margin:6px 0; display:flex; align-items:center; gap:0.5rem}
        .quiz-option input[type="radio"]{flex:0 0 auto}
        .quiz-option label{flex:1 1 auto}
        .quiz-feedback{margin-top:.25rem; padding:.3rem; border-radius:4px}
        .quiz-correct{background:#e6ffea; color:#007a18; padding:.2rem .4rem; border-radius:4px}
        .quiz-incorrect{background:#ffecec; color:#b00020; padding:.2rem .4rem; border-radius:4px}
        .quiz-warn{color:#b58900}
        .quiz button{margin-top:.25rem; margin-bottom:1rem}
        .quiz button, .quiz .quiz-check{
            padding:.4rem .7rem;
            font-size:.95rem;
            border-radius:0.5rem;
            background:var(--accent-strong, #ff8a3d);
            color:#111;
            border:0;
            cursor:pointer;
            box-shadow: 0 6px 18px rgba(0,0,0,0.24);
            display:inline-flex;
            align-items:center;
            justify-content:center;
            align-self:flex-start;
            width:auto;
            max-width:220px;
            white-space:nowrap;
        }
        .quiz button:hover, .quiz .quiz-check:hover{filter:brightness(1.04)}
        .quiz-summary{margin-top:0; padding:.4rem; border-radius:4px}
        .quiz-summary.correct{background:#e6ffea; color:#007a18}
        .quiz-summary.partial{background:#fff3f3; color:#b00020}
        `;
  }

  window.renderQuiz = function (container, quizData) {
    if (!container) return;
    container.classList.add("quiz");
    const styleId = "quiz-component-styles";
    if (!document.getElementById(styleId)) {
      const s = document.createElement("style");
      s.id = styleId;
      s.textContent = styles();
      document.head.appendChild(s);
    }

    const title = document.createElement("h3");
    title.innerText = quizData.title || "Övningsquiz";
    container.appendChild(title);

    const form = document.createElement("form");
    form.className = "quiz-form";

    quizData.questions.forEach((q, i) => renderQuestion(form, i, q));

    if (QUIZ_STATISTICS_ENDPOINT) {
      const note = document.createElement("p");
      note.className = "quiz-statistics-note";
      note.innerText = "Anonyma svar används för att förbättra quizet.";
      form.appendChild(note);
    }

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-check";
    btn.innerText = "Kontrollera svar";
    btn.addEventListener("click", () => {
      clearFeedback(container);
      const results = evaluate(form, quizData.questions);
      const correctCount = results.filter(Boolean).length;
      const total = results.length;
      const allAnswered = answerRows(form, quizData).every((answer) => answer.selectedAnswer);
      // remove previous summary if any
      const prev = container.querySelector(".quiz-summary");
      if (prev) prev.remove();
      const s = document.createElement("div");
      s.className = "quiz-summary";
      if (correctCount === total) {
        s.classList.add("correct");
        s.innerHTML = `<strong>Alla svar är korrekta — Bra jobbat!</strong>`;
      } else {
        s.classList.add("partial");
        s.innerHTML = `<strong>${correctCount} av ${total} rätt.</strong> Korrigera de felaktiga svaren och prova igen.`;
      }
      container.appendChild(s);

      if (allAnswered && !form.dataset.statisticsSent) {
        recordQuizStatistics({
          quizId: quizIdentifier(container, quizData),
          chapter: chapterTitle(quizData),
          answers: answerRows(form, quizData),
        });
        form.dataset.statisticsSent = "true";
      }
    });

    form.appendChild(btn);
    container.appendChild(form);
  };
})();
