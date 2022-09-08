function generateAllParenthesis(
  n: number,
  currentString: string,
  closeBrackets: number,
  openBracket: number,
  result: string[],
) {
  if (currentString.length === n * 2) {
    if (currentString) result.push(currentString);
  } else {
    if (openBracket < n) {
      generateAllParenthesis(
        n,
        currentString + '(',
        closeBrackets,
        openBracket + 1,
        result,
      );
    }
    if (closeBrackets < openBracket) {
      generateAllParenthesis(
        n,
        currentString + ')',
        closeBrackets + 1,
        openBracket,
        result,
      );
    }
  }
}
function generateParenthesis(n: number): string[] {
  const result: string[] = [];
  generateAllParenthesis(n, '', 0, 0, result);
  return result;
}

console.log(generateParenthesis(3));
console.log(generateParenthesis(1));
