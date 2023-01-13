// generate a random color
function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

// 16x6 grid
let sixteenBySixteenGrid = document.createElement('div');
sixteenBySixteenGrid.className = 'sixteenBySixteenGrid';
sixteenBySixteenGrid.id = 'sixteenBySixteenGrid';
let currentRow = 0;

while (currentRow < 16) {
    currentRow++;
    let createRow = document.createElement('div');
    createRow.className = `row-${currentRow}`;
    createRow.style.display = 'flex';
    sixteenBySixteenGrid.appendChild(createRow);

    let iterator = 0;
    while (iterator < 16) {
        iterator++;
        let createGrid = document.createElement('div');
        createGrid.className = `row-${currentRow}-grid`;
        createGrid.id = `grid(${iterator})`;
        createGrid.textContent = 'div';
        createGrid.style.backgroundColor = `${generateRandomColor()}`;
        createRow.appendChild(createGrid);
    };

};

// container div
let container = document.getElementById('container');
container.appendChild(sixteenBySixteenGrid);