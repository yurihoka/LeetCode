/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
  const count = s.split("").filter((char) => char === letter).length;
  return Math.floor((count / s.length) * 100);
};

// console.log(percentageLetter("foobar", "o"));
// console.log(percentageLetter("jjjj", "k"));
