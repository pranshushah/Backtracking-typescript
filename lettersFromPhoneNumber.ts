const digitsToNumber: Record<string, string[]> = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
};

function letterCombinationGenerator(
  digits: string,
  currentLetters: string,
  result: string[],
) {
  if (digits) {
    const firstDigit = digits.slice(0, 1);
    for (let letter of digitsToNumber[firstDigit]) {
      letterCombinationGenerator(
        digits.slice(1),
        currentLetters + letter,
        result,
      );
    }
  } else {
    if (currentLetters) result.push(currentLetters);
    return;
  }
}

function letterCombinations(digits: string) {
  const result: string[] = [];
  letterCombinationGenerator(digits, '', result);
  return result;
}

console.log(letterCombinations('23'));
console.log(letterCombinations(''));
