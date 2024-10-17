let textContents = ["Travel", "Contact", "Quiz"];

italianBtn.addEventListener("click", () => {
    langClick += 1;

    if (langClick === 1) {
        // changes to Italian
        italianBtnImg.src = "IMG/english.png";
        langText.textContent = "Switch language";
        textContents = ["Viaggi", "Contatto", "Quiz"];
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
        
        let menuAnchors = document.querySelectorAll("a")
        if (menuAnchors) {
            for (let i = 0; i < menuAnchors.length; i++) {
                menuAnchors[i].textContent = textContents[i]
            }
        }

        langClick = 0;
    }
});