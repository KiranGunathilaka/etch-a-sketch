const gridContainer = document.querySelector(".grid-container");
const monoColorButton = document.querySelector(".mono-color-button");
const randomColorButton = document.querySelector(".random-color-button");
const colorPicker = document.querySelector(".color-picker");
const toggleButton = document.querySelector("#toggleButton");
const gridSizeSpan = document.querySelector("#grid-size-span");
const sizeSelector = document.querySelector("#pixel-selector");

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