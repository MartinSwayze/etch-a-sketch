const container = document.querySelector("#container");
const divs = container.querySelectorAll("div");


for(let i = 1; i <= 256; i++){
    const block = document.createElement("div");
    block.setAttribute("id", "square" + i);
    block.style.border = "2px solid black"
    block.style.padding = "2.8%";
    block.addEventListener("mouseover", function(e) {
        block.style.backgroundColor = "red";
    });
    
    container.appendChild(block);
}


divs.forEach((div) => {
    div.addEventListener("mouseover", function(e) {
        div.style.backgroundColor = "red";
    });
});





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