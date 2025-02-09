let angle = 0;
let lastScrollTop = 0;

window.addEventListener("wheel", (event) => {

    if (event.deltaY > 0) {
        angle += 10;
    }
    else {
        angle -= 15;
    }
    document.querySelector(".carousel").style.transform = `rotateY(${angle}deg)`;
});
