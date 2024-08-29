/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  const filterBy3 = [...nums].filter((num) => num % 3 === 0);
  const operations = nums.length - filterBy3.length;

  return filterBy3.length === nums.length ? 0 : operations;
};
