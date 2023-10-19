/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  const sorted = [...nums].sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < sorted.length; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      if (sorted[j] - sorted[i] === k) {
        count++;
      } else if (sorted[j] - sorted[i] > k) {
        break;
      }
    }
  }
  return count;
};
