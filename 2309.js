/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase() && s.includes(s[i].toLowerCase())) {
      ans = s[i] > ans ? s[i] : ans;
    }
  }
  return ans;
};
