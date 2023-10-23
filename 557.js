/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const splitedS = s.split(" ");

  for (let i = 0; i < splitedS.length; i++) {
    splitedS[i] = splitedS[i].split("").reverse().join("");
  }
  return splitedS.join(" ");
};
