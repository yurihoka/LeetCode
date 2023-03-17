/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  const sorted = indices.slice();
  let result = [];

  for (let i = 0; i < indices.length; i++) {
    result[sorted[i]] = s[i];
  }

  return result.join("");
};
