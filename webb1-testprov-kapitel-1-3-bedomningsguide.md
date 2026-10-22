# Bedömningsguide: Webbutveckling 1, kapitel 1–3

## Provöversikt

- Version: `q8v6`, skapad 2026-10-22
- Test-ID: `webb1-kapitel-1-3-q8v6`
- Omfattning: 20 flervalsfrågor, exakt ett rätt svar per fråga
- Kapitel 1: 7 frågor
- Kapitel 2: 7 frågor
- Kapitel 3: 6 frågor
- Frågor och alternativ slumpas vid varje start. Rätt svar balanseras till exakt fem A, fem B, fem C och fem D.
- Resultatet används som stöd för återkoppling och repetition, inte som automatisk betygssättning.

## Testplan och facit

Frågenumren nedan följer källordningen. Elevens visade ordning slumpas.

| Nr | Kapitel | Kunskapsområde | Avsett lärandemål | Rätt svar och kort förklaring |
|---:|---|---|---|---|
| 1 | 1.1 | Webben och HTTP | Förklara samspelet mellan DNS, klient och server | DNS översätter domännamnet till en IP-adress så att rätt server kan nås. |
| 2 | 1.1 | Webben och HTTP | Tolka statuskoder vid felsökning | 404 betyder att resursen inte hittades på den begärda sökvägen. |
| 3 | 1.1 | Webben och HTTP | Välja HTTP-metod efter syfte | POST passar när formulärdata skickas till servern. |
| 4 | 1.2 | Filer och sökvägar | Felsöka en relativ sökväg | Från rotens index.html används `images/profil.jpg`. |
| 5 | 1.3 | HTML-grundstruktur | Skilja metadata från synligt innehåll | `title` hör hemma i `head`; den synliga huvudrubriken är `h1` i `body`. |
| 6 | 1.4 | Länkar och bilder | Använda relevanta bildbeskrivningar | `img` använder `src` för filen och `alt` för beskrivningen. |
| 7 | 1.5–1.6 | Arbetsflöde och publicering | Felsöka skillnad mellan lokal och publicerad miljö | Sökväg, skiftläge och filändelse måste matcha exakt. |
| 8 | 2.1 | Element och DOM | Tolka nästling i DOM-trädet | `h2` och `p` är syskon och barn till `article`. |
| 9 | 2.1 | Element och attribut | Skilja attribut från element och innehåll | `class` är ett attribut i starttaggen. |
| 10 | 2.2 | Semantisk HTML | Välja region efter funktion | `nav` beskriver en grupp navigationslänkar. |
| 11 | 2.2 | Semantisk HTML | Skapa logisk rubrikstruktur | En `h3` är en undernivå till sektionens `h2`. |
| 12 | 2.3 | Formulär | Koppla etikett och fält | `for="email"` ska matcha fältets `id="email"`. |
| 13 | 2.3–2.4 | Formulär | Förstå `name` vid inskickning | Utan `name` följer fältvärdet normalt inte med som formulärdata. |
| 14 | 2.4–2.5 | Tillgängliga formulär | Välja validering och återkoppling | `type="email"`, `required` och textnära felmeddelande ger både kontroll och begriplig hjälp. |
| 15 | 3.1 | CSS och kaskaden | Koppla en extern stilmall | `link rel="stylesheet" href="style.css"` är korrekt. |
| 16 | 3.1, 3.4 | Kaskad och specificitet | Avgöra vilken CSS-regel som vinner | Klass-selektorn har högre specificitet än typselektorn. |
| 17 | 3.2 | Läsbarhet och kontrast | Förbättra läsbar typografi | `max-width` i `ch` och rimligt `line-height` förbättrar radlängd och läsbarhet. |
| 18 | 3.3 | Boxmodellen | Beräkna bredd med `content-box` | 240 + 40 padding + 10 border = 290 px. |
| 19 | 3.3 | Boxmodellen | Förstå `border-box` | Padding och border ingår i angiven bredd; margin gör det inte. |
| 20 | 3.4–3.5 | Selektorer och användbar design | Välja återanvändbar och tillgänglig CSS | Gemensam klass samt `:hover` och `:focus-visible` ger återanvändning och tydligt fokus. |

## Feldiagnos fråga för fråga

1. Fel pekar ofta på sammanblandning av DNS, HTTP och TLS.
2. Fel pekar på osäkerhet om skillnaden mellan lyckade svar och klientfel.
3. Fel pekar på sammanblandning av hämtning och skickande av data.
4. Fel pekar på att eleven inte utgår från filens aktuella plats i mappträdet.
5. Fel pekar på sammanblandning av dokumentmetadata och synligt innehåll.
6. Fel pekar på sammanblandning av `src`, `href` och `alt`.
7. Fel pekar på bristande förståelse för skiftlägeskänsliga filsystem och exakta sökvägar.
8. Fel pekar på osäkerhet om förälder, barn och syskon i DOM.
9. Fel pekar på sammanblandning av attribut, element och textinnehåll.
10. Fel pekar på att element väljs efter utseende snarare än betydelse.
11. Fel pekar på att rubriknivåer väljs efter storlek i stället för struktur.
12. Fel pekar på osäkerhet om relationen mellan `for` och `id`.
13. Fel pekar på sammanblandning av `id` för identifiering och `name` för skickad formulärdata.
14. Fel pekar på övertro på färg eller placeholder som enda återkoppling.
15. Fel pekar på sammanblandning av HTML-elementen `link`, `style` och `script`.
16. Fel pekar på osäkerhet om specificitet eller felaktig tillämpning av arv.
17. Fel pekar på att typografiska problem försöks lösas med bredd eller textstorlek utan hänsyn till radlängd.
18. Fel pekar på att padding eller border bara räknas en gång, eller inte alls.
19. Fel pekar på sammanblandning av `content-box`, `border-box` och margin.
20. Fel pekar på antingen onödigt hög specificitet eller att hover förväxlas med tangentbordsfokus.

## Vanliga missuppfattningar och rekommenderad repetition

### Kapitel 1

- DNS hämtar inte själva webbsidan; det hjälper klienten hitta serverns IP-adress.
- En lokal sökväg som råkar fungera bevisar inte att skiftläge och filnamn fungerar vid publicering.
- `title` är inte samma sak som sidans synliga `h1`.
- Repetition: följ en begäran i Network-panelen, rita ett mappträd, validera en enkel HTML-sida och publicera en kontrollerad minisida.

### Kapitel 2

- Semantiska element väljs efter innehållets roll, inte efter standardutseendet.
- `id` kopplar en label till ett fält; `name` identifierar värdet i formulärdatan.
- Färg ensam förklarar inte vad som är fel eller hur det ska rättas.
- Repetition: rita DOM-träd, bygg sidregioner med logiska rubriker och testa ett formulär med tangentbord och tomma/felaktiga värden.

### Kapitel 3

- Kaskad och specificitet avgör vilken av flera matchande regler som används.
- Med `content-box` läggs padding och border till bredden; med `border-box` ingår de.
- Hover ersätter inte synligt tangentbordsfokus.
- Repetition: förutsäg vinnande CSS-regel, mät en box i utvecklarverktygen och testa läsbarhet med kontrast, radlängd och radavstånd.

## Nya kontrollfrågor efter repetition

1. En CSS-fil ligger i `css/` och HTML-filen i `pages/`. Båda mapparna ligger i projektets rot. Vilken relativ sökväg från HTML-filen når CSS-filen?
2. Hur kan du i Network-panelen skilja en lyckad begäran från en resurs som saknas?
3. Rita DOM-trädet för en `main` med två `section`-element som vardera innehåller en rubrik och ett stycke.
4. Förklara varför ett formulärfält kan behöva både `id` och `name`.
5. Två CSS-regler matchar samma element: `article p` och `.lead`. Vilken vinner, och varför?
6. Beräkna synlig bredd för `width: 320px`, `padding: 12px` och `border: 2px` med först `content-box`, sedan `border-box`.

## Poängintervall för återkoppling

| Resultat | Tolkning och nästa steg |
|---|---|
| 17–20 | Kunskaperna verkar stabila i detta ögonblick. Fördjupa genom att bygga och förklara en sammanhängande sida från grunden. |
| 13–16 | God grund med några tydliga repetitionsområden. Prioritera de upp till tre områden som provet anger. |
| 9–12 | Flera centrala samband behöver befästas. Arbeta kapitelvis med små kodexempel och kontrollfrågorna ovan. |
| 0–8 | Börja om med lärandemålen och de praktiska övningarna i ett kapitel i taget, med snabb återkoppling efter varje steg. |

Intervallen ska inte användas som automatisk betygsskala. Ett enskilt resultat påverkas av situation och ger bara underlag för fortsatt undervisning och repetition.

## Kvalitetsgranskning enligt checklistan

- Varje fråga är kopplad till ett uttryckligt lärandemål.
- Tyngdpunkten ligger på tillämpning, tolkning, felsökning och jämförelse; rena minnesfrågor används bara där syntaxigenkänning är ett relevant mål.
- Samtliga distraktorer motsvarar en möjlig sammanblandning eller ett vanligt fel inom samma kunskapsområde.
- Alternativen har parallell grammatisk form och jämförbar detaljnivå.
- Inga frågor använder ”alla ovanstående” eller ”inget av ovanstående”.
- Varje fråga har exakt ett klart bästa svar.
- Frågorna är oberoende och kan visas i valfri ordning utan att ge facit till varandra.
- Språket är avsiktligt rakt och svårigheten ligger i ämneskunskapen, inte i komplicerade formuleringar.

Förbättring jämfört med enkla igenkänningsfrågor: flera uppgifter utgår från filstrukturer, kod, felsökningssignaler eller användningssituationer. Distraktorerna har skrivits om till diagnostiska missuppfattningar i stället för skämtsvar eller uppenbart ogiltiga alternativ.
