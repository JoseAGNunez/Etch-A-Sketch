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
header.style.marginTop = '40px';
header.style.marginBottom = '40px';

//body container
let bodyContainer = document.createElement('div');
bodyContainer.className = 'bodyContainer';
DocumentBody.appendChild(bodyContainer);
bodyContainer.style.display = 'flex';
bodyContainer.style.justifyContent = 'center';

let headerText = document.createElement('p');
headerText.textContent = 'ETCH-A-SKETCH';
headerText.style.fontFamily = 'Press Start 2P';
headerText.style.color = '#FF00FF';
headerText.style.fontSize = '30px';
header.appendChild(headerText);

//options container
let optionsContainer = document.createElement('div');
optionsContainer.className = 'optionsContainer';
bodyContainer.appendChild(optionsContainer);
optionsContainer.style.height = '704px';
optionsContainer.style.width = '345px';
optionsContainer.style.backgroundColor = '#0d1d26';
optionsContainer.style.marginRight = '150px';
optionsContainer.style.boxSizing = 'border-box';
optionsContainer.style.padding = '32px';
optionsContainer.style.filter = 'drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2))';
optionsContainer.style.display = 'flex';
optionsContainer.style.flexDirection = 'column';

//gridSizeSlider
let gridSize = 16;
let gridSizeSliderContainer = document.createElement('div');
gridSizeSliderContainer.className = 'gridSizeSliderContainer';
gridSizeSliderContainer.style.marginBottom = '30px';
let gridSizeSlider = document.createElement('input');
gridSizeSlider.type = 'range';
gridSizeSlider.min = '1';
gridSizeSlider.max = '100';
gridSizeSlider.value = '16';
gridSizeSlider.id = 'gridSizeSlider';
gridSizeSlider.addEventListener('change', function (e){
    gridSize = document.getElementById('gridSizeSlider').value;
    px = 640 / gridSize;
    gridContainer.innerHTML = '';
    ETCH();
});
gridSizeSliderContainer.appendChild(gridSizeSlider);
optionsContainer.appendChild(gridSizeSliderContainer);


//clearButton
let clearButton = document.createElement('button');
clearButton.id = 'clearButton';
optionsContainer.appendChild(clearButton);
clearButton.textContent = 'Clear';
clearButton.style.border = '1px solid #FF00FF';
clearButton.style.borderRadius = '3.5px';
clearButton.style.backgroundColor = '#0d1d26';
clearButton.style.color = '#FF00FF';
clearButton.style.padding = '8px';
clearButton.style.fontSize = '15px';
clearButton.style.fontFamily = 'Roboto';
let clearButtonHover = document.getElementById('clearButton');
clearButton.addEventListener ('mouseover', function(e){
    clearButton.style.backgroundColor = '#FF00FF';
    clearButton.style.color = '#0d1d26'
});
clearButton.addEventListener ('mouseout', function(e){
    clearButton.style.backgroundColor = '#0d1d26';
    clearButton.style.color = '#FF00FF'
});
clearButton.addEventListener('click', function(e){
    let clear = document.querySelectorAll('.gridSquares');
    console.log(clear);
    clear.forEach(element => {
        element.style.transition = "all 1.3s ease-in-out";
        element.style.backgroundColor = 'white';
        function delay(){
            element.style.transition = "all .2s ease-in-out";
        }
        setTimeout(delay, 1300);
    });
});

//grid container
let gridContainer = document.createElement('div');
gridContainer.className = 'gridContainer';
bodyContainer.appendChild(gridContainer);
gridContainer.style.display = 'flex';
gridContainer.style.justifyContent = 'center';

//grid
let px = 640 / gridSize;
let grid = document.createElement('div');
grid.className = 'grid';
grid.style.display = 'grid';
grid.style.height = '640px';
grid.style.width = '640px';
grid.style.gridTemplateColumns = `repeat(${gridSize}, ${px}px)`;
grid.style.gridTemplateRows = `repeat(${gridSize}, ${px}px)`;
grid.style.filter = 'drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2))';
grid.style.border = '32px solid #0d1d26';
let gridCount = 0;
let gridIterator = 0;

while (gridIterator < gridSize) {
    gridIterator++;

    while (gridCount < gridSize) {
        gridCount++
        let gridSquares = document.createElement('div');
        gridSquares.className = 'gridSquares'
        gridSquares.id = `gridSqaure #${gridCount} row #${gridIterator}`;
        gridSquares.style.width = `${px}px`;
        gridSquares.style.height = `${px}px`;
        gridSquares.style.backgroundColor  = `white`;
        gridSquares.style.boxSizing = 'border-box';

        if (gridCount == gridSize) {
            gridSquares.style.borderRight = '1px solid rgb(156, 156, 156)';
        };

        if (gridIterator == gridSize) {
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

function ETCH() {
    //grid
let px = 640 / gridSize;
let grid = document.createElement('div');
grid.className = 'grid';
grid.style.display = 'grid';
grid.style.height = '640px';
grid.style.width = '640px';
grid.style.gridTemplateColumns = `repeat(${gridSize}, ${px}px)`;
grid.style.gridTemplateRows = `repeat(${gridSize}, ${px}px)`;
grid.style.filter = 'drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2))';
grid.style.border = '32px solid #0d1d26';
let gridCount = 0;
let gridIterator = 0;

while (gridIterator < gridSize) {
    gridIterator++;

    while (gridCount < gridSize) {
        gridCount++
        let gridSquares = document.createElement('div');
        gridSquares.className = 'gridSquares'
        gridSquares.id = `gridSqaure #${gridCount} row #${gridIterator}`;
        gridSquares.style.width = `${px}px`;
        gridSquares.style.height = `${px}px`;
        gridSquares.style.backgroundColor  = `white`;
        gridSquares.style.boxSizing = 'border-box';
        

        if (gridCount == gridSize) {
            gridSquares.style.borderRight = '1px solid rgb(156, 156, 156)';
        };

        if (gridIterator == gridSize) {
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
};