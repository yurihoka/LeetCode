/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  const result = [];
  let temp = [];
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    temp = arr.slice(i + 1);
    max = Math.max(...temp);

    result[i] = max;
  }

  result[arr.length - 1] = -1;
  return result;
};
