/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  let sorted = [...heights].sort((a, b) => b - a);
  let result = [];

  for (let i = 0; i < heights.length; i++) {
    result.push(names[heights.indexOf(sorted[i])]);
  }

  return result;
};
