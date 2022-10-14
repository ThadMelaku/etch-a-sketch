const gridArea = document.getElementById("gridArea");
const sizeButton = document.getElementById("size");
const resetButton = document.getElementById("reset");
const rainbowButton = document.getElementById("rainbow");

sizeButton.onclick = newGridSize;
resetButton.onclick = resetGrid;
rainbowButton.onclick = rainbowGrid;

let row = 16;
let gridSize = row*row;
let reset = false;
let rainbow = false;

makeGrid();

function makeGrid(){
    removeCurrentGrid();
    //In the css file, the variable '--grid-size' is used to make the correct number of rows/columns
    gridArea.style.setProperty('--grid-size',row);

    for (i = 0; i<gridSize; i++){
        let box = document.createElement("div");
        //The default box colour is light grey
        if(reset) box.style.backgroundColor = "lightgrey";

        //In rainbow mode, the boxes will change to a random colour 
        if(rainbow){
            box.addEventListener('mouseenter', () => box.style.backgroundColor = getRandomColour());
            gridArea.appendChild(box).className = "box";
        }
        //In normal mode, the boxes will change to dark grey
        else{
            box.addEventListener('mouseenter', () => box.style.backgroundColor = "#3f3e3e");
            gridArea.appendChild(box).className = "box";
        }
    }
}

//Input must be a number from 1 to 100
function getUserInput(){
    let row = prompt("Enter a number for the row/column size")
    if(isNaN(row)){
        alert("Please enter a valid number")
        row = getUserInput();
    }  
    if (!(Number(row)<=100) || !(Number(row)>0)){
        alert("Please enter a number from 1 to 100")
        row = getUserInput();
    }
    return (Number(row));
}

function getRandomColour(){
    let values = '0123456789ABCDEF';
    let colour = '#';

    for(let i=0; i<6; i++){
        colour += values[Math.floor(Math.random()*16)];
    }
    return colour;
}

function removeCurrentGrid(){
    while (gridArea.firstChild) {
        gridArea.removeChild(gridArea.lastChild);
    }
}

function newGridSize(){
    row = getUserInput();
    gridSize = row*row;
    makeGrid();
}

function resetGrid(){
    reset = true;
    removeCurrentGrid();
    makeGrid();
    reset = false;
}

function rainbowGrid(){
    rainbow = true;
    resetGrid();
    rainbow = false;
}


