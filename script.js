const container = document.querySelector(".container");

let isMouseDown = false;
let currentPixel;

for (let i=0; i<1600 ; i++){
    const  pixel = document.createElement("div");
    pixel.classList.add("pixel")
    container.appendChild(pixel);
}

container.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    currentPixel = e.target;
    currentPixel.style.backgroundColor = "black";
})

container.addEventListener("mousemove", (e) => {
    if(isMouseDown){
        currentPixel = e.target;
        currentPixel.style.backgroundColor = "black";
    }
})

container.addEventListener("mouseup", (e) =>{
    isMouseDown = false;
    currentPixel = e.target;
    currentPixel.style.backgroundColor = "black";
})