const gridContainer = document.querySelector(".grid-container");
const buttons = document.querySelectorAll(".button");

let isMouseDown = false;
let currentPixel;

function colorChanger(e) {
    currentPixel = e.target;
    currentPixel.style.backgroundColor = "black";
}

for (let i = 0; i < 1600; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel")
    gridContainer.appendChild(pixel);
}

gridContainer.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    colorChanger(e);
})

gridContainer.addEventListener("mousemove", (e) => {
    if (isMouseDown) {
        colorChanger(e);
    }
})

gridContainer.addEventListener("mouseup", (e) => {
    isMouseDown = false;
    colorChanger(e);
})


buttons.forEach((button) => {
    button.addEventListener('click', function () {
        this.classList.toggle('clicked');
    })
}
);