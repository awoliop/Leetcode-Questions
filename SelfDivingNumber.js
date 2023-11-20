/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let result = [];

  for (let i = left; i <= right; i++) {
    let number = i;
    while (number > 0) {
      let lastDigit = number % 10;
      if (lastDigit === 0 || i % lastDigit !== 0) {
        break;
      }
      number = Math.floor(number / 10);
    }
    if (number == 0) {
      result.push(i);
    }
  }
  return result;
};
