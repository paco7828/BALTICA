let clickCount = 0;
let header = document.querySelector("header");
let forms = ""
let logoImg = document.getElementById("logo");

if (logoImg) {
    logoImg.addEventListener("click", () => {
        window.location = "../index.html";
    });
}

let baseInnerHTMLS = []
let extendedHtmls = []
let heights = []

let italianBtn = document.getElementById("italianBtn");

if (italianBtn) {
    italianBtn.addEventListener("click", () => {
        window.location = "EN/indexEN.html"
    });
}

let englishBtn = document.getElementById("englishBtn")

if (englishBtn) {
    englishBtn.addEventListener("click", () => {
        window.location = "IT/indexIT.html"
    })
}