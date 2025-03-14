const containerSize = 500;
const container = document.querySelector(".container");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function createGrid(cell = 16){
    maxCell = cell;
    for(let i = 0; i < maxCell * maxCell; i++){
        const div = document.createElement("div");
        div.classList.add("grid-cell");
        div.style.width = (containerSize/maxCell) + "px";
        div.style.height = (containerSize/maxCell) + "px";
        container.appendChild(div);
    }
}

container.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target.getAttribute("class") == "grid-cell"){
        if(!target.style.backgroundColor)
            target.style.backgroundColor = `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`;
    }
});

function deleteGrid(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

btn = document.querySelector("button");

btn.addEventListener("click", () =>{
    const userInfo = prompt("Give me a number: 1-100");
    const numero = Number(userInfo);

    if (isNaN(numero)) { 
        alert("No ingresaste un numero valido");
    }
    else if (numero > 100){
        alert("Numero demasiado alto");
    }
    else{
        deleteGrid();
        createGrid(numero);
    }

})

createGrid();

