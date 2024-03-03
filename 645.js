/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let duplicatedNum = -1;
  let missingNum = -1;
  let count = 0;

  for (let i = 1; i <= nums.length; i++) {
    count = nums.filter((num) => num === i).length;

    if (count === 2) {
      duplicatedNum = i;
    } else if (count === 0) {
      missingNum = i;
    }
  }
  return [duplicatedNum, missingNum];
};
