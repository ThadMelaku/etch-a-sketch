const gridArea = document.getElementById("gridArea");

numberOfBoxes = 16*16;
function makeGrid(){
    /*console.log("makeGrid");*/
    for (i = 0; i<numberOfBoxes; i++){
        let box = document.createElement("div");
        gridArea.appendChild(box).className = "box"
    }
}

makeGrid();