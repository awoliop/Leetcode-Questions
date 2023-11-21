/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let isPrime = new Array(n).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  let counter = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      counter++;
    }
  }
  return counter;
};
