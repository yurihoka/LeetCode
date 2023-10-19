/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  const times = Math.floor(n / 2);
  const result = [];

  for (let i = 1; i <= times; i++) {
    result.push(i, -i);
  }

  if (n % 2 !== 0) {
    result.push(0);
  }

  return result;
};
