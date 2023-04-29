const sketch = document.querySelector(".sketch-container");
// add grid
while(sketch.children.length != 16*16){
    let div = document.createElement("div");
    // div.innerText = "hi";
    div.classList.add("grid-item");
    sketch.appendChild(div);
}
function colorDiv(){
    gridItem.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = "rgb(255, 0, 0)";
            // console.log("1");
        });
    });
}
function rainbowDiv(){

    // let r = Math.floor(Math.random() * 256);
    // let g = Math.floor(Math.random() * 256);
    // let b = Math.floor(Math.random() * 256);
    // console.log(randomColor)
    gridItem.forEach(item => {
        item.addEventListener("mouseover", () => {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let randomColor = `rgb(${r}, ${g}, ${b})`;
            item.style.backgroundColor = randomColor;
            console.log(randomColor)
            
        });
    });
}
function clearDiv(){
    gridItem.forEach(item => {
        item.style.backgroundColor = null;
    });
}
function eraseDiv(){
    gridItem.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = null;
        });
    });
}
// color
const gridItem = [...document.querySelectorAll(".grid-item")];

// brush
const brush = document.querySelector("#brush");
brush.addEventListener("click", () => {
    colorDiv();
});
// eraser
const eraser = document.querySelector("#eraser");
eraser.addEventListener("click", () => {
    eraseDiv();
});
// rainbow
const rainbow = document.querySelector("#rainbow");
rainbow.addEventListener("click", () => {
    rainbowDiv();
});
// clear
const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    clearDiv();
});