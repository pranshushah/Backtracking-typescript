function findAllUniquePaths(
  grid: number[][],
  rows: number,
  columns: number,
  currentRow: number,
  currentColumn: number,
  remainingZeros: number,
): number {
  if (
    currentColumn <= columns &&
    currentColumn >= 0 &&
    currentRow >= 0 &&
    currentRow <= rows
  ) {
    if (grid[currentRow][currentColumn] === 2) {
      if (remainingZeros === 0) {
        return 1;
      } else {
        return 0;
      }
    } else if (grid[currentRow][currentColumn] === -1) {
      return 0;
    } else {
      let resultFromLeft = 0;
      let resultFromRight = 0;
      let resultFromTop = 0;
      let resultFromDown = 0;
      const temp = grid[currentRow][currentColumn];
      grid[currentRow][currentColumn] = -1;
      resultFromLeft = findAllUniquePaths(
        grid,
        rows,
        columns,
        currentRow,
        currentColumn - 1,
        temp === 1 ? remainingZeros : remainingZeros - 1,
      );
      resultFromRight = findAllUniquePaths(
        grid,
        rows,
        columns,
        currentRow,
        currentColumn + 1,
        temp === 1 ? remainingZeros : remainingZeros - 1,
      );
      resultFromTop = findAllUniquePaths(
        grid,
        rows,
        columns,
        currentRow - 1,
        currentColumn,
        temp === 1 ? remainingZeros : remainingZeros - 1,
      );
      resultFromDown = findAllUniquePaths(
        grid,
        rows,
        columns,
        currentRow + 1,
        currentColumn,
        temp === 1 ? remainingZeros : remainingZeros - 1,
      );
      grid[currentRow][currentColumn] = temp;
      return resultFromLeft + resultFromRight + resultFromTop + resultFromDown;
    }
  } else {
    return 0;
  }
}
function uniquePathsIII(grid: number[][]) {
  const rows = grid.length - 1;
  const colums = grid[0].length - 1;
  let totalZeros = 0;
  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j <= colums; j++) {
      if (grid[i][j] === 0) {
        totalZeros++;
      }
    }
  }

  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j <= colums; j++) {
      if (grid[i][j] === 1) {
        return findAllUniquePaths(grid, rows, colums, i, j, totalZeros);
      }
    }
  }
  return 0;
}
console.log(
  uniquePathsIII([
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 2],
  ]),
);
