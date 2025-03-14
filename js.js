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
            target.style.backgroundColor = "lightblue";
        }
    });
}

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

