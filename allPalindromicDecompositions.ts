function checkPalindrome(str: string) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
function generateAllPalindromicDecompositions(
  currentString: string,
  palindromicDecompositionCreatedSofar: string[],
  result: string[][],
) {
  if (currentString) {
    if (currentString.length >= 2) {
      //checking for all possible substrings;
      for (let i = 1; i <= currentString.length; i++) {
        const subString = currentString.slice(0, i);
        if (checkPalindrome(subString)) {
          palindromicDecompositionCreatedSofar.push(subString);
          generateAllPalindromicDecompositions(
            currentString.slice(i),
            palindromicDecompositionCreatedSofar,
            result,
          );
          palindromicDecompositionCreatedSofar.pop();
        }
      }
    }
    // if length is one than it is palindrome string;
    else if (currentString.length === 1) {
      palindromicDecompositionCreatedSofar.push(currentString);
      generateAllPalindromicDecompositions(
        currentString.slice(1),
        palindromicDecompositionCreatedSofar,
        result,
      );
      palindromicDecompositionCreatedSofar.pop();
    }
  } else {
    if (palindromicDecompositionCreatedSofar.length > 0) {
      result.push([...palindromicDecompositionCreatedSofar]);
    }
    return;
  }
}

function partition(s: string): string[][] {
  const result: string[][] = [];
  generateAllPalindromicDecompositions(s, [], result);
  return result;
}

console.log(partition('bb'));
console.log(partition('aab'));
console.log(partition(''));
console.log(partition('a'));
