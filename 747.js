/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  const max = Math.max(...nums);
  const indexOfMax = nums.indexOf(max);
  const bigNumThanMax = nums
    .map((el) => el * 2)
    .filter((el) => el > max).length;

  return bigNumThanMax < 2 ? indexOfMax : -1;
};
