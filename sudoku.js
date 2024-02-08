document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
  
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Create Sudoku grid
    function geneateSudokuGrid(){
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          const cell = document.createElement('div');
          cell.classList.add('cell');
          const input = document.createElement('input');
          input.setAttribute('type', 'text');
          input.setAttribute('maxlength', '1');
  
          if (getRandomNumber(1, 10) <=4){
            const randomNumber = getRandomNumber(1, 9);
            input.value = randomNumber;
            input.setAttribute('readonly', 'true');
            input.classList.add('pre-filled');
          }
          cell.appendChild(input);
          container.appendChild(cell);
        }
      }
    }

    geneateSudokuGrid();
  });
  