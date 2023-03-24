/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const sorted = [...new Set(nums)].sort((a, b) => a - b);
  let current;
  let count = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (sorted[i] !== current) {
      current = sorted[i];
      count++;
    }

    if (count === 3) {
      return current;
    }
  }

  return sorted[sorted.length - 1];
};
