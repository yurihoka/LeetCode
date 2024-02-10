/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
  const divideS = s.split("");
  let count = 0;

  for (let i = 0; i < divideS.length; i++) {
    if (divideS[i] === letter) {
      count++;
    }
  }
  return Math.floor((count / divideS.length) * 100);
};
