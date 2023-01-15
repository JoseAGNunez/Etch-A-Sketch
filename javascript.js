// generate a random color
function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
};

// // grid
// let grid = document.createElement('div');
// grid.className = 'grid';
// grid.id = 'grid';
// let currentRow = 0;

// while (currentRow < 130) {
//     currentRow++;
//     let createRow = document.createElement('div');
//     createRow.className = `row-${currentRow}`;
//     createRow.style.display = 'flex';
//     grid.appendChild(createRow);

//     let iterator = 0;
//     while (iterator <250) {
//         iterator++;
//         let createGrid = document.createElement('div');
//         createGrid.className = `row-${currentRow}-grid`;
//         createGrid.id = `grid(${iterator})`;
//         createGrid.style.display = 'flex';
//         createGrid.style.flexGrow = '1';
//         createGrid.style.height = '5px';
//         createGrid.style.backgroundColor = 'black';
//         createGrid.addEventListener('mouseover', (e) => {
//             createGrid.style.backgroundColor = `${generateRandomColor()}`;
//         });
//         createRow.appendChild(createGrid);
//     };

// };

let grid = document.createElement('div');
grid.className = 'grid';
grid.id = 'grid';

grid.style.display = 'grid';
grid.style.gridTemplateColumns = 'repeat(100, minmax(1px, 1fr))';
grid.style.gridTemplateRows = 'repeat(77, minmax(9px, 1fr))';

for (let i = 0; i < 100*77; i++) {
  let createGrid = document.createElement('div');
  createGrid.className = `grid-item`;
  createGrid.id = `grid(${i})`;
  createGrid.style.backgroundColor = 'black';
  createGrid.addEventListener('mouseover', (e) => {
      createGrid.style.backgroundColor = `${generateRandomColor()}`;
  });
  grid.appendChild(createGrid);
};

// header 
let header = document.createElement('div');
header.className = 'header';
header.style.backgroundColor = '#e6380e';
header.style.margin = 'none';

// header logo
let headerLogo = document.createElement('h1');
headerLogo.id = 'headerLogo';
headerLogo.textContent = 'Etch-A-Sketch';
headerLogo.style.fontSize = '60px';
headerLogo.style.fontFamily = 'Rougant';
headerLogo.style.color = 'white';
headerLogo.style.marginLeft = '40px';
headerLogo.style.marginTop = '25px';
headerLogo.style.marginBottom = '15px';

// navigation
let navigationDiv = document.createElement('div');
navigationDiv.className = 'navigationDiv';
navigationDiv.style.display = 'flex';
navigationDiv.style.justifyContent = 'space-around';
let navigationElement1 = document.createElement('h2');
navigationElement1.textContent = 'Placeholder';
let navigationElement2 = document.createElement('h2');
navigationElement2.textContent = 'Placeholder';
let navigationElement3 = document.createElement('h2');
navigationElement3.textContent = 'Placeholder';
let navigationElement4 = document.createElement('h2');
navigationElement4.textContent = 'Placeholder';
let navigationElement5 = document.createElement('h2');
navigationElement5.textContent = 'Placeholder';

// bodyContainer
let bodyContainer = document.createElement('div');
bodyContainer.className = 'bodyContainer';
bodyContainer.style.display ='flex';
bodyContainer.style.minHeight = '100vh'
bodyContainer.style.marginLeft = '20px';
// bodyContainer.style.marginRight = '20px';


// optionsContainer
let optionsContainer = document.createElement('div');
optionsContainer.className = 'optionsContainer';
optionsContainer.style.display = 'flex';
optionsContainer.style.flexDirection = 'column';
optionsContainer.style.width = '500px';
optionsContainer.style.border = '4px solid #fd7e4e';
optionsContainer.style.borderTopLeftRadius = '20px';
optionsContainer.style.borderBottomLeftRadius = '20px';
optionsContainer.style.marginBottom = '70px';


// expand icon container
let expandContainer = document.createElement('div');
expandContainer.className = 'expandContainer';
expandContainer.style.display = 'flex';
expandContainer.style.justifyContent = 'center';


// expand icon
let expand = document.createElement('img');
expand.src = './images/sort.png';
expand.style.height = '20px';
expand.style.width = '20px';
expand.style.margin = '10px';
expandContainer.appendChild(expand);

// etchContainer
let etchContainer = document.createElement('div');
etchContainer.className = 'etchContainer';
etchContainer.style.backgroundColor = 'white';
etchContainer.style.width = '100%';
etchContainer.style.display = 'flex'
etchContainer.style.flexDirection = 'column';
etchContainer.style.borderTop = '4px solid #fd7e4e';
etchContainer.style.paddingLeft = '50px';
etchContainer.style.paddingTop = '50px';
// etchContainer.style.overflow = 'hidden';


// purple seperator
let purpleSeperator = document.createElement('div');
purpleSeperator.style.height = '15px';
purpleSeperator.style.backgroundColor = '#964dfe';

// container div
//contains all content
let container = document.getElementById('container');
container.style.display = 'flex';
container.style.flexDirection = 'column';
// header
container.appendChild(header);
header.appendChild(headerLogo);
//navigation
container.appendChild(navigationDiv);
navigationDiv.appendChild(navigationElement1);
navigationDiv.appendChild(navigationElement2);
navigationDiv.appendChild(navigationElement3);
navigationDiv.appendChild(navigationElement4);
navigationDiv.appendChild(navigationElement5);
container.appendChild(bodyContainer);
bodyContainer.appendChild(optionsContainer);
bodyContainer.appendChild(etchContainer);
etchContainer.appendChild(grid);
etchContainer.appendChild(expandContainer);
etchContainer.appendChild(purpleSeperator);