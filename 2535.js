/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  let eleSum = 0;
  let digitSum = 0;
  let diff = 0;

  for (let i = 0; i < sorted.length; i++) {
    eleSum += sorted[i];
    while (sorted[i] > 0) {
      digitSum += sorted[i] % 10;
      sorted[i] = Math.floor(sorted[i] / 10);
    }
  }
  diff = Math.abs(eleSum - digitSum);
  return diff;
};
