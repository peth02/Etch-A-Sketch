const sketch = document.querySelector(".sketch-container");
// add grid
while(sketch.children.length != 16*16){
    let div = document.createElement("div");
    div.classList.add("grid-item");
    sketch.appendChild(div);
}
// function
function toStringRGB(color) {
    let r = parseInt(color.substr(1,2), 16)
    let g = parseInt(color.substr(3,2), 16)
    let b = parseInt(color.substr(5,2), 16)
    return `rgb(${r}, ${g}, ${b})`;
}
function toColor(color){
    rgbColor = toStringRGB(color);
}
function colorDiv(){
    gridItem.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = rgbColor;
        });
    });
}
function rainbowDiv(){
    gridItem.forEach(item => {
        item.addEventListener("mouseover", () => {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let randomColor = `rgb(${r}, ${g}, ${b})`;
            item.style.backgroundColor = randomColor;            
        });
    });
}
// function noirDiv(){
//     gridItem.forEach(item => {
//         item.addEventListener("mouseover", () => {
//             console.log(item.style.dataShade == undefined);
//             // if(item.style.backgroundColor != "rgb(255, 255, 255)"){
//             //     item.style.backgroundColor = "rgb(255, 255, 255)";            
//             // }
//             if(item.hasAttribute("data-shade")){
//                 let currentValue = item.getAttribute("data-shade");
//                 let newValue = parseInt(currentValue) + 1;
//                 console.log(newValue);
//                 item.setAttribute("data-shade", newValue.toString());
//             }else{
//                 item.setAttribute("data-shade", 1);
//             }
//         });
//     });
// }
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
// start
const gridItem = [...document.querySelectorAll(".grid-item")];
let rgbColor = toStringRGB(document.querySelector("#palette").value);
// palette
const palette = document.querySelector("#palette");
palette.addEventListener("input", (input) => {
    console.log(input.type);
    console.log(toStringRGB(input.target.value));
    console.log(input.target.value);
    toColor(input.target.value);
});
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
// noir
// const noir = document.querySelector("#noir");
// noir.addEventListener("click", () => {
//     noirDiv();
// });
// clear
const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    clearDiv();
});