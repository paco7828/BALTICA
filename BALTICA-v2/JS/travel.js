const cards = document.querySelectorAll(".card")
let cardClick = 0

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
        cards[i].scrollIntoView({ behavior: 'smooth' })
        cardClick++
        if (cardClick === 1) {
            cards[i].style.height = "120px"
            setTimeout(() => {
                cards[i].innerHTML = extendedHtmls[i]
                let heading = cards[i].querySelector("h3")
                heading.style.opacity = "0"
            }, 100);
            setTimeout(() => {
                cards[i].style.height = heights[i]
                let heading = cards[i].querySelector("h3")
                heading.style.opacity = "1"
            }, 500);
        }
        else if (cardClick === 2) {
            setTimeout(() => {
                cards[0].scrollIntoView({ behavior: 'smooth' })
            }, 650);
            cards[i].innerHTML = baseInnerHTMLS[i]
            cards[i].style.height = "120px"
            cardClick = 0
        }
    })
}