/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  const odd = nums.filter((item) => item % 2 === 0);
  const even = nums.filter((item) => item % 2 !== 0);
  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      answer.push(odd.pop());
    } else {
      answer.push(even.pop());
    }
  }
  return answer;
};
