const sketch = document.querySelector(".sketch");
while(sketch.children.length != 50){
    let div = document.createElement("div");
    // div.innerText = "hi";
    div.classList.add("grid");
    sketch.appendChild(div);
}
console.log(sketch.children.length);