const containerSize = 500;
let maxCell = 16;
const container = document.querySelector(".container");

for(let i = 0; i < maxCell * maxCell; i++){
    const div = document.createElement("div");
    div.classList.add("grid-cell");
    div.style.width = (containerSize/maxCell) + "px";
    div.style.height = (containerSize/maxCell) + "px";
    container.appendChild(div);
}

container.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target.getAttribute("class") == "grid-cell"){
        target.style.backgroundColor = "lightblue"
    }
});
