const container = document.querySelector('#container');

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


createGrid(16);

function isSelected() {
    const gridElements = document.querySelectorAll('.grid');
    gridElements.forEach(function (gridElement) {
        gridElement.addEventListener('mouseover', () => {
            if (gridElement.matches(':hover')) {
                let r = Math.floor(Math.random() * 256) 
                let g = Math.floor(Math.random() * 256)
                let b = Math.floor(Math.random() * 256)
                gridElement.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"; 
            }
        });
    });
}

isSelected();