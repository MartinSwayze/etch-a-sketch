const container = document.querySelector("#container");
const divs = container.querySelectorAll("div");
const colors = ["red", "green", "blue"];
let randomColor = colors[Math.floor(Math.random() * 3)];

function createGrid(gridRow){
let gridSpace = gridRow * gridRow;
for(let i = 1; i <= gridSpace; i++){

    const block = document.createElement("div");
    let randomColor = colors[Math.floor(Math.random() * 3)];
    block.style.width = `calc(100%/${gridRow})`;
    block.style.height = `calc(100%/${gridRow})`;
    block.setAttribute("id", "square" + i);

    block.style.boxSizing = "border-box";
    block.addEventListener("mouseover", () => {
        block.style.backgroundColor = randomColor;
    });

    container.appendChild(block);
}
}
createGrid(26);

function changeCanvas(){

    gridRow = Number(prompt ("Please enter canvas width (max 100)"));

    if (gridRow > 100){
        alert("Please choose width lower than 100! Try Again");
        changeCanvas();
    }
    else if (!Number.isInteger(gridRow)){
        alert("Please enter number! Try Again");
        changeCanvas();
    }  


    const divs = container.querySelectorAll("div");

    divs.forEach((div) =>{
        container.removeChild(div);
    });

    createGrid(gridRow);
}
