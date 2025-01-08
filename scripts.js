const container = document.querySelector("#container");
const divs = container.querySelectorAll("div");

function createGrid(gridRow){
let gridSpace = gridRow * gridRow;
for(let i = 1; i <= gridSpace; i++){
    const block = document.createElement("div");
    block.style.width = `calc(100%/${gridRow})`;
    block.style.height = `calc(100%/${gridRow})`;
    block.setAttribute("id", "square" + i);
    block.style.border = "2px solid black"
    block.addEventListener("mouseover", function(e) {
        block.style.backgroundColor = "red";
    });
    
    container.appendChild(block);
}
}

createGrid(16);
/*const container = document.querySelector("#container");
const divs = document.querySelectorAll("div");

function createGrid(){
for(let i = 1; i <= 256; i++){
    const block = document.createElement("div");
    block.setAttribute("id", "square" + i);
    block.style.border = "2px solid black"
    block.style.padding = "2.8%";
    
    container.appendChild(block);
}
}

createGrid();

divs.forEach((div) => {
    // and for each one we add a 'click' listener
    div.addEventListener("mouseover", () => {
        console.log("YAYA");
    });
});*/