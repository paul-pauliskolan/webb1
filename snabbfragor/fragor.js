(function () {
    "use strict";
    window.SNABBFRAGOR = [
    {
        "id": "1.1",
        "title": "Vad är webbutveckling?",
        "questions": [
            [
                "Vad är skillnaden mellan en klient och en server?",
                "Klienten begär en resurs. Servern tar emot begäran och skickar ett svar.",
                "GET /index.html"
            ],
            [
                "Vad gör DNS?",
                "DNS översätter ett domännamn till den IP-adress som datorn behöver.",
                "example.com → 93.184.216.34"
            ],
            [
                "Vad är skillnaden mellan HTTP och HTTPS?",
                "HTTPS är den krypterade och säkrare varianten av HTTP.",
                "https://example.com"
            ],
            [
                "Vad betyder statuskoderna 200 och 404?",
                "200 betyder att begäran lyckades. 404 betyder att resursen inte hittades.",
                "HTTP/1.1 200 OK\nHTTP/1.1 404 Not Found"
            ],
            [
                "När används GET och när används POST?",
                "GET hämtar data. POST skickar data, exempelvis från ett formulär.",
                "GET /produkter\nPOST /kontakt"
            ]
        ]
    },
    {
        "id": "1.2",
        "title": "Kom igång med VS Code och projektmappar",
        "questions": [
            [
                "Varför bör varje webbplats ha en egen projektmapp?",
                "Då hålls webbplatsens HTML-, CSS- och bildfiler samlade och lätta att hitta.",
                "profil-sida/"
            ],
            [
                "Vilka regler bör du följa när du namnger filer och mappar?",
                "Använd små bokstäver, siffror och bindestreck. Undvik å, ä, ö, mellanslag och specialtecken.",
                "min-profil.html"
            ],
            [
                "Vad är en relativ sökväg?",
                "En sökväg som utgår från filen där sökvägen skrivs.",
                "images/profilbild.jpg"
            ],
            [
                "Vad gör Live Server?",
                "Det öppnar projektet via en lokal webbserver och laddar om sidan när du sparar.",
                "http://127.0.0.1:5500/index.html"
            ],
            [
                "Varför heter en webbplats startsida ofta index.html?",
                "Många webbservrar letar automatiskt efter en fil med namnet index.html.",
                "profil-sida/index.html"
            ]
        ]
    },
    {
        "id": "1.3",
        "title": "Din första HTML-sida",
        "questions": [
            [
                "Vad är HTML:s uppgift på en webbsida?",
                "HTML beskriver sidans innehåll, struktur och betydelse.",
                "<h1>Min profilsida</h1>"
            ],
            [
                "Vad är skillnaden mellan head och body?",
                "head innehåller information om sidan. body innehåller det som visas i webbläsarfönstret.",
                "<head>...</head>\n<body>...</body>"
            ],
            [
                "Vad anger attributet lang=\"sv\"?",
                "Det anger att sidans huvudspråk är svenska.",
                "<html lang=\"sv\">"
            ],
            [
                "Vad gör meta charset=\"UTF-8\"?",
                "Det anger teckenkodningen så att bland annat å, ä och ö visas rätt.",
                "<meta charset=\"UTF-8\">"
            ],
            [
                "Varför ska HTML valideras även om sidan ser rätt ut?",
                "Webbläsaren kan försöka dölja eller rätta fel. Validatorn hjälper dig att hitta dem.",
                ""
            ]
        ]
    },
    {
        "id": "1.4",
        "title": "Länkar, bilder och listor",
        "questions": [
            [
                "Vilket element skapar en länk, och vad gör href?",
                "Elementet a skapar länken. Attributet href anger vart länken går.",
                "<a href=\"https://example.com\">Besök sidan</a>"
            ],
            [
                "Vilka två attribut behöver en bild minst?",
                "src pekar på bildfilen och alt ger bilden ett textalternativ.",
                "<img src=\"bild.jpg\" alt=\"Porträtt av Ada\">"
            ],
            [
                "Vad ska en bra alt-text beskriva?",
                "Bildens relevanta innehåll eller funktion, inte bara ordet bild.",
                "alt=\"Porträtt av Ada\""
            ],
            [
                "När använder du ol och när använder du ul?",
                "ol används när ordningen spelar roll. ul används när ordningen inte spelar roll.",
                "<ol>...</ol>\n<ul>...</ul>"
            ],
            [
                "Vad är den semantiska skillnaden mellan strong och em?",
                "strong markerar betydelsefullt innehåll. em markerar betoning.",
                "<strong>Viktigt</strong> <em>verkligen</em>"
            ]
        ]
    },
    {
        "id": "1.5",
        "title": "Miniuppgift: profilsida",
        "questions": [
            [
                "Vilken grundstruktur måste profilsidan innehålla?",
                "DOCTYPE, html med lang, head och body.",
                "<!DOCTYPE html>"
            ],
            [
                "Vilket textinnehåll måste profilsidan minst ha?",
                "Minst en h1-rubrik och två stycken med p.",
                "<h1>Min profilsida</h1>"
            ],
            [
                "Vilka krav gäller för profilsidans bild och länk?",
                "Bilden ska ha fungerande src och beskrivande alt. Sidan ska ha minst en extern länk.",
                "<img src=\"images/profil.jpg\" alt=\"Porträtt av mig\">"
            ],
            [
                "Vilka två typer av listor ska profilsidan innehålla?",
                "En ordnad lista med ol och en oordnad lista med ul.",
                "<ol>...</ol>\n<ul>...</ul>"
            ],
            [
                "Hur ska du kontrollera profilsidan innan du går vidare?",
                "Öppna den med Live Server, testa bild och länk, validera HTML och rätta felen.",
                "Bygg → testa → validera → rätta"
            ]
        ]
    },
    {
        "id": "1.6",
        "title": "Publicera med GitHub Pages",
        "questions": [
            [
                "Vilken typ av webbplats kan GitHub Pages publicera?",
                "En statisk webbplats med exempelvis HTML, CSS, JavaScript och bilder.",
                "index.html\nstyles.css\nimages/"
            ],
            [
                "Vad måste webbplatsens startsida heta inför publiceringen?",
                "Den ska heta index.html så att webbservern hittar den automatiskt.",
                "index.html"
            ],
            [
                "Vilka Pages-inställningar används i kapitlets arbetsgång?",
                "Välj grenen main och mappen / (root) under Settings och Pages.",
                "main · / (root)"
            ],
            [
                "Varför kan en bild fungera lokalt men saknas efter publicering?",
                "Bildmappen kan saknas, sökvägen kan vara fel eller filnamnets stora och små bokstäver kan skilja sig.",
                "Logo.png ≠ logo.png"
            ],
            [
                "Kan GitHub Pages köra egen PHP-, Python- eller databaskod?",
                "Nej. GitHub Pages publicerar statiska filer men kör inte egen serverkod.",
                ""
            ]
        ]
    },
    {
        "id": "2.1",
        "title": "HTML-element och DOM-tänk",
        "questions": [
            [
                "Vilka delar består ett vanligt HTML-element av?",
                "En starttagg, innehåll och en sluttagg. Starttaggen kan även innehålla attribut.",
                "<p class=\"intro\">Text</p>"
            ],
            [
                "Vad är skillnaden mellan ett attribut och ett attributvärde?",
                "Attributet anger vilken extra information som ges och värdet anger informationens innehåll.",
                "class=\"intro\""
            ],
            [
                "Ge ett exempel på ett element utan sluttagg.",
                "img är ett vanligt exempel och har inget eget textinnehåll.",
                "<img src=\"bild.jpg\" alt=\"Beskrivning\">"
            ],
            [
                "Vad betyder det att element är nästlade?",
                "Att ett element ligger inuti ett annat och bildar relationer mellan förälder och barn.",
                "<p>Text med <strong>viktigt</strong>.</p>"
            ],
            [
                "Vad är DOM?",
                "Document Object Model är webbläsarens trädmodell av HTML-dokumentets noder.",
                "document → html → body → main → p"
            ]
        ]
    },
    {
        "id": "2.2",
        "title": "Semantisk HTML",
        "questions": [
            [
                "Vad betyder semantisk HTML?",
                "Att elementen beskriver innehållets betydelse och roll, inte bara dess utseende.",
                "<nav>...</nav>"
            ],
            [
                "Vad är skillnaden mellan main och section?",
                "main omsluter sidans huvudinnehåll. section är en tydlig avdelning med relaterat innehåll.",
                "<main><section>...</section></main>"
            ],
            [
                "När passar article bättre än section?",
                "När innehållet kan stå mer självständigt, exempelvis en artikel eller ett inlägg.",
                "<article>...</article>"
            ],
            [
                "När bör div användas?",
                "När inget mer betydelsefullt semantiskt element passar.",
                "<div class=\"card\">...</div>"
            ],
            [
                "Varför är en logisk rubrikordning viktig?",
                "Den gör innehållets hierarki lättare att förstå för både användare och hjälpmedel.",
                "<h1>...</h1>\n<h2>...</h2>"
            ]
        ]
    },
    {
        "id": "2.3",
        "title": "Formulär från grunden",
        "questions": [
            [
                "Vad gör form-attributen action och method?",
                "action anger vart informationen skickas och method anger hur den skickas, ofta med GET eller POST.",
                "<form action=\"/kontakt\" method=\"post\">"
            ],
            [
                "Hur kopplas en label till rätt input?",
                "label-elementets for ska ha samma värde som input-elementets id.",
                "<label for=\"name\">Namn</label>\n<input id=\"name\" name=\"name\">"
            ],
            [
                "Varför behöver ett formulärfält ett name-attribut?",
                "name blir fältets nyckel när formulärinformationen skickas.",
                "name=\"email\""
            ],
            [
                "När används textarea i stället för input?",
                "textarea används för längre text på flera rader, exempelvis ett meddelande.",
                "<textarea name=\"message\"></textarea>"
            ],
            [
                "Vad är skillnaden mellan radio-knappar och checkboxar?",
                "Radio används när ett alternativ ska väljas. Checkboxar tillåter ett eller flera val.",
                "<input type=\"radio\">\n<input type=\"checkbox\">"
            ]
        ]
    },
    {
        "id": "2.4",
        "title": "Tillgängliga formulär",
        "questions": [
            [
                "Varför ska du välja rätt input-typ?",
                "Rätt typ ger bättre inmatning, validering och tangentbord, särskilt på mobiler.",
                "<input type=\"email\">"
            ],
            [
                "Vad gör attributet required?",
                "Det gör att webbläsaren kräver ett värde innan formuläret kan skickas.",
                "<input name=\"name\" required>"
            ],
            [
                "Vad används minlength och maxlength till?",
                "De anger minsta respektive största tillåtna antal tecken.",
                "<input minlength=\"2\" maxlength=\"50\">"
            ],
            [
                "Vad gör fieldset och legend?",
                "fieldset grupperar relaterade fält och legend ger gruppen en rubrik.",
                "<fieldset><legend>Kontaktväg</legend>...</fieldset>"
            ],
            [
                "Varför ska ett felmeddelande vara tydligt och konkret?",
                "Användaren behöver förstå vilket fält som är fel och hur felet kan rättas.",
                "Skriv en giltig e-postadress."
            ]
        ]
    },
    {
        "id": "2.5",
        "title": "Miniuppgift: kontaktformulär",
        "questions": [
            [
                "Vilka element utgör grunden i kontaktformuläret?",
                "form, label, input, textarea och en knapp för att skicka.",
                "<form>...</form>"
            ],
            [
                "Hur görs e-postfältet både begripligt och validerbart?",
                "Koppla en label till fältets id och använd type=\"email\".",
                "<label for=\"email\">E-post</label>\n<input id=\"email\" type=\"email\" name=\"email\">"
            ],
            [
                "Varför ska radio-knappar med samma val höra till samma name?",
                "Då behandlar webbläsaren dem som en grupp där bara ett val kan vara aktivt.",
                "name=\"contact-method\""
            ],
            [
                "Hur kontrollerar du vilka formulärvärden som skickades?",
                "Skicka testformuläret till httpbin och granska svaret med fältnamnen och värdena.",
                "action=\"https://httpbin.org/post\""
            ],
            [
                "Vilken försiktighet behövs när formuläret samlar personuppgifter?",
                "Fråga bara efter uppgifter som behövs och använd påhittade uppgifter vid testning.",
                ""
            ]
        ]
    },
    {
        "id": "3.1",
        "title": "Vad CSS gör",
        "questions": [
            [
                "Vad används CSS till?",
                "CSS styr presentationen, exempelvis färg, storlek, avstånd och layout.",
                "h1 { color: green; }"
            ],
            [
                "Vilka delar har en CSS-regel?",
                "En selektor och ett deklarationsblock med egenskaper och värden.",
                "h1 { font-size: 2rem; }"
            ],
            [
                "Hur kopplas en extern CSS-fil till HTML?",
                "Med ett link-element i dokumentets head.",
                "<link rel=\"stylesheet\" href=\"styles.css\">"
            ],
            [
                "När passar enheterna rem och ch?",
                "rem passar ofta för text och avstånd. ch kan begränsa textradernas längd.",
                "font-size: 1rem;\nmax-width: 70ch;"
            ],
            [
                "Vad innebär kaskaden när två lika starka regler krockar?",
                "Den regel som kommer senare kan vinna om selektorerna har samma styrka.",
                "p { color: blue; }\np { color: green; }"
            ]
        ]
    },
    {
        "id": "3.2",
        "title": "Färg, typografi och läsbarhet",
        "questions": [
            [
                "Vilka värden kan en RGB-kanal ha?",
                "Varje kanal för rött, grönt och blått går från 0 till 255.",
                "rgb(64 160 220)"
            ],
            [
                "Vad beskriver H, S och L i hsl()?",
                "Hue är färgvinkel, saturation är mättnad och lightness är ljushet.",
                "hsl(205 65% 56%)"
            ],
            [
                "Vad är en font stack?",
                "En prioriterad lista av typsnitt där webbläsaren provar nästa om ett typsnitt saknas.",
                "font-family: Arial, Helvetica, sans-serif;"
            ],
            [
                "Varför är god kontrast viktig?",
                "Text och viktiga komponenter måste gå att urskilja från bakgrunden för att vara läsbara.",
                "color: #172026;\nbackground: #f6f8f7;"
            ],
            [
                "Hur påverkar line-height läsbarheten?",
                "Ett rimligt radavstånd ger raderna luft och gör längre text lättare att följa.",
                "line-height: 1.5;"
            ]
        ]
    },
    {
        "id": "3.3",
        "title": "Boxmodellen i praktiken",
        "questions": [
            [
                "Vilka fyra lager ingår i boxmodellen?",
                "Utifrån och in: margin, border, padding och content.",
                "margin → border → padding → content"
            ],
            [
                "Vad är skillnaden mellan margin och padding?",
                "Margin skapar avstånd utanför elementet. Padding skapar luft mellan innehållet och kantlinjen.",
                "margin: 1rem;\npadding: 1rem;"
            ],
            [
                "Vad gör box-sizing: border-box?",
                "Den gör att angiven bredd inkluderar padding och border.",
                "box-sizing: border-box;"
            ],
            [
                "Vad är en viktig skillnad mellan block och inline?",
                "Blockelement börjar normalt på ny rad och kan ta tillgänglig bredd. Inline-element följer textflödet.",
                "display: block;\ndisplay: inline;"
            ],
            [
                "Vilka grundregler gör en bild responsiv i sin behållare?",
                "max-width hindrar bilden från att bli bredare än behållaren och height: auto bevarar proportionerna.",
                "img { max-width: 100%; height: auto; }"
            ]
        ]
    },
    {
        "id": "3.4",
        "title": "Klasser, id och selektorstrategi",
        "questions": [
            [
                "Hur skrivs typ-, klass- och id-selektorer?",
                "Typ skrivs med elementnamnet, klass med punkt och id med nummertecken.",
                "p { }\n.card { }\n#contact { }"
            ],
            [
                "När bör du välja klass framför id för CSS?",
                "När stilen ska kunna återanvändas på flera element.",
                ".card { padding: 1rem; }"
            ],
            [
                "Vad betyder en kedjad selektor som .card.highlight?",
                "Den väljer element som har både klassen card och klassen highlight.",
                ".card.highlight { border-color: orange; }"
            ],
            [
                "Vad väljer den härstammande selektorn article p?",
                "Alla p-element som ligger inuti ett article-element.",
                "article p { max-width: 70ch; }"
            ],
            [
                "Vad är specificitet?",
                "Regler för hur webbläsaren avgör vilken selektor som väger tyngst när deklarationer krockar.",
                "id > klass > typ"
            ]
        ]
    },
    {
        "id": "3.5",
        "title": "Miniuppgift: designa om profilsidan",
        "questions": [
            [
                "Var ska profilsidans CSS ligga?",
                "I en extern CSS-fil som kopplas från HTML-dokumentets head.",
                "<link rel=\"stylesheet\" href=\"styles.css\">"
            ],
            [
                "Vilka tre grundval ska body ange enligt uppgiften?",
                "En font stack, textfärg och bakgrundsfärg.",
                "body { font-family: Arial, sans-serif; color: #222; background: #fff; }"
            ],
            [
                "Hur gör du huvudinnehållet lättläst på en bred skärm?",
                "Ge det en rimlig maxbredd, centrera det och lägg till luft runt innehållet.",
                "main { max-width: 70ch; margin: 0 auto; padding: 2rem; }"
            ],
            [
                "Varför ska länkar ha både hover- och focus-läge?",
                "Så att återkopplingen fungerar för både mus- och tangentbordsanvändare.",
                "a:hover, a:focus-visible { text-decoration-thickness: 3px; }"
            ],
            [
                "Vad menas med meningsfulla klassnamn?",
                "Namnen beskriver innehållets eller komponentens roll i stället för ett tillfälligt utseende.",
                ".introduction { ... }"
            ]
        ]
    }
];
}());
