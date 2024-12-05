/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  let res = 1;

  for (let i = 1; i <= min; i++) {
    if (min % i === 0 && max % i === 0) {
      res = i;
    }
  }
  return res;
};
