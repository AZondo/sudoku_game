document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
  
    // Create Sudoku grid
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('maxlength', '1');
        cell.appendChild(input);
        container.appendChild(cell);
      }
    }
  });
  