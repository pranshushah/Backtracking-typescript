function wordChecker(
  board: string[][],
  rows: number,
  columns: number,
  currentRow: number,
  currentColumn: number,
  availableString: string,
) {
  if (availableString === '') {
    return true;
  } else {
    if (
      currentColumn <= columns &&
      currentColumn >= 0 &&
      currentRow >= 0 &&
      currentRow <= rows &&
      board[currentRow][currentColumn] === availableString[0]
    ) {
      // we changing these because we don't to go the path we are coming from.
      const temp = board[currentRow][currentColumn];
      board[currentRow][currentColumn] = '&&';
      {
        const res = wordChecker(
          board,
          rows,
          columns,
          currentRow - 1,
          currentColumn,
          availableString.slice(1),
        );
        if (res) {
          return true;
        }
      }
      {
        const res = wordChecker(
          board,
          rows,
          columns,
          currentRow + 1,
          currentColumn,
          availableString.slice(1),
        );
        if (res) {
          return true;
        }
      }
      {
        const res = wordChecker(
          board,
          rows,
          columns,
          currentRow,
          currentColumn + 1,
          availableString.slice(1),
        );
        if (res) {
          return true;
        }
      }
      {
        const res = wordChecker(
          board,
          rows,
          columns,
          currentRow,
          currentColumn - 1,
          availableString.slice(1),
        );
        if (res) {
          return true;
        }
      }
      board[currentRow][currentColumn] = temp;
      return false;
    } else {
      return false;
    }
  }
}

function exist(board: string[][], word: string) {
  if (board.length === 0) {
    return false;
  } else {
    const rows = board.length - 1;
    const columns = board[0].length - 1;
    for (let i = 0; i <= rows; i++) {
      for (let j = 0; j <= columns; j++) {
        if (wordChecker(board, rows, columns, i, j, word)) {
          return true;
        }
      }
    }
    return false;
  }
}

let board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];

console.log(exist(board, 'SEE'));
