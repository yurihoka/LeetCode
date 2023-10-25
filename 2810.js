/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
  const finalStr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "i") {
      finalStr.reverse();
      continue;
    }
    finalStr.push(s[i]);
  }
  return finalStr.join("");
};
