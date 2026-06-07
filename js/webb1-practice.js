(function () {
  const root = document.querySelector("#practice-root");
  if (!root || !window.webb1PracticeGroups) return;

  const groupKey = root.dataset.group;
  const group = window.webb1PracticeGroups[groupKey];
  if (!group) return;
  const pageNumber = Math.max(1, Math.min(5, Number(root.dataset.page || "1")));
  const pageSize = 10;
  const pageStart = (pageNumber - 1) * pageSize;
  const pageQuestions = group.questions.slice(pageStart, pageStart + pageSize);

  const title = document.querySelector("[data-practice-title]");
  const subtitle = document.querySelector("[data-practice-subtitle]");
  const total = document.querySelector("#question-total");

  if (title) title.textContent = group.title;
  if (subtitle) subtitle.textContent = group.subtitle;
  if (total) total.textContent = String(pageQuestions.length);

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function inlineCode(value) {
    return escapeHtml(value).replace(/`([^`]+)`/g, "<code>$1</code>");
  }

  function optionSet(question, index) {
    const options = [question.answer, ...question.wrong];
    const correctIndex = index % 4;
    const correct = options.shift();
    const rotated = [...options];
    rotated.splice(correctIndex, 0, correct);
    return rotated.map((text, optionIndex) => ({
      text,
      correct: optionIndex === correctIndex
    }));
  }

  function chapterAdvice(question) {
    const text = `${question.question} ${question.answer} ${question.wrong.join(" ")} ${question.code || ""}`.toLowerCase();
    const checks = [
      [/upphovsrätt|creative commons|licens|källa|by |nc |material/, "Kap 7.4 - Upphovsrätt och Creative Commons"],
      [/gdpr|personuppgift|samtycke|e-postadress|formulärdata|spårning|cookies/, "Kap 7.3 - GDPR och personuppgifter på webben"],
      [/dark pattern|etisk|standardval|knapptext|manipuler|ansvarsfullt/, "Kap 7.5 - Etiska designval"],
      [/kontrast|färgblind|fokus|tangentbord|tillgänglig|wcag|uppfattbart|hanterbart|begripligt|robust/, "Kap 7.1-7.2 - Tillgänglighet, kontrast och navigering"],
      [/lighthouse|network|console|cache|404|prestanda|felsök/, "Kap 6.4 - Prestanda och enkel felsökning"],
      [/webp|png|jpeg|jpg|srcset|sizes|lazy|loading|squoosh|photopea|bildformat|komprimera|object-fit|video|audio|iframe/, "Kap 6.1-6.3 - Bilder, optimering och media"],
      [/javascript|event|queryselector|textcontent|classlist|klick|interaktion/, "Kap 5.1-5.4 - JavaScript och små interaktioner"],
      [/flex|grid|media query|@media|responsiv|viewport|clamp|rem|vw|minmax|gap|justify|align-items|layout|kolumn|mobile first|z-index|position/, "Kap 4.1-4.4 - Layout och responsiv design"],
      [/css|color|background|font|line-height|boxmodellen|padding|margin|border|klass|id|specificitet|selektor|max-width|ch|style/, "Kap 3.1-3.4 - CSS, boxmodellen och selektorer"],
      [/formulär|label|input|required|button|method|name|email|placeholder/, "Kap 2.3-2.4 - Formulär och tillgängliga formulär"],
      [/semantisk|dom|main|nav|footer|article|rubrik|h1|h2|h3|section|div|span/, "Kap 2.1-2.2 - HTML-element, DOM och semantik"],
      [/html|index|sökväg|filnamn|doctype|head|body|title|meta|charset|href|src|alt|lista|ul|ol|github pages|vs code/, "Kap 1.2-1.6 - HTML-grunder, filer och publicering"]
    ];

    const match = checks.find(([pattern]) => pattern.test(text));
    return match ? match[1] : "Repetera relevanta delar i Modul 1-7";
  }

  function renderCode(code) {
    if (!code) return "";
    return `<pre><code>${escapeHtml(code)}</code></pre>`;
  }

  function renderQuestion(question, index) {
    const number = pageStart + index + 1;
    const options = optionSet(question, pageStart + index);
    const buttons = options.map((option, optionIndex) => `
      <li>
        <button class="option-button" type="button" data-correct="${option.correct}" data-option-index="${optionIndex}">
          <span class="option-letter">${String.fromCharCode(65 + optionIndex)}</span>
          <span class="option-text">${inlineCode(option.text)}</span>
        </button>
      </li>
    `).join("");

    return `
      <article class="practice-card" data-question-index="${index}">
        <div class="practice-card-header">
          <h3>${number}. ${inlineCode(question.question)}</h3>
          ${renderCode(question.code)}
        </div>
        <ul class="practice-options">${buttons}</ul>
      </article>
    `;
  }

  function pageHref(page) {
    const base = {
      "1-20": "ova-prov-1-20",
      "21-30": "ova-prov-21-30",
      "31-40": "ova-prov-31-40",
      "41-50": "ova-prov-41-50"
    }[groupKey];

    return page === 1 ? `${base}.html` : `${base}-${page}.html`;
  }

  function renderPageNav() {
    return `
      <nav class="practice-page-nav" aria-label="Delar med övningsfrågor">
        ${[1, 2, 3, 4, 5].map((page) => `
          <a class="${page === pageNumber ? "is-active" : ""}" href="${pageHref(page)}">
            <span>Del ${page}</span>
            <small>Fråga ${(page - 1) * pageSize + 1}-${page * pageSize}</small>
          </a>
        `).join("")}
      </nav>
    `;
  }

  function selectedButton(card) {
    return card.querySelector(".option-button.is-selected");
  }

  function unansweredCards() {
    return [...root.querySelectorAll(".practice-card")].filter((card) => !selectedButton(card));
  }

  function resultRows() {
    return [...root.querySelectorAll(".practice-card")].map((card) => {
      const index = Number(card.dataset.questionIndex);
      const question = pageQuestions[index];
      const selected = selectedButton(card);
      const correct = card.querySelector('.option-button[data-correct="true"]');
      return {
        card,
      index,
      question,
        selected,
        correct,
        isCorrect: selected && selected.dataset.correct === "true"
      };
    });
  }

  function clearMarkedResults() {
    root.querySelectorAll(".option-button").forEach((button) => {
      button.classList.remove("is-correct", "is-wrong");
      button.disabled = false;
    });
    const results = root.querySelector(".practice-results");
    if (results) results.remove();
  }

  function submitPractice() {
    clearMarkedResults();
    const missing = unansweredCards();
    const status = root.querySelector(".practice-status");

    if (missing.length > 0) {
      status.textContent = `Du behöver svara på alla frågor först. ${missing.length} fråga${missing.length === 1 ? "" : "or"} saknar svar.`;
      missing[0].scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    status.textContent = "";
    const rows = resultRows();
    const wrong = rows.filter((row) => !row.isCorrect);
    const correctCount = rows.length - wrong.length;

    rows.forEach((row) => {
      row.correct.classList.add("is-correct");
      if (!row.isCorrect) row.selected.classList.add("is-wrong");
      row.card.classList.toggle("has-error", !row.isCorrect);
    });

    const adviceCounts = new Map();
    wrong.forEach((row) => {
      const advice = chapterAdvice(row.question);
      adviceCounts.set(advice, (adviceCounts.get(advice) || 0) + 1);
    });

    const adviceHtml = [...adviceCounts.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([advice, count]) => `<li><strong>${escapeHtml(advice)}</strong> (${count} fel)</li>`)
      .join("");

    const wrongHtml = wrong.length === 0
      ? "<p>Alla svar blev rätt.</p>"
      : wrong.map((row) => `
          <section class="wrong-item">
            <h3>${row.index + 1}. ${inlineCode(row.question.question)}</h3>
            ${renderCode(row.question.code)}
            <p><span class="wrong-text">Ditt svar:</span> ${row.selected.innerHTML}</p>
            <p><span class="correct-text">Rätt svar:</span> ${row.correct.innerHTML}</p>
            <p><span class="study-text">Öva mer på:</span> ${escapeHtml(chapterAdvice(row.question))}</p>
          </section>
        `).join("");

    const resultSection = document.createElement("section");
    resultSection.className = "practice-results";
    resultSection.setAttribute("aria-live", "polite");
    resultSection.innerHTML = `
      <h2>Resultat</h2>
      <p class="result-summary">Du fick ${correctCount} av ${rows.length} rätt.</p>
      ${wrong.length > 0 ? `<h3>Du behöver öva mer på</h3><ul class="study-list">${adviceHtml}</ul>` : ""}
      <h3>Frågor att gå igenom</h3>
      <div class="wrong-list">${wrongHtml}</div>
    `;

    root.querySelector(".practice-actions").after(resultSection);
    resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  root.innerHTML = `
    <section class="content-section practice-section">
      <h2>Frågor</h2>
      <p>Välj ett alternativ på varje fråga i den här delen. Rätt svar och återkoppling visas först när du har svarat på alla 10 frågor och klickar på <strong>Visa resultat</strong>.</p>
      ${renderPageNav()}
      <div class="practice-actions">
        <button class="practice-submit" type="button">Visa resultat</button>
        <p class="practice-status" aria-live="polite"></p>
      </div>
      <div class="practice-list">
        ${pageQuestions.map(renderQuestion).join("")}
      </div>
      ${renderPageNav()}
    </section>
  `;

  root.addEventListener("click", (event) => {
    const button = event.target.closest(".option-button");
    if (!button) return;

    const card = button.closest(".practice-card");
    const buttons = card.querySelectorAll(".option-button");
    const status = root.querySelector(".practice-status");

    buttons.forEach((item) => item.classList.remove("is-selected"));
    button.classList.add("is-selected");
    card.classList.remove("has-error");
    status.textContent = "";
  });

  root.querySelector(".practice-submit").addEventListener("click", submitPractice);
})();
