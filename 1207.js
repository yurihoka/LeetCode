/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  let count = 1;
  const ans = [];
  let s;

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i - 1] !== sorted[i]) {
      ans.push(count);
      count = 1;
    } else {
      count++;
    }
  }

  ans.push(count);
  s = new Set(ans);
  return ans.length === s.size;
};
