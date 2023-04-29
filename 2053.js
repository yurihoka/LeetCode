/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  let map = {};

  for (let s of arr) {
    if (map[s] !== undefined) {
      map[s] = map[s] + 1;
    } else {
      map[s] = 1;
    }
  }

  let i = 0;
  
  for (let s of arr) {
    if (map[s] === 1 && ++i === k) {
      return s;
    }
  }
  return "";
};
