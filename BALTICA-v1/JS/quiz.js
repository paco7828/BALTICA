let mainHeading = document.querySelector("main h1");
let mainBtn = document.querySelector("main button")
let textContents = ["Travel", "Contact", "Quiz"];
let translated;

italianBtn.addEventListener("click", () => {
    langClick += 1;

    if (langClick === 1) {
        // changes to Italian
        italianBtnImg.src = "IMG/english.png";
        langText.textContent = "Switch language";
        textContents = ["Viaggi", "Contatto", "Quiz"];

        mainHeading.textContent = "Provate il nostro quiz per testare le vostre conoscenze!"
        mainBtn.textContent = "inizia il quiz"

        let menuAnchors = document.querySelectorAll("a")
        if (menuAnchors) {
            for (let i = 0; i < menuAnchors.length; i++) {
                menuAnchors[i].textContent = textContents[i]
            }
        }

        translated = true

    } else if (langClick === 2) {
        // changes to English
        italianBtnImg.src = "IMG/italian.png";
        langText.textContent = "Cambia lingua";
        textContents = ["Travel", "Contact", "Quiz"];

        mainHeading.textContent = "Take our quiz to test your knowledge!"
        mainBtn.textContent = "Start quiz"

        let menuAnchors = document.querySelectorAll("a")
        if (menuAnchors) {
            for (let i = 0; i < menuAnchors.length; i++) {
                menuAnchors[i].textContent = textContents[i]
            }
        }

        translated = false

        langClick = 0;
    }
});

let quizBtn = document.getElementById("quizBtn")

quizBtn.addEventListener("click", () => {
    if (translated) {
        //open the italian google forms
        window.location = "https://forms.gle/zQFFdiWWKBpHB4qZ9"
    }
    else if (!translated) {
        //open the english google forms
        window.location = "https://forms.gle/zQFFdiWWKBpHB4qZ9"
    }
})