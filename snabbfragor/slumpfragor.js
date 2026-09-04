(function () {
    "use strict";
    const questions = [
    {
        "chapter": "1.1",
        "question": "Vad är skillnaden mellan en klient och en server?",
        "answer": "Klienten begär en resurs. Servern tar emot begäran och skickar ett svar.",
        "code": "GET /index.html"
    },
    {
        "chapter": "1.1",
        "question": "Vad gör DNS?",
        "answer": "DNS översätter ett domännamn till den IP-adress som datorn behöver.",
        "code": "example.com → 93.184.216.34"
    },
    {
        "chapter": "1.1",
        "question": "Vad är skillnaden mellan HTTP och HTTPS?",
        "answer": "HTTPS är den krypterade och säkrare varianten av HTTP.",
        "code": "https://example.com"
    },
    {
        "chapter": "1.1",
        "question": "Vad betyder statuskoderna 200 och 404?",
        "answer": "200 betyder att begäran lyckades. 404 betyder att resursen inte hittades.",
        "code": "HTTP/1.1 200 OK\\nHTTP/1.1 404 Not Found"
    },
    {
        "chapter": "1.1",
        "question": "När används GET och när används POST?",
        "answer": "GET hämtar data. POST skickar data, exempelvis från ett formulär.",
        "code": "GET /produkter\\nPOST /kontakt"
    },
    {
        "chapter": "1.2",
        "question": "Varför bör varje webbplats ha en egen projektmapp?",
        "answer": "För att webbplatsens HTML-, CSS- och bildfiler ska hållas samlade och vara lätta att hitta.",
        "code": "profil-sida/"
    },
    {
        "chapter": "1.2",
        "question": "Vilka regler bör du följa när du namnger filer och mappar?",
        "answer": "Använd små bokstäver, siffror och bindestreck. Undvik å, ä, ö, mellanslag och specialtecken.",
        "code": "min-profil.html"
    },
    {
        "chapter": "1.2",
        "question": "Vad är en relativ sökväg?",
        "answer": "En sökväg som utgår från filen där sökvägen skrivs.",
        "code": "<img src=\"images/profilbild.jpg\" alt=\"Porträttbild\">"
    },
    {
        "chapter": "1.2",
        "question": "Vad gör Live Server?",
        "answer": "Det öppnar projektet via en lokal webbserver och laddar om sidan när du sparar.",
        "code": "http://127.0.0.1:5500/index.html"
    },
    {
        "chapter": "1.2",
        "question": "Varför heter en webbplats startsida ofta index.html?",
        "answer": "Många webbservrar letar automatiskt efter en fil med namnet index.html.",
        "code": "profil-sida/index.html"
    },
    {
        "chapter": "1.3",
        "question": "Vad är HTML:s uppgift på en webbsida?",
        "answer": "HTML beskriver sidans innehåll, struktur och betydelse.",
        "code": "<h1>Min profilsida</h1>"
    },
    {
        "chapter": "1.3",
        "question": "Vad är skillnaden mellan head och body?",
        "answer": "head innehåller information om sidan. body innehåller det som visas i webbläsarfönstret.",
        "code": "<head>...</head>\\n<body>...</body>"
    },
    {
        "chapter": "1.3",
        "question": "Vad anger attributet lang=\"sv\"?",
        "answer": "Det anger att sidans huvudspråk är svenska.",
        "code": "<html lang=\"sv\">"
    },
    {
        "chapter": "1.3",
        "question": "Vad gör meta charset=\"UTF-8\"?",
        "answer": "Det anger teckenkodningen så att bland annat å, ä och ö visas rätt.",
        "code": "<meta charset=\"UTF-8\">"
    },
    {
        "chapter": "1.3",
        "question": "Varför ska HTML valideras även om sidan ser rätt ut?",
        "answer": "Webbläsaren kan försöka dölja eller rätta fel. Validatorn hjälper dig hitta dem.",
        "code": ""
    },
    {
        "chapter": "1.4",
        "question": "Vilket element skapar en länk, och vad gör href?",
        "answer": "Elementet a skapar länken. Attributet href anger vart länken går.",
        "code": "<a href=\"https://developer.mozilla.org/\">MDN</a>"
    },
    {
        "chapter": "1.4",
        "question": "Vilka två attribut behöver en bild minst?",
        "answer": "src pekar på bildfilen och alt ger bilden ett textalternativ.",
        "code": "<img src=\"images/profilbild.jpg\" alt=\"Porträttbild av mig\">"
    },
    {
        "chapter": "1.4",
        "question": "Vad ska en bra alt-text beskriva?",
        "answer": "Bildens relevanta innehåll, inte bara ordet ”bild”.",
        "code": "alt=\"Porträttbild av mig\""
    },
    {
        "chapter": "1.4",
        "question": "När använder du ol och när använder du ul?",
        "answer": "ol används när ordningen spelar roll. ul används när ordningen inte spelar roll.",
        "code": "<ol>...</ol>\\n<ul>...</ul>"
    },
    {
        "chapter": "1.4",
        "question": "Vad är den semantiska skillnaden mellan strong och em?",
        "answer": "strong markerar betydelsefullt innehåll. em markerar betoning.",
        "code": "<strong>Viktigt</strong>\\n<em>verkligen</em>"
    },
    {
        "chapter": "1.5",
        "question": "Vilken grundstruktur måste profilsidan innehålla?",
        "answer": "DOCTYPE, html med lang, head och body.",
        "code": "<!DOCTYPE html>"
    },
    {
        "chapter": "1.5",
        "question": "Vilket textinnehåll måste profilsidan minst ha?",
        "answer": "Minst en h1-rubrik och två stycken med p.",
        "code": "<h1>Min profilsida</h1>"
    },
    {
        "chapter": "1.5",
        "question": "Vilka krav gäller för profilsidans bild och länk?",
        "answer": "Bilden ska ha fungerande src och beskrivande alt. Sidan ska ha minst en extern länk.",
        "code": "<img src=\"images/profil.jpg\" alt=\"Porträtt av mig\">"
    },
    {
        "chapter": "1.5",
        "question": "Vilka två typer av listor ska profilsidan innehålla?",
        "answer": "En ordnad lista med ol och en oordnad lista med ul.",
        "code": "<ol>...</ol>\\n<ul>...</ul>"
    },
    {
        "chapter": "1.5",
        "question": "Hur ska du kontrollera profilsidan innan du går vidare?",
        "answer": "Öppna den med Live Server, testa bild och länk, validera HTML och rätta felen.",
        "code": "Bygg → testa → validera → rätta"
    }
];
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
        if (index === order.length - 1) {
            shuffle();
        } else {
            index += 1;
        }
        renderQuestion();
    }

    showButton.addEventListener("click", showAnswer);
    nextButton.addEventListener("click", nextQuestion);
    document.addEventListener("keydown", function (event) {
        if (event.key === " " && event.target.tagName !== "BUTTON") {
            event.preventDefault();
            if (answerVisible) nextQuestion();
            else showAnswer();
        }
    });
    shuffle();
    renderQuestion();
}());

