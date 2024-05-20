/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumRightShifts = function (nums) {
  let sorted = [...nums].sort((a, b) => a - b).join("");
  let numsLength = nums.length;
  let count = 0;

  while (numsLength >= 0) {
    if (sorted == nums.join("")) return count;
    nums.unshift(nums.pop());
    count++;
    numsLength--;
  }
  return -1;
};
