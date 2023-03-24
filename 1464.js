/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  let result = 0;

  for (let i = sorted.length - 2; i >= 0; i++) {
    for (let j = sorted.length - 1; j >= 0; j++) {
      return result = (sorted[i] - 1) * (sorted[j] - 1);
    }
  }
};
