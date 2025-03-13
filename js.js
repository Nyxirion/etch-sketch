const containerSize = 500;
let maxCell = 9;
const container = document.querySelector(".container");

for(let i = 0; i < maxCell * maxCell; i++){
    const div = document.createElement("div");
    div.classList.add("grid-cell");
    div.style.width = (containerSize/maxCell) + "px";
    div.style.height = (containerSize/maxCell) + "px";
    container.appendChild(div);
}