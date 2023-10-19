/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  const arr = [];
  let sum = 0;
  let check = 0;

  for (let i = 0; i < queries.length; i++) {
    sum = 0;
    check = 0;

    for (let j = 0; j < nums.length; j++) {
      sum += sortedNums[j];

      if (sum <= queries[i]) {
        check++;
      } else {
        break;
      }
    }
    arr.push(check);
  }
  return arr;
};
