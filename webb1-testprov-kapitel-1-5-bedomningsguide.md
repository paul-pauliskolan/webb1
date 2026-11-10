# Bedömningsguide: Webbutveckling 1, kapitel 1–5

Version m7r2 · 2026-11-10 · Test-ID `webb1-kapitel-1-5-m7r2`.

20 frågor, fyra per kapitel. Ett rätt svar per fråga. Ordning och alternativ slumpas; exakt fem rätta svar per position A–D. Numren nedan är källordningen, inte elevens slumpade ordning.

Källor: kapitel 1.1–1.6, 2.1–2.5, 3.1–3.5, 4.1–4.5 och 5.1–5.5 samt `js/webb1-practice-questions.js` (200 övningsfrågor). De fristående Pythonuppgifterna 2.7, 3.7, 4.7 och 5.6 hör inte till webbspåret i kursnavigationen. Praktiska miniuppgifter representeras genom tillämpningsfrågor.

## Facit, förklaring och feldiagnos

### 1. Kapitel 1.1 – Webben och HTTP

En webbläsare har hittat serverns IP-adress. Vad händer normalt när den begär en HTML-sida?

**Rätt svar:** Klienten skickar en HTTP-begäran och servern returnerar ett svar.

**Förklaring:** Webbläsaren är klienten. HTTP används för begäran och svar; HTTPS skyddar kommunikationen med TLS.

**Feldiagnos:** Be eleven förklara varför de andra alternativen inte fungerar. De prövar följande sammanblandningar: Servern skickar en DNS-fråga som gör HTML-filen till en IP-adress.; Klienten översätter CSS till en domän och skickar domänen som svar.; Servern installerar en kodredigerare innan sidan kan visas.

**Repetition:** Repetera kapitel 1.1. Följ en begäran i Network och förklara klient, server, DNS, HTTPS och statuskoder.

### 2. Kapitel 1.2, 1.6 – Filer och publicering

Sidan pages/om.html ska visa images/skola.jpg. Mapparna pages och images ligger bredvid varandra. Vilken relativ sökväg fungerar även efter publicering?

**Rätt svar:** ../images/skola.jpg

**Förklaring:** Gå först upp från pages till projektets rot med ../ och sedan in i images.

**Feldiagnos:** Be eleven förklara varför de andra alternativen inte fungerar. De prövar följande sammanblandningar: images/skola.jpg; ../pages/images/skola.jpg; ../../images/skola.jpg

**Repetition:** Repetera kapitel 1.2 och 1.6. Rita mappträdet, skriv relativa sökvägar och kontrollera dem på den publicerade sidan.

### 3. Kapitel 1.3 – HTML-grundstruktur

Vilken ändring ger både rätt fliktitel och svenska som huvudspråk?

**Rätt svar:** Sätt lang="sv" på html och lägg title i head.

**Förklaring:** lang på html anger dokumentets huvudspråk. title i head anger bland annat texten i fliken.

**Feldiagnos:** Be eleven förklara varför de andra alternativen inte fungerar. De prövar följande sammanblandningar: Sätt lang="sv" på title och lägg title i body.; Sätt charset="sv" på html och lägg h1 i head.; Sätt lang="sv" på body och använd h1 som fliktitel.

**Repetition:** Repetera kapitel 1.3. Bygg och validera ett dokument med lang, head, title och body.

### 4. Kapitel 1.4–1.5 – Länkar, bilder och listor

En profilsida ska visa en lista där stegens ordning är viktig och en länk till avsnittet med id="kontakt". Vilken kombination passar?

**Rätt svar:** ol med li samt <a href="#kontakt">Kontakt</a>.

**Förklaring:** ol beskriver en ordnad lista med li-element. #kontakt länkar till ett id på samma sida.

**Feldiagnos:** Be eleven förklara varför de andra alternativen inte fungerar. De prövar följande sammanblandningar: ul med li samt <a src="#kontakt">Kontakt</a>.; ol med p samt <a href=".kontakt">Kontakt</a>.; ul med p samt <a href="kontakt">Kontakt</a>.

**Repetition:** Repetera kapitel 1.4–1.5. Bygg en ordnad lista, en ankarlänk och en bild med relevant alt-text.

### 5. Kapitel 2.1 – DOM och nästling

Vilken relation har elementen i exemplet?

**Rätt svar:** Rubriken och stycket är barn till section och syskon med varandra.

**Förklaring:** Element som ligger direkt i samma förälder är syskon i DOM-trädet.

**Feldiagnos:** Be eleven förklara varför de andra alternativen inte fungerar. De prövar följande sammanblandningar: Rubriken är förälder till stycket och syskon med section.; Stycket är förälder till section och barn till rubriken.; Alla tre element är syskon direkt under body.

**Repetition:** Repetera kapitel 2.1. Rita ett DOM-träd och markera förälder, barn och syskon.

### 6. Kapitel 2.2 – Semantik och rubriker

En sida har h1 ”Skolklubbar”. Inuti huvudinnehållet finns sektionen ”Fotoklubben” med underavsnittet ”Mötestider”. Vilken struktur beskriver nivåerna bäst?

**Rätt svar:** main med h2 för Fotoklubben och h3 för Mötestider.

**Förklaring:** main beskriver huvudinnehållet. h2 under sidans h1 och h3 under h2 ger en logisk hierarki.

**Feldiagnos:** Be eleven förklara varför de andra alternativen inte fungerar. De prövar följande sammanblandningar: nav med h1 för Fotoklubben och h1 för Mötestider.; main med h3 för Fotoklubben och h2 för Mötestider.; footer med p för båda rubrikerna och större text via CSS.

**Repetition:** Repetera kapitel 2.2. Välj sidregioner efter funktion och skapa logiska rubriknivåer.

### 7. Kapitel 2.3 – Formulär och fält

Etiketten ska höra till fältet och det inskrivna värdet ska skickas som stad. Vilken rad är korrekt?

**Rätt svar:** <label for="city">Stad</label><input id="city" name="stad">

**Förklaring:** for ska matcha id. name anger nyckeln för fältets värde i formulärdatan.

**Feldiagnos:** Be eleven förklara varför de andra alternativen inte fungerar. De prövar följande sammanblandningar: <label for="stad">Stad</label><input id="city" name="stad">; <label for="city">Stad</label><input id="city">; <label name="stad">Stad</label><input id="city" for="stad">

**Repetition:** Repetera kapitel 2.3. Bygg ett formulär och förklara skillnaden mellan for, id och name.

### 8. Kapitel 2.4–2.5 – Tillgängliga formulär

Ett formulär har flera radioknappar för leveranssätt. Hur gör du gruppens syfte och eventuella fel begripliga?

**Rätt svar:** Samla valen i fieldset med legend och förklara fel med text.

**Förklaring:** fieldset och legend beskriver gruppen. Text förklarar fel även för den som inte uppfattar färg; gemensamt name ger ett val i gruppen.

**Feldiagnos:** Be eleven förklara varför de andra alternativen inte fungerar. De prövar följande sammanblandningar: Samla valen i div utan rubrik och markera fel enbart med rött.; Ge varje val en placeholder och dölj alla synliga etiketter.; Använd olika name för varje radioknapp så att gruppen blir tydlig.

**Repetition:** Repetera kapitel 2.4–2.5. Gruppera val med fieldset och legend och testa validering med tangentbord.

### 9. Kapitel 3.1, 3.4 – CSS och specificitet

Vilken färg får texten när dessa regler är de enda som anger color?

**Rätt svar:** Lila, eftersom klassselektorn är mer specifik än typselektorn.

**Förklaring:** När reglerna har samma ursprung och vikt avgör specificiteten här: .notice är starkare än p.

**Feldiagnos:** Be eleven förklara varför de andra alternativen inte fungerar. De prövar följande sammanblandningar: Svart, eftersom den sista regeln alltid vinner oavsett selektor.; Lila, eftersom klasser automatiskt ärver från p.; Svart, eftersom HTML-element inte kan matcha två selektorer.

**Repetition:** Repetera kapitel 3.1 och 3.4. Förutsäg vinnande regel och kontrollera i Styles-panelen.

### 10. Kapitel 3.2 – Läsbarhet och färg

En artikel har mycket långa textrader och tätt radavstånd. Vilken ändring angriper båda problemen?

**Rätt svar:** max-width: 62ch; line-height: 1.6;

**Förklaring:** ch kan begränsa radlängden. Ett relativt line-height ger mer utrymme mellan raderna utan att ändra texten.

**Feldiagnos:** Be eleven förklara varför de andra alternativen inte fungerar. De prövar följande sammanblandningar: width: 100vw; line-height: 1;; max-width: 62px; letter-spacing: 2rem;; width: 100%; font-size: 8px;

**Repetition:** Repetera kapitel 3.2. Testa kontrast, max-width i ch och line-height på en artikel.

### 11. Kapitel 3.3 – Boxmodellen

Hur bred är boxen inklusive padding och border, men utan margin?

**Rätt svar:** 260px

**Förklaring:** Med content-box blir totalen 220 + 16 + 16 + 4 + 4 = 260px. Margin räknas inte in här.

**Feldiagnos:** Be eleven förklara varför de andra alternativen inte fungerar. De prövar följande sammanblandningar: 240px; 230px; 220px

**Repetition:** Repetera kapitel 3.3. Beräkna och mät samma box med content-box och border-box.

### 12. Kapitel 3.4–3.5 – Klasser och fokus

Flera länkar ska dela samma stil och vara tydliga vid tangentbordsnavigation. Vilken lösning är bäst?

**Rätt svar:** Använd en gemensam klass och ett tydligt :focus-visible-läge.

**Förklaring:** Klasser kan återanvändas. Ett synligt fokusläge hjälper den som navigerar med tangentbord.

**Feldiagnos:** Be eleven förklara varför de andra alternativen inte fungerar. De prövar följande sammanblandningar: Använd samma id på alla länkar och dölj outline.; Skriv stil separat på varje länk och använd bara :hover.; Ersätt länkarna med span och välj färg med !important.

**Repetition:** Repetera kapitel 3.4–3.5. Styla flera länkar med en klass och testa :focus-visible med Tab.

### 13. Kapitel 4.1 – Flexbox

Korten ska kunna flytta till nästa rad när utrymmet inte räcker. Vilken ändring behövs på behållaren?

**Rätt svar:** Lägg till flex-wrap: wrap.

**Förklaring:** flex-wrap: wrap tillåter flera flexrader; justering av avstånd eller centrering ger inte radbrytning.

**Feldiagnos:** Be eleven förklara varför de andra alternativen inte fungerar. De prövar följande sammanblandningar: Lägg till align-items: center.; Lägg till flex-direction: column.; Lägg till justify-content: space-between.

**Repetition:** Repetera kapitel 4.1. Bygg en kortrad och jämför nowrap och wrap när bredden minskar.

### 14. Kapitel 4.2 – Grid

Vilken CSS skapar tre lika breda kolumner i en gridbehållare?

**Rätt svar:** grid-template-columns: repeat(3, 1fr);

**Förklaring:** repeat(3, 1fr) anger tre kolumnspår som delar det tillgängliga utrymmet lika.

**Feldiagnos:** Be eleven förklara varför de andra alternativen inte fungerar. De prövar följande sammanblandningar: grid-template-rows: repeat(3, 1fr);; grid-template-columns: 3fr;; grid-template-rows: 1fr 3fr;

**Repetition:** Repetera kapitel 4.2. Skapa tre kolumner med repeat och jämför med grid-template-rows.

### 15. Kapitel 4.3 – Responsiva mått och bilder

En stor bild ska få plats i sin behållare utan att proportionerna förstörs. Vilken grundregel passar?

**Rätt svar:** img { max-width: 100%; height: auto; }

**Förklaring:** max-width begränsar bilden till behållaren och height: auto bevarar proportionerna.

**Feldiagnos:** Be eleven förklara varför de andra alternativen inte fungerar. De prövar följande sammanblandningar: img { width: 1200px; height: 100px; }; img { min-width: 100vw; height: 100vh; }; img { max-width: 100%; height: 80px; }

**Repetition:** Repetera kapitel 4.3. Testa relativa mått, clamp och bilder med max-width och height: auto.

### 16. Kapitel 4.4–4.5 – Media queries och mobile first

Vilken layout används vid en viewportbredd på 760px, förutsatt korrekt viewport-meta och inga andra regler?

**Rätt svar:** Två kolumner, eftersom 760px uppfyller min-width: 720px.

**Förklaring:** Mobile first använder en kolumn som grund. Från och med 720px gäller regeln med två kolumner.

**Feldiagnos:** Be eleven förklara varför de andra alternativen inte fungerar. De prövar följande sammanblandningar: En kolumn, eftersom min-width bara gäller under 720px.; Två kolumner, eftersom media queries alltid gäller.; En kolumn, eftersom grundregeln alltid vinner över media queries.

**Repetition:** Repetera kapitel 4.4–4.5. Bygg en kolumn som blir två och testa precis före och efter brytpunkten.

### 17. Kapitel 5.1 – JavaScript och felsökning

En extern JavaScript-fil i head ska kunna hitta elementen i body när den körs. Vilken koppling passar?

**Rätt svar:** <script src="js/main.js" defer></script>

**Förklaring:** src kopplar JavaScript-filen. defer gör att ett vanligt externt skript körs efter att HTML-dokumentet har parsats.

**Feldiagnos:** Be eleven förklara varför de andra alternativen inte fungerar. De prövar följande sammanblandningar: <link rel="script" href="js/main.js">; <script href="js/main.js" defer></script>; <style src="js/main.js"></style>

**Repetition:** Repetera kapitel 5.1. Koppla en extern fil med defer och kontrollera filhämtning och konsolfel.

### 18. Kapitel 5.2 – DOM, events och text

Texten ska ändras först när knappen aktiveras. Vad saknas?

**Rätt svar:** En click-lyssnare som sätter message.textContent till den nya texten.

**Förklaring:** addEventListener kopplar beteendet till klicket; textContent ändrar styckets text.

**Feldiagnos:** Be eleven förklara varför de andra alternativen inte fungerar. De prövar följande sammanblandningar: En ny querySelector som skriver meddelandet direkt vid sidladdning.; Ett byte från textContent till value på p-elementet.; En CSS-regel som anropar message vid :hover.

**Repetition:** Repetera kapitel 5.2. Hämta en knapp och ett stycke och ändra textContent i en click-lyssnare.

### 19. Kapitel 5.3 – Formulär och JavaScript

Ett formulär ska visa en hälsning utan sidomladdning, både med Enter och med submit-knappen. Vilken lösning passar?

**Rätt svar:** Lyssna på formulärets submit, anropa preventDefault och läs fältets value.

**Förklaring:** submit fångar formulärets inskickning. preventDefault stoppar standardåtgärden och value ger det inskrivna värdet.

**Feldiagnos:** Be eleven förklara varför de andra alternativen inte fungerar. De prövar följande sammanblandningar: Lyssna enbart på knappens mouseover och läs fältets textContent.; Lyssna på formulärets click och byt fältets id mot hälsningen.; Lyssna på sidans load och skicka formuläret med form.submit().

**Repetition:** Repetera kapitel 5.3. Läs value i submit, använd preventDefault och testa både Enter och knapp.

### 20. Kapitel 5.4–5.5 – Klassväxling och ARIA

Menyn börjar stängd. Vilken komplettering håller knappens tillgängliga läge korrekt efter varje klick?

**Rätt svar:** button.setAttribute("aria-expanded", String(isOpen));

**Förklaring:** toggle returnerar om klassen finns efter växlingen. aria-expanded på knappen ska spegla om menyn faktiskt är öppen.

**Feldiagnos:** Be eleven förklara varför de andra alternativen inte fungerar. De prövar följande sammanblandningar: button.setAttribute("aria-expanded", "true");; menu.setAttribute("aria-controls", String(isOpen));; button.textContent = "aria-expanded";

**Repetition:** Repetera kapitel 5.4–5.5. Växla en menyklass, uppdatera aria-expanded och testa med tangentbord.

## Nya kontrollfrågor

1. Vad skiljer DNS från HTTP, och vad berättar en 404-kod?
2. Rita ett formulärs DOM-träd och förklara hur label kopplas till input.
3. Beräkna bredden för en 180px-box med 12px padding och 2px border i båda boxmodellerna.
4. Bygg en kortrad med Flexbox och en sidlayout med Grid. Förklara valet.
5. Bygg en informationsknapp som växlar klass och aria-expanded. Testa den med Tab och Enter.

## Återkoppling

17–20: Fördjupa genom en egen sida som kombinerar kapitlen.
13–16: Repetera de prioriterade områdena och förklara lösningarna.
9–12: Bygg små exempel kapitelvis och kontrollera förståelsen efter varje steg.
0–8: Börja med grundbegreppen och arbeta med handledda kodexempel.

Intervallen är repetitionsstöd, inte automatisk betygssättning. Ett resultat är ett ögonblicksmått.

## Resultatkoppling

Samma endpoint som det äldre provet. Ny flik: `Webb 1 – kapitel 1–5`. Endast tid, förnamn, antal rätt och rekommenderad repetition lagras i lärarfliken. Nästa prov behöver ett eget test-ID i TEST_SHEETS, en separat flik och en ny version av samma Apps Script-implementering.

## Verifierad implementering

Apps Script version 5 publicerad 2026-11-10 på befintlig /exec-adress. Ett test från elevflödet med KodexTest gav 5 av 20 och nådde rätt flik; testraden rensades därefter. Flikens sheetId är 665271949.

Obs: Apps Script-projektet har också arbetskod för Teknik 2. Den befintliga arbetskoden återställdes efter att Webb 1-version 5 publicerats. Aktiva andra implementeringar ändrades inte. Vid nästa Webb 1-uppdatering ska projektets Webb 1-kod i `apps-script/Code.gs` användas som grund och publiceras enbart till Webb 1-implementeringen.
