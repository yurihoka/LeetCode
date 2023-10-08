/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sortedS = s.split("").sort();
  const sortedT = t.split("").sort();

  return sortedS.join("") === sortedT.join("");
};
