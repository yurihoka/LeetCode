/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  let result = 0;

  grid.forEach((row) => row.sort((a, b) => a - b));

  for (let i = 0; i < grid[0].length; i++) {
    let max = 0;
    for (let el of grid) max = Math.max(max, el[i]);
    result += max;
  }
  return result;
};
