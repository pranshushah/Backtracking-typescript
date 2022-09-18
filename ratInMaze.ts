type Binary = 0 | 1;

function isReachable(
  newColumn: number,
  newRow: number,
  maxRowOrColumn: number,
  visitedMatrix: Binary[][],
  maze: Binary[][],
) {
  if (
    newColumn >= 0 &&
    newColumn < maxRowOrColumn &&
    newRow >= 0 &&
    newRow < maxRowOrColumn &&
    visitedMatrix[newRow][newColumn] === 0 &&
    maze[newRow][newColumn] === 1
  ) {
    return true;
  } else {
    return false;
  }
}

function runner(
  maze: Binary[][],
  currentColumn: number,
  currentRow: number,
  maxRowOrColumn: number,
  visitedMatrix: Binary[][],
  currentPath: string,
  paths: string[],
) {
  if (currentColumn === maxRowOrColumn - 1 && currentRow === maxRowOrColumn - 1) {
    paths.push(currentPath);
  } else {
    visitedMatrix[currentRow][currentColumn] = 1;
    if (isReachable(currentColumn + 1, currentRow, maxRowOrColumn, visitedMatrix, maze)) {
      runner(
        maze,
        currentColumn + 1,
        currentRow,
        maxRowOrColumn,
        visitedMatrix,
        currentPath.concat("R"),
        paths,
      );
    }
    if (isReachable(currentColumn, currentRow + 1, maxRowOrColumn, visitedMatrix, maze)) {
      runner(
        maze,
        currentColumn,
        currentRow + 1,
        maxRowOrColumn,
        visitedMatrix,
        currentPath.concat("D"),
        paths,
      );
    }
    if (isReachable(currentColumn - 1, currentRow, maxRowOrColumn, visitedMatrix, maze)) {
      runner(
        maze,
        currentColumn - 1,
        currentRow,
        maxRowOrColumn,
        visitedMatrix,
        currentPath.concat("L"),
        paths,
      );
    }
    if (isReachable(currentColumn, currentRow - 1, maxRowOrColumn, visitedMatrix, maze)) {
      runner(
        maze,
        currentColumn,
        currentRow - 1,
        maxRowOrColumn,
        visitedMatrix,
        currentPath.concat("U"),
        paths,
      );
    }
    visitedMatrix[currentRow][currentColumn] = 0;
  }
}

function ratInMaze(maze: Binary[][]) {
  const solution: string[] = [];
  runner(
    maze,
    0,
    0,
    maze.length,
    Array(maze.length)
      .fill(0)
      .map(() => Array(maze.length).fill(0)),
    "",
    solution,
  );
  console.log(solution);
}

ratInMaze([
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
]);
