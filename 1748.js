/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== sorted[i - 1] && sorted[i] !== sorted[i + 1]) {
      sum = sum + sorted[i];
    }
  }
  return sum;
};
