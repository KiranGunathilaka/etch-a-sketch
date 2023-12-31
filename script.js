const gridContainer = document.querySelector(".grid-container");
const monoColorButton = document.querySelector(".mono-color-button");
const randomColorButton = document.querySelector(".random-color-button");
const colorPicker = document.querySelector(".color-picker");
const toggleButton = document.querySelector("#toggleButton");
const gridSizeSpan = document.querySelector("#grid-size-span");
const sizeSelector = document.querySelector("#pixel-selector");

let isMouseDown = false;
let gridSize = 40;
let currentPixel;
let color = colorPicker.value;
let isRandom = false;
let isProDarkSelected = false;
let currentPixelStyle;
let currentOpacity;
let tempTarget;

function colorChanger(e) {
    currentPixel = e.target;
    if (isRandom) {
        currentPixel.style.backgroundColor = randomColorGenerator();
    } else {
        currentPixel.style.backgroundColor = color;
        if (isProDarkSelected){
            currentOpacity = currentPixel.style.opacity;
            if (currentOpacity == 1){
                currentPixel.style.opacity = 0.1;
            } else{
                currentPixel.style.opacity = 0.1 + +currentOpacity;
            }
            
        }
    }
}

function gridSizer(gridSize) {
    let pixelWidth = 400 / gridSize;
    gridChildRemover();

    for (let i = 0; i < gridSize * gridSize; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.width = `${pixelWidth}px`;
        pixel.style.height = `${pixelWidth}px`;
        gridContainer.appendChild(pixel);
    }
}

function gridChildRemover() {
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstElementChild)
    }
}

function randomColorGenerator() {
    let r = Math.ceil(Math.random() * 255);
    let g = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);

    return `rgb(${r} , ${g} , ${b} )`;
}


//setting initial grid when the DOM got loaded
document.addEventListener("DOMContentLoaded", () => {
    gridSizer(gridSize);
    monoColorButton.classList.toggle("clicked");
});


//getting the grid size set by the user in the range input
sizeSelector.addEventListener("input", () => {
    gridSize = sizeSelector.value;
    gridSizeSpan.textContent = `${gridSize} x ${gridSize}`;
})

sizeSelector.addEventListener("mouseup", (e) => {
    gridSizer(gridSize)
})


//changing the color value when the color picker value gets changed
colorPicker.addEventListener("input", () => {
    color = colorPicker.value;
})


//making the mouse events trigger the coloring of the grid pixels
gridContainer.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    tempTarget = e.target;
    colorChanger(e);
})

gridContainer.addEventListener("mousemove", (e) => {
    if (isMouseDown && tempTarget != e.target) {
        colorChanger(e);
        tempTarget = e.target;
    }
})

gridContainer.addEventListener("mouseup", (e) => {
    isMouseDown = false;
})


//changing the button states
monoColorButton.addEventListener("click", () => {
    if (randomColorButton.classList.contains("clicked")) {
        randomColorButton.classList.toggle("clicked");
    }

    if (!monoColorButton.classList.contains("clicked")){
        monoColorButton.classList.toggle("clicked");
        isRandom = false;
        colorPicker.disabled = false;
        colorPicker.style.cursor = "pointer";
    }

})

randomColorButton.addEventListener("click", () => {
    if (monoColorButton.classList.contains("clicked")) {
        monoColorButton.classList.toggle("clicked");
    }

    if(!randomColorButton.classList.contains("clicked")){
        randomColorButton.classList.toggle("clicked");
        isRandom = true;
        colorPicker.disabled = true;
        colorPicker.style.cursor = "not-allowed";
    }
})

toggleButton.addEventListener("change", () =>{
    isProDarkSelected = isProDarkSelected? false: true;
    console.log(isProDarkSelected)
})