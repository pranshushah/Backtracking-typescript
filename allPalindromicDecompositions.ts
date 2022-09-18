function checkPalindrome(str: string) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function generateAllPalindromicDecompositions(
  str: string,
  decompositionsSoFar: string[],
  result: string[][],
) {
  if (str === "") {
    if (decompositionsSoFar.length > 0) {
      result.push([...decompositionsSoFar]);
    }
  } else {
    for (let i = 1; i <= str.length; i++) {
      const subStr = str.slice(0, i);
      if (checkPalindrome(subStr)) {
        decompositionsSoFar.push(subStr);
        generateAllPalindromicDecompositions(str.slice(i), decompositionsSoFar, result);
        decompositionsSoFar.pop();
      }
    }
  }
}

function partition(s: string): string[][] {
  const result: string[][] = [];
  generateAllPalindromicDecompositions(s, [], result);
  return result;
}

console.log(partition("babbb"));
