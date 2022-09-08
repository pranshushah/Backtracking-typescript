function generateAllPermutions(
  nums: number[],
  currentSelectedNumbers: number[],
  result: number[][],
) {
  if (currentSelectedNumbers.length === nums.length) {
    if (currentSelectedNumbers.length !== 0)
      result.push([...currentSelectedNumbers]);
  } else {
    for (const num of nums) {
      const index = currentSelectedNumbers.indexOf(num);
      if (index === -1) {
        currentSelectedNumbers.push(num);
        generateAllPermutions(nums, currentSelectedNumbers, result);
        currentSelectedNumbers.pop();
      }
    }
  }
}

function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  generateAllPermutions(nums, [], result);
  return result;
}

console.log(permute([1, 2, 3]));
console.log(permute([]));
