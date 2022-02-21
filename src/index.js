module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let openBrackets = [];
  let pairsOfBrackets = {};

  for (let arr of bracketsConfig) {
    openBrackets.push(arr[0]);
    pairsOfBrackets[arr[1]] = arr[0];
  }

  for (i = 0; i < str.length; i++) {
    if (pairsOfBrackets[str[i]] === str[i]) {
      if (stack.indexOf(str[i]) >= 0) {
        if (pairsOfBrackets[str[i]] === stack[stack.length - 1]) {
          stack.pop();
        } else {
          return false;
        }
      } else {
        stack.push(str[i]);
      }
    } else {
      if (openBrackets.includes(str[i])) {
        stack.push(str[i]);
      } else {
        if (stack.length === 0) {
          return false;
        }
        if (pairsOfBrackets[str[i]] === stack[stack.length - 1]) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return stack.length === 0 ? true : false;
};
