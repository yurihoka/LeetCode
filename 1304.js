/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  let newNum = Math.floor(n / 2);
  const result = [];

  for (let i = 1; i <= newNum; i++) {
    result.push(i, -i);
  }

  if (n % 2 !== 0) {
    result.push(0);
  }

  return result;
};
