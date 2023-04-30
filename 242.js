/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sortedS = s.split("").sort();
  const sortedT = t.split("").sort();

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (sortedS[i] !== sortedT[i]) {
      return false;
    }
  }
  return true;
};
