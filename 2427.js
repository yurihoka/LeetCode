/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
  const dividedB = [];

  for (let i = 1; i <= a; i++) {
    a % i === 0 && b % i === 0 ? dividedB.push(i) : null;
  }
  return dividedB.length;
};
