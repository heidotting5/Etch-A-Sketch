
// Calling main function
createGrid();


// Creates an Etch-A-Sketch grid        
function createGrid () {
    var gridSize = getUserInput();

    for (x=1; x <= gridSize; x++) {
        for (y=1; y <= gridSize; y++) {
            const grid = document.querySelector('.main-container');
            
            const newSquare = document.createElement('div');
            newSquare.style.cssText = 'background-color: black; margin: 0.5px; opacity: 0.1;'
            newSquare.classList.add('block');

            grid.append(newSquare);

        }
    }

    document.querySelectorAll('.block').forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.opacity = parseFloat(item.style.opacity) + 0.2;
      })
    })

}


// Uses user input to set grid size and arrange elements on the screen
function getUserInput () {
    var input = prompt("Please enter a grid size");
    var container = document.querySelector('.main-container')
    var width;
    
    if(input > 0 && input <= 15) {
      container.style.gridTemplateColumns = 'repeat('+input+', 50px)'
      container.style.gridTemplateRows = 'repeat('+input+', 50px)'
      width = 50*input; 

    } else if (input > 15 && input <= 30) {
      container.style.gridTemplateColumns = 'repeat('+input+', 30px)'
      container.style.gridTemplateRows = 'repeat('+input+', 30px)'
      width = 30*input; 

    } else {
      container.style.gridTemplateColumns = 'repeat('+input+', 15px)'
      container.style.gridTemplateRows = 'repeat('+input+', 15px)'
      width = 15*input; 
    }

    container.style.width = width+'px'
    document.querySelector('.main-header').style.width = width+'px';

    return input;
}

