// generate a random color
function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
};

//documentBody
let DocumentBody = document.body;

//header
let header = document.createElement('div');
header.className = 'header';
DocumentBody.appendChild(header);
header.style.display = 'flex'
header.style.justifyContent = 'center';

//body container
let bodyContainer = document.createElement('div');
bodyContainer.className = 'bodyContainer';
DocumentBody.appendChild(bodyContainer);
bodyContainer.style.display = 'flex';
bodyContainer.style.justifyContent = 'center';

let headerText = document.createElement('h1');
headerText.textContent = 'ETCH-A-SKETCH';
headerText.style.fontFamily = 'Press Start 2P';
headerText.style.color = '#FF00FF';
header.appendChild(headerText);

//options container
let optionsContainer = document.createElement('div');
optionsContainer.className = 'optionsContainer';
bodyContainer.appendChild(optionsContainer);
optionsContainer.style.height = '690px';
optionsContainer.style.width = '345px';
optionsContainer.style.backgroundColor = '#0d1d26';
optionsContainer.style.marginRight = '80px';
optionsContainer.style.filter = 'drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2))';

//grid container
let gridContainer = document.createElement('div');
gridContainer.className = 'gridContainer';
bodyContainer.appendChild(gridContainer);
gridContainer.style.display = 'flex';
gridContainer.style.justifyContent = 'center';

//grid
let grid = document.createElement('div');
grid.className = 'grid';
grid.style.display = 'grid';
grid.style.height = '640px';
grid.style.width = '640px';
grid.style.gridTemplateColumns = 'repeat(16, 40px)';
grid.style.filter = 'drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2))';
grid.style.border = '25px solid #0d1d26';
let gridCount = 0;
let gridIterator = 0;

while (gridIterator < 16) {
    gridIterator++;

    while (gridCount < 16) {
        gridCount++
        let gridSquares = document.createElement('div');
        gridSquares.className = 'gridSquares'
        gridSquares.id = `gridSqaure #${gridCount} row #${gridIterator}`;
        gridSquares.style.width = '40px';
        gridSquares.style.height = '40px';
        gridSquares.style.backgroundColor  = `white`;
        gridSquares.style.boxSizing = 'border-box';

        if (gridCount === 16) {
            gridSquares.style.borderRight = '1px solid rgb(156, 156, 156)';
        };

        if (gridIterator === 16) {
            gridSquares.style.borderBottom = '1px solid rgb(156, 156, 156)';
        };

        gridSquares.style.borderTop = '1px solid rgb(156, 156, 156)';
        gridSquares.style.borderLeft = '1px solid rgb(156, 156, 156)';
        gridSquares.addEventListener('mouseover', (e) => {
            gridSquares.style.backgroundColor = `${generateRandomColor()}`;
        });

        grid.appendChild(gridSquares);
    };
    
    gridCount = 0;
};

gridContainer.appendChild(grid);