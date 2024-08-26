/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  const numbers = s.match(/\d+/g);
  let res;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i + 1] - numbers[i] <= 0) {
      res = false;
      break;
    } else res = true;
  }
  return res;
};
