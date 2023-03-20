/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const sorted = [...nums].sort((a, b) => a - b);

  for (let i = 0; i < nums.length + 1; i++) {
    if (i !== sorted[i]) {
      return i;
    }
  }
};
