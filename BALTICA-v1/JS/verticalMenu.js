menu.addEventListener("click", () => {
    clickCount += 1;
    setTimeout(() => {
        menuDiv.style.height = "150px";
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