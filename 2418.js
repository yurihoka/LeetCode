/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const sorted = [...heights].sort((a, b) => b - a);
  const result = [];

  for (let i = 0; i < heights.length; i++) {
    result.push(names[heights.indexOf(sorted[i])]);
  }

  return result;
};
