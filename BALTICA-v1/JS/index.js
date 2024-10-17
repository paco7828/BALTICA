
let mainHeadings = document.querySelectorAll("main h1");
let mainHeadingEN = ["Welcome to Baltica's Official webpage!", "\"Let's explore the Baltics together!\"", "Feel free to ask anything at our stand!"];
let mainHeadingIT = ["Benvenuti sulla pagina ufficiale di Baltica!", "\"Esploriamo insieme i Paesi Baltici!\"", "Non esitate a chiedere qualsiasi cosa al nostro stand!"];
let textContents = ["Travel", "Contact", "Quiz"];

italianBtn.addEventListener("click", () => {
    langClick += 1;

    if (langClick === 1) {
        // changes to Italian
        italianBtnImg.src = "IMG/english.png";
        langText.textContent = "Switch language";
        textContents = ["Viaggi", "Contatto", "Quiz"];
        for (let i = 0; i < mainHeadings.length; i++) {
            mainHeadings[i].innerText = mainHeadingIT[i];
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

        for (let i = 0; i < mainHeadings.length; i++) {
            mainHeadings[i].innerText = mainHeadingEN[i];
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


//------------------------------HORIZONTAL MENU-------------------------------//

menu.addEventListener("click", () => {
    clickCount += 1;
    setTimeout(() => {
        menuDiv.style.height = "50px";
    }, 200);
    header.appendChild(menuDiv);

    if (clickCount === 1) {
        setTimeout(() => {
            for (let i = 0; i < textContents.length; i++) {
                let newA = document.createElement("a");
                newA.textContent = textContents[i];
                menuDiv.appendChild(newA);
                newA.addEventListener("click", () => {
                    window.location.href = hrefs[i];
                });
            }
        }, 500);
    }

    one.style.cssText = `
      transform: rotate(45deg);
      top: 30%;
  `;
    two.style.display = "none";
    three.style.cssText = `
      transform: rotate(-45deg);
      top: 15%;
  `;

    if (clickCount === 2) {
        setTimeout(() => {
            menuDiv.style.height = "0";
        }, 200);
        setTimeout(() => {
            menuDiv.innerHTML = ``;
        }, 300);
        setTimeout(() => {
            header.removeChild(menuDiv);
        }, 1000);
        one.style.top = "0%";
        one.style.transform = "none";
        two.style.display = "block";
        three.style.top = "20%";
        three.style.transform = "none";
        clickCount = 0;
    }
});