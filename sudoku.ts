function isValidSudoku(
  selectedNumber: number,
  board: string[][],
  row: number,
  column: number,
) {
  //checking in row
  for (let i = 0; i < 9; i++) {
    const currentNumber = parseInt(board[row][i]);
    if (!isNaN(currentNumber)) {
      if (currentNumber === selectedNumber) {
        return false;
      }
    }
  }
  //checking in column
  for (let i = 0; i < 9; i++) {
    const currentNumber = parseInt(board[i][column]);
    if (!isNaN(currentNumber)) {
      if (currentNumber === selectedNumber) {
        return false;
      }
    }
  }
  const startRow = row - (row % 3);
  const startcolumn = column - (column % 3);
  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startcolumn; j < startcolumn + 3; j++) {
      const currentNumber = parseInt(board[i][j]);
      if (!isNaN(currentNumber)) {
        if (currentNumber === selectedNumber) {
          return false;
        }
      }
    }
  }
  return true;
}

function sudokuSolver(board: string[][], row: number, column: number): boolean {
  if (row > 8) {
    return true;
  } else {
    if (board[row][column] === '.') {
      for (let i = 1; i <= 9; i++) {
        if (isValidSudoku(i, board, row, column)) {
          board[row][column] = i.toString();
          let result: boolean;

          if (column < 9) {
            result = sudokuSolver(board, row, column + 1);
          } else {
            result = sudokuSolver(board, row + 1, 0);
          }
          if (result) {
            return true;
          }
          board[row][column] = '.';
        }
      }
    } else {
      if (column < 9) {
        return sudokuSolver(board, row, column + 1);
      } else {
        return sudokuSolver(board, row + 1, 0);
      }
    }
    return false;
  }
}

function solveSudoku(board: string[][]): void {
  sudokuSolver(board, 0, 0);
}
