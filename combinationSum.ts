function sumOfElementsOfArray(arr: number[]) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function generateAllCombinationSum(
  candidates: number[],
  currentCombination: number[],
  startIndex: number,
  target: number,
  result: number[][],
) {
  const currentSum = sumOfElementsOfArray(currentCombination);
  if (currentSum >= target) {
    if (currentSum === target) {
      const finalArray = [...currentCombination];
      result.push(finalArray);
    } else {
      return;
    }
  } else {
    for (let i = startIndex; i < candidates.length; i++) {
      if (candidates[i] <= target && currentSum + candidates[i] <= target) {
        currentCombination.push(candidates[i]);
        generateAllCombinationSum(
          candidates,
          currentCombination,
          i,
          target,
          result,
        );
        currentCombination.pop();
      }
    }
  }
}

function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  generateAllCombinationSum(candidates, [], 0, target, result);
  return result;
}

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([1, 2], 4));
