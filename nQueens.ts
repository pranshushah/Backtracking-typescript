function isValid(currentSlots: number[]) {
  if (currentSlots.length > 0) {
    let columnOfLastPlacedQueen = currentSlots[currentSlots.length - 1];
    //checking for column
    for (let i = 0; i < currentSlots.length - 1; i++) {
      if (columnOfLastPlacedQueen === currentSlots[i]) {
        return false;
      }
    }
    //checking  upper left digonal
    let row = currentSlots.length - 2;
    let i = 1;
    while (row >= 0) {
      if (columnOfLastPlacedQueen - i === currentSlots[row]) {
        return false;
      }
      i++;
      row--;
    }
    // checking upper right digonal
    row = currentSlots.length - 2;
    i = 1;
    while (row >= 0) {
      if (columnOfLastPlacedQueen + i === currentSlots[row]) {
        return false;
      }
      i++;
      row--;
    }
    // we don't need to check diognal below the current row because it does not contain the queen.
    // and we are placing only one queen each row so we are not checking for rows.
    return true;
  } else {
    return false;
  }
}
function findingNQueen(
  size: number,
  currentRow: number,
  currentSlots: number[],
  result: number[][],
) {
  if (size === currentRow) {
    //all the queens are in correct place so push them into the result.
    result.push([...currentSlots]);
  } else {
    for (let column = 0; column < size; column++) {
      // add current choice to the slot.
      currentSlots.push(column);
      if (isValid(currentSlots)) {
        // our current choice is valid so let's explore the next row.
        findingNQueen(size, currentRow + 1, currentSlots, result);
      }
      // our choice was incorrect so we removed it.
      currentSlots.pop();
    }
  }
}
function NQueen(n: number) {
  const result: number[][] = [];
  findingNQueen(n, 0, [], result);
  return result;
}

console.log(NQueen(4));
