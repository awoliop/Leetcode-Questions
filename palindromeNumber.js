/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let xString = x.toString();
  let i = 0;
  let j = xString.length - 1;
  while (i <= j) {
    if (xString[i] !== xString[j]) {
      break;
    }
    i++;
    j--;
  }
  if (i <= xString.length / 2 - 1) {
    return false;
  } else {
    return true;
  }
};
