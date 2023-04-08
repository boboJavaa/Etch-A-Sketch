const container = document.querySelector('#container');

document.querySelector('#btn').addEventListener('click', function() {
    let userInput = prompt("Enter size of grid , e.g: 64 = 64x64");
    if(userInput <= 100){
    removeGrid();   
    createGrid(userInput);
    isSelected(); 
    }
})

function createGrid(x) {
    for (let rows = 0; rows < x; rows++) {
        for (let columns = 0; columns < x; columns++) {
            const grid = document.createElement('div');
            grid.className = 'grid';
            container.appendChild(grid);
        }
    }
    const gridElements = document.querySelectorAll('.grid');
    const gridSize = 640 / x;
    gridElements.forEach(function (gridElement) {
        gridElement.style.width = gridSize + 'px';
        gridElement.style.height = gridSize + 'px';
    });
}
function removeGrid() {
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function isSelected() {  
    let isMouseDown = false; // initialize flag to false
    const gridElements = document.querySelectorAll('.grid');
    gridElements.forEach(function (gridElement) {
        gridElement.addEventListener('mousedown', () => {
            isMouseDown = true; // set flag to true when mouse is down
        });
        gridElement.addEventListener('mouseup', () => {
            isMouseDown = false; // set flag to false when mouse is up
        });
        gridElement.addEventListener('mouseover', () => {
            if (isMouseDown) { // only change color if mouse is down
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                gridElement.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
            }
        });
    });
}

