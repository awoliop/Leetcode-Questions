/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let arr1 = nums.slice(0, n);
  let arr2 = nums.slice(n, nums.length);
  console.log(arr1);
  console.log(arr2);
  let shuffled = [];
  for (let i = 0; i < arr1.length; i++) {
    shuffled.push(arr1[i]);
    for (let j = i; j < arr2.length; j++) {
      shuffled.push(arr2[j]);
      break;
    }
  }
  return shuffled;
};
