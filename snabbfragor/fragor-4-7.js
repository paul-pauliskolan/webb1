(function () {
    "use strict";
    window.SNABBFRAGOR.push(...[
    {
        "id": "4.1",
        "title": "Flexbox för rader, menyer och kort",
        "questions": [
            [
                "När passar flexbox bäst?",
                "För endimensionella layouter där innehåll ordnas i en rad eller kolumn.",
                "display: flex;"
            ],
            [
                "Vad gör flex-direction?",
                "Den anger huvudaxelns riktning, exempelvis row eller column.",
                "flex-direction: column;"
            ],
            [
                "Vad gör justify-content?",
                "Den fördelar utrymme och placerar objekt längs huvudaxeln.",
                "justify-content: space-between;"
            ],
            [
                "Vad gör align-items?",
                "Den placerar flexobjekt längs tväraxeln.",
                "align-items: center;"
            ],
            [
                "Varför används flex-wrap?",
                "Den låter objekt brytas till nya rader när utrymmet inte räcker.",
                "flex-wrap: wrap;"
            ]
        ]
    },
    {
        "id": "4.2",
        "title": "Grid för sidlayouter",
        "questions": [
            [
                "När passar CSS Grid bäst?",
                "När layouten behöver styras i både rader och kolumner.",
                "display: grid;"
            ],
            [
                "Hur skapar du tre lika breda kolumner?",
                "Använd grid-template-columns med tre fr-enheter.",
                "grid-template-columns: repeat(3, 1fr);"
            ],
            [
                "Vad gör gap?",
                "Det skapar mellanrum mellan gridens rader och kolumner.",
                "gap: 1rem;"
            ],
            [
                "Vad gör minmax()?",
                "Den anger ett minsta och största mått för ett gridspår.",
                "minmax(16rem, 1fr)"
            ],
            [
                "Vad gör auto-fit i en responsiv grid?",
                "Den skapar så många kolumner som ryms och låter tomma spår falla ihop.",
                "repeat(auto-fit, minmax(16rem, 1fr))"
            ]
        ]
    },
    {
        "id": "4.3",
        "title": "Responsiva mått och bilder",
        "questions": [
            [
                "Vad är skillnaden mellan px och rem?",
                "px är ett fast CSS-mått medan rem utgår från sidans grundtextstorlek.",
                "padding: 2rem;"
            ],
            [
                "Varför används max-width i ch för brödtext?",
                "Det begränsar radlängden utifrån ungefärlig teckenbredd och förbättrar läsbarheten.",
                "max-width: 70ch;"
            ],
            [
                "Vad gör clamp()?",
                "Den ger ett responsivt värde med minimi-, önskat och maximivärde.",
                "font-size: clamp(1.5rem, 4vw, 3rem);"
            ],
            [
                "Hur hindrar du en bild från att bli bredare än sin behållare?",
                "Sätt max-width till 100 procent och height till auto.",
                "img { max-width: 100%; height: auto; }"
            ],
            [
                "Varför är relativa mått användbara?",
                "De kan anpassa sig till textstorlek, behållare eller viewport.",
                "width: 80%;"
            ]
        ]
    },
    {
        "id": "4.4",
        "title": "Media queries",
        "questions": [
            [
                "Vilken viewport-rad behövs för responsiv mobilvisning?",
                "En meta-tagg som gör viewportens bredd lika med enhetens bredd.",
                "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">"
            ],
            [
                "Vad betyder mobile first?",
                "Grundstilen skrivs för små skärmar och byggs ut för större skärmar.",
                "@media (min-width: 48rem) { ... }"
            ],
            [
                "När bör en brytpunkt läggas till?",
                "När innehållet eller layouten behöver ändras, inte för en viss enhetsmodell.",
                ""
            ],
            [
                "Vad gör en media query?",
                "Den tillämpar CSS bara när ett angivet villkor är uppfyllt.",
                "@media (min-width: 48rem) { ... }"
            ],
            [
                "Hur bör en responsiv navigation testas?",
                "Ändra viewportens bredd och kontrollera även tangentbord och fokus.",
                ""
            ]
        ]
    },
    {
        "id": "4.5",
        "title": "Miniuppgift: responsiv startsida",
        "questions": [
            [
                "Vad är målet med den responsiva startsidan?",
                "Att innehåll och layout ska fungera på mobil, surfplatta och dator.",
                ""
            ],
            [
                "Vilka två layoutverktyg ska användas?",
                "Flexbox och/eller CSS Grid där de passar sidans delar.",
                "display: grid;"
            ],
            [
                "Hur görs kort responsiva utan många brytpunkter?",
                "Använd en grid med auto-fit och minmax.",
                "repeat(auto-fit, minmax(16rem, 1fr))"
            ],
            [
                "Vilken arbetsordning är lämplig?",
                "Planera HTML-strukturen, bygg mobile first och lägg sedan till större layouter.",
                "struktur → mobil → större vyer"
            ],
            [
                "Vad ska självkontrollen omfatta?",
                "Olika bredder, bilder, länkar, fokus, läsbarhet och validering.",
                ""
            ]
        ]
    },
    {
        "id": "5.1",
        "title": "Vad JavaScript tillför",
        "questions": [
            [
                "Vad tillför JavaScript till en webbsida?",
                "Beteende och interaktion som kan reagera på användaren och ändra sidan.",
                ""
            ],
            [
                "Hur kopplas en extern JavaScript-fil?",
                "Med ett script-element vars src pekar på filen.",
                "<script src=\"app.js\"></script>"
            ],
            [
                "Vad används webbläsarens Console till?",
                "Att se fel, varningar och utskrifter från JavaScript.",
                "console.log(\"Skriptet körs\");"
            ],
            [
                "Varför bör du börja med små synliga förändringar?",
                "Då märker du snabbt om skriptet körs och var ett fel uppstår.",
                ""
            ],
            [
                "Vad gör strict mode?",
                "Det aktiverar striktare regler och hjälper till att upptäcka vissa kodfel.",
                "\"use strict\";"
            ]
        ]
    },
    {
        "id": "5.2",
        "title": "Hämta och ändra element",
        "questions": [
            [
                "Hur hittar querySelector ett element?",
                "Den använder en CSS-selektor och returnerar det första matchande elementet.",
                "document.querySelector(\".message\")"
            ],
            [
                "Hur ändras ett elements text säkert?",
                "Sätt elementets textContent.",
                "message.textContent = \"Klart!\";"
            ],
            [
                "Hur lyssnar du på ett knappklick?",
                "Lägg till en click-lyssnare med addEventListener.",
                "button.addEventListener(\"click\", handler);"
            ],
            [
                "Vad gör classList.toggle?",
                "Den lägger till en klass om den saknas och tar bort den om den finns.",
                "menu.classList.toggle(\"is-open\");"
            ],
            [
                "Varför kan CSS-kunskaper hjälpa med DOM?",
                "Samma selektorer kan ofta användas för att hitta element i JavaScript.",
                ""
            ]
        ]
    },
    {
        "id": "5.3",
        "title": "Formulär och feedback",
        "questions": [
            [
                "Vilket event ska normalt fånga formulärinlämning?",
                "Formulärets submit-event.",
                "form.addEventListener(\"submit\", handler);"
            ],
            [
                "Varför används preventDefault i ett övningsformulär?",
                "Det hindrar sidans vanliga omladdning så att JavaScript kan hantera flödet.",
                "event.preventDefault();"
            ],
            [
                "Hur läses värdet från ett inputfält?",
                "Via fältets value-egenskap.",
                "const name = input.value;"
            ],
            [
                "Varför är submit bättre än bara knappens click?",
                "Submit fångar även inlämning med Enter i ett formulärfält.",
                ""
            ],
            [
                "Vad kännetecknar bra feedback?",
                "Den är tydlig, nära händelsen och berättar vad som hände eller behöver rättas.",
                ""
            ]
        ]
    },
    {
        "id": "5.4",
        "title": "Små interaktioner utan ramverk",
        "questions": [
            [
                "Vilket grundmönster återkommer i små interaktioner?",
                "Hitta element, lyssna på event och ändra något synligt.",
                ""
            ],
            [
                "Hur kan en meny visas och döljas?",
                "Växla en CSS-klass när menyknappen aktiveras.",
                "menu.classList.toggle(\"is-open\");"
            ],
            [
                "Vad är ARIA?",
                "Attribut och roller som kan förmedla gränssnittets betydelse och tillstånd till hjälpmedel.",
                "aria-expanded=\"false\""
            ],
            [
                "Vad ska aria-expanded visa?",
                "Om innehållet som en kontroll styr är öppet eller stängt.",
                "button.setAttribute(\"aria-expanded\", \"true\")"
            ],
            [
                "När räcker vanlig JavaScript utan ramverk?",
                "När interaktionen är liten och kan byggas tydligt med DOM och events.",
                ""
            ]
        ]
    },
    {
        "id": "5.5",
        "title": "Miniuppgift: interaktiv komponent",
        "questions": [
            [
                "Vad kännetecknar en bra liten komponent?",
                "Den gör en sak tydligt och har begripliga lägen och kontroller.",
                ""
            ],
            [
                "Vilka tre steg behövs i JavaScript-delen?",
                "Välj element, lyssna på en händelse och uppdatera komponentens läge.",
                ""
            ],
            [
                "Var bör utseendet för öppet eller aktivt läge ligga?",
                "I en CSS-klass som JavaScript växlar.",
                ".is-open { display: block; }"
            ],
            [
                "Vad ska tangentbordstestet kontrollera?",
                "Att kontroller kan nås, aktiveras och visar tydligt fokus.",
                ""
            ],
            [
                "Varför ska grundläget fungera innan fler funktioner läggs till?",
                "Det gör komponenten enklare att felsöka och bedöma.",
                ""
            ]
        ]
    },
    {
        "id": "6.1",
        "title": "Bildformat på webben",
        "questions": [
            [
                "Vad är skillnaden mellan pixel- och vektorbilder?",
                "Pixelbilder består av bildpunkter; vektorbilder beskrivs med former och kan skalas utan pixlighet.",
                ""
            ],
            [
                "När passar JPEG?",
                "För fotografier där liten filstorlek är viktig och transparens inte behövs.",
                "photo.jpg"
            ],
            [
                "När passar PNG?",
                "När förlustfri kvalitet eller transparens behövs, exempelvis enkel grafik.",
                "logo.png"
            ],
            [
                "När passar SVG?",
                "För logotyper, ikoner och annan skalbar vektorgrafik.",
                "icon.svg"
            ],
            [
                "Vad är en fördel med WebP eller AVIF?",
                "De kan ge hög kvalitet med mindre filstorlek än äldre format.",
                "image.webp"
            ]
        ]
    },
    {
        "id": "6.2",
        "title": "Optimera bilder",
        "questions": [
            [
                "Varför ska en bild ha rätt pixelmått före publicering?",
                "En onödigt stor bild tar längre tid och mer data att ladda.",
                ""
            ],
            [
                "Vad innebär bildkomprimering?",
                "Att minska filstorleken, ibland genom att kasta information som ögat knappt märker.",
                ""
            ],
            [
                "Vad gör loading=\"lazy\"?",
                "Det skjuter upp laddning av bilder utanför den synliga delen av sidan.",
                "<img loading=\"lazy\" ...>"
            ],
            [
                "Vad gör srcset?",
                "Det erbjuder flera bildfiler så webbläsaren kan välja lämplig storlek.",
                "srcset=\"small.webp 400w, large.webp 1200w\""
            ],
            [
                "Hur kontrollerar du bildladdningen?",
                "Använd Network-panelen och granska storlek, format och när filerna hämtas.",
                ""
            ]
        ]
    },
    {
        "id": "6.3",
        "title": "Ljud, video och inbäddat innehåll",
        "questions": [
            [
                "Hur ger du användaren uppspelningskontroller?",
                "Lägg till attributet controls på audio eller video.",
                "<video controls>...</video>"
            ],
            [
                "Varför kan flera source-element användas?",
                "Webbläsaren kan välja ett mediaformat som den stöder.",
                "<source src=\"film.webm\" type=\"video/webm\">"
            ],
            [
                "Vad bör video erbjuda för användare som inte hör ljudet?",
                "Textning med track och vid behov en textversion.",
                "<track kind=\"captions\" ...>"
            ],
            [
                "Vad är ett iframe-element?",
                "Ett element som bäddar in innehåll från en annan webbsida eller tjänst.",
                "<iframe title=\"Karta\" ...></iframe>"
            ],
            [
                "Varför bör media inte starta oväntat?",
                "Autouppspelning kan störa och användaren ska kunna styra uppspelningen.",
                ""
            ]
        ]
    },
    {
        "id": "6.4",
        "title": "Prestanda och enkel felsökning",
        "questions": [
            [
                "Vad visar Network-panelen?",
                "Vilka resurser som begärs, deras status, storlek och laddningstid.",
                "404 Not Found"
            ],
            [
                "Hur hittar du en saknad fil?",
                "Leta efter ett misslyckat anrop och kontrollera sökväg och filnamn.",
                ""
            ],
            [
                "Varför testar man ibland utan cache?",
                "För att säkerställa att aktuella filer verkligen hämtas från servern.",
                "Disable cache"
            ],
            [
                "Vad används Lighthouse till?",
                "En automatisk granskning av bland annat prestanda, tillgänglighet och god praxis.",
                ""
            ],
            [
                "I vilken ordning bör du felsöka?",
                "Återskapa felet, läs Console och Network, kontrollera orsaken och testa en ändring i taget.",
                ""
            ]
        ]
    },
    {
        "id": "7.1",
        "title": "Tillgänglighetens fyra principer",
        "questions": [
            [
                "Vilka är WCAG:s fyra principer?",
                "Möjlig att uppfatta, hanterbar, begriplig och robust.",
                "POUR"
            ],
            [
                "Vad betyder möjlig att uppfatta?",
                "Information måste kunna uppfattas på fler sätt, exempelvis med textalternativ.",
                "alt=\"...\""
            ],
            [
                "Vad betyder hanterbar?",
                "Gränssnittet ska kunna användas, bland annat med tangentbord.",
                ""
            ],
            [
                "Vad betyder begriplig?",
                "Innehåll och funktioner ska vara tydliga och förutsägbara.",
                ""
            ],
            [
                "Vad betyder robust?",
                "Innehållet ska fungera med olika webbläsare och hjälpmedel.",
                ""
            ]
        ]
    },
    {
        "id": "7.2",
        "title": "Färg, kontrast och navigering",
        "questions": [
            [
                "Varför får färg inte vara den enda informationsbäraren?",
                "Alla uppfattar inte färg på samma sätt; komplettera med text, symbol eller form.",
                ""
            ],
            [
                "Vad är färgkontrast?",
                "Skillnaden i ljushet mellan exempelvis text och bakgrund.",
                ""
            ],
            [
                "Varför behövs synlig tangentbordsfokus?",
                "Användaren måste se vilken länk eller kontroll som är aktiv.",
                ":focus-visible { outline: 3px solid; }"
            ],
            [
                "Vad bör navigationens länkar ha?",
                "Tydliga namn, logisk ordning och fungerande fokusläge.",
                ""
            ],
            [
                "Varför kan mättad röd text vara svårläst?",
                "Stark färg och otillräcklig kontrast kan skapa visuella störningar.",
                ""
            ]
        ]
    },
    {
        "id": "7.3",
        "title": "GDPR och personuppgifter på webben",
        "questions": [
            [
                "Vad är en personuppgift?",
                "Information som direkt eller indirekt kan kopplas till en levande person.",
                ""
            ],
            [
                "Vad innebär uppgiftsminimering?",
                "Samla bara in de personuppgifter som verkligen behövs.",
                ""
            ],
            [
                "Vad är en rättslig grund?",
                "Ett lagligt stöd som krävs för att behandla personuppgifter.",
                ""
            ],
            [
                "Vad måste användaren informeras om?",
                "Vilka uppgifter som samlas in, varför, hur länge och vem som ansvarar.",
                ""
            ],
            [
                "Varför måste externa tjänster granskas?",
                "De kan själva samla in eller överföra personuppgifter.",
                ""
            ]
        ]
    },
    {
        "id": "7.4",
        "title": "Upphovsrätt och Creative Commons",
        "questions": [
            [
                "Vad innebär upphovsrätt?",
                "Skaparen får automatiskt rättigheter till sitt verk.",
                ""
            ],
            [
                "Vad är skillnaden mellan äganderätt och upphovsrätt?",
                "Att äga ett exemplar betyder inte att du får kopiera eller publicera verket.",
                ""
            ],
            [
                "Vad är Creative Commons?",
                "Standardiserade licenser där skaparen anger hur ett verk får användas.",
                "CC BY"
            ],
            [
                "Vad betyder BY i en CC-licens?",
                "Att upphovspersonen ska anges.",
                ""
            ],
            [
                "Vad bör en källangivelse innehålla?",
                "Verkets titel, upphovsperson, källa och licens.",
                ""
            ]
        ]
    },
    {
        "id": "7.5",
        "title": "Etiska designval",
        "questions": [
            [
                "Vad är ett mörkt mönster?",
                "Design som manipulerar användaren till ett val som främst gynnar tjänsten.",
                ""
            ],
            [
                "Vad kännetecknar ansvarsfull design?",
                "Tydliga val, ärlig information och respekt för användarens kontroll och integritet.",
                ""
            ],
            [
                "Varför ska språk och ton anpassas?",
                "Olika målgrupper behöver begripliga ord och en inkluderande ton.",
                ""
            ],
            [
                "Hur påverkar filstorlek etik och tillgänglighet?",
                "Tunga sidor kostar data, laddar långsamt och utestänger användare med svag uppkoppling.",
                ""
            ],
            [
                "Varför bör automatiska funktioner granskas?",
                "De kan ge olämpliga resultat eller skada människor om sammanhang och konsekvenser missas.",
                ""
            ]
        ]
    },
    {
        "id": "7.6",
        "title": "Planera en webbplats",
        "questions": [
            [
                "Varför börjar planeringen med syfte och målgrupp?",
                "De styr innehåll, språk, funktioner och layout.",
                ""
            ],
            [
                "Vad är en sitemap?",
                "En översikt över webbplatsens sidor och hur de hänger ihop.",
                "startsida → undersidor"
            ],
            [
                "Vad är en wireframe?",
                "En enkel skiss över sidans struktur och placering av innehåll.",
                ""
            ],
            [
                "Varför bör innehåll planeras före visuella detaljer?",
                "Designen ska stödja verkligt innehåll och användarens mål.",
                ""
            ],
            [
                "Varför ska andra personer testa webbplatsen?",
                "De kan upptäcka oklarheter som skaparen själv har vant sig vid.",
                ""
            ]
        ]
    },
    {
        "id": "7.7",
        "title": "Testa i webbläsaren",
        "questions": [
            [
                "Vad används responsivt läge till?",
                "Att simulera olika viewportbredder och upptäcka layoutproblem.",
                ""
            ],
            [
                "Vad används Console till vid testning?",
                "Att hitta JavaScript-fel och egna diagnostiska utskrifter.",
                ""
            ],
            [
                "Vad används Network till vid testning?",
                "Att se misslyckade, långsamma eller onödigt stora resursanrop.",
                ""
            ],
            [
                "Hur testar du tangentbordsanvändning?",
                "Tabba genom sidan och kontrollera ordning, fokus och aktivering.",
                "Tab → Enter"
            ],
            [
                "Vad bör en snabb testchecklista omfatta?",
                "Länkar, formulär, flera bredder, tangentbord, media, Console och Network.",
                ""
            ]
        ]
    }
]);
}());

