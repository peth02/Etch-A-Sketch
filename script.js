const sketch = document.querySelector(".sketch-container");
while(sketch.children.length != 256){
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