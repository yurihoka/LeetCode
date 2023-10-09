/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
  let tempNum = Math.max(...nums);
  let res = 0;

  for (let i = 0; i < k; i++) {
    res += tempNum;
    tempNum++;
  }

  return res;
};
