const sketch = document.querySelector(".sketch-container");
while(sketch.children.length != 16*16){
    let div = document.createElement("div");
    // div.innerText = "hi";
    div.classList.add("grid-item");
    sketch.appendChild(div);
}
console.log(sketch.children.length);

const gridItem = [...document.querySelectorAll(".grid-item")];
// console.log(gridItem);

gridItem.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.classList.add("color");
    });
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    gridItem.forEach(item => {
        item.classList.remove("color");
    });
});