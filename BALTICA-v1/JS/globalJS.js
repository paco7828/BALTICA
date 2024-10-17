let menu = document.getElementById("menu");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let clickCount = 0;
let header = document.querySelector("header");
let menuDiv = document.createElement("div");
menuDiv.setAttribute("id", "menuDiv");
let hrefs = ["travel.html", "contact.html", "quiz.html"];
let logoImg = document.getElementById("logo");

logoImg.addEventListener("click", () => {
    window.location.href = "index.html";
});

let italianBtn = document.getElementById("italian");
let italianBtnImg = document.querySelector("#italian img");
let langText = document.querySelector("#italian h3");
let langClick = 0;
