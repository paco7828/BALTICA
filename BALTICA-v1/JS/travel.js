
let offersHeading = document.querySelector("h1")
let mainHeadings = document.querySelectorAll("main h3")
let mainHeadingEN = [
    "Weekend trip to St Petersburg in a 4-star hotel for 2 nights, return flight.",

    "Weekend trip to Oslo, Norway with 3-star accommodation for 2 nights, return flight.",

    "Weekend trip to Stockholm in a 3-star hotel for 2 nights, return flight.",

    "Weekend trip to Helsinki for 2 nights in 3-star accommodation, return flight.",

    "Weekend in Copenhagen, the capital of Denmark, also 3 nights in 3-star accommodation for 2 nights with return flight ticket."
];

let mainHeadingIT = [
    "Weekend a San Pietroburgo in hotel 4 stelle per 2 notti, volo di andata e ritorno.",

    "Viaggio di fine settimana a Oslo, Norvegia, con sistemazione a 3 stelle per 2 notti e volo di andata e ritorno.",

    "Weekend a Stoccolma in hotel 3 stelle per 2 notti, volo di andata e ritorno.",

    "Viaggio di fine settimana a Helsinki per 2 notti in struttura a 3 stelle, volo di andata e ritorno.",

    "Weekend a Copenaghen, la capitale della Danimarca, anche 3 notti in alloggio 3 stelle per 2 notti con biglietto aereo di andata e ritorno."
];

let mainPrices = document.querySelectorAll("main h2")
let pricesEN = ["189.99€ / person", "289.99€ / person", "224.99€ / person", "349.99€ / person", "189.49€ / person"]
let pricesIT = ["189.99€ / persona", "289.99€ / persona", "224.99€ / persona", "349.99€ / persona", "189.49€ / persona"]

let textContents = ["Travel", "Contact", "Quiz"];

italianBtn.addEventListener("click", () => {
    langClick += 1;

    if (langClick === 1) {
        // changes to Italian
        italianBtnImg.src = "IMG/english.png";
        langText.textContent = "Switch language";
        textContents = ["Viaggi", "Contatto", "Quiz"];
        offersHeading.textContent = "Le nostre offerte"
        offersHeading.style.left = "30%"

        for (let i = 0; i < mainHeadings.length; i++) {
            mainHeadings[i].textContent = mainHeadingIT[i]
            mainPrices[i].textContent = pricesIT[i]
        }

        let menuAnchors = document.querySelectorAll("a")
        if (menuAnchors) {
            for (let i = 0; i < menuAnchors.length; i++) {
                menuAnchors[i].textContent = textContents[i]
            }
        }

    } else if (langClick === 2) {
        // changes to English
        italianBtnImg.src = "IMG/italian.png";
        langText.textContent = "Cambia lingua";
        textContents = ["Travel", "Contact", "Quiz"];
        offersHeading.textContent = "Our Offers"
        offersHeading.style.left = "40%"

        for (let i = 0; i < mainHeadings.length; i++) {
            mainHeadings[i].textContent = mainHeadingEN[i]
            mainPrices[i].textContent = pricesEN[i]
        }

        let menuAnchors = document.querySelectorAll("a")
        if (menuAnchors) {
            for (let i = 0; i < menuAnchors.length; i++) {
                menuAnchors[i].textContent = textContents[i]
            }
        }

        langClick = 0;
    }
});
