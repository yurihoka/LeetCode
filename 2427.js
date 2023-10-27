/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
  const answer = [];

  for (let i = 1; i <= a; i++) {
    a % i === 0 && b % i === 0 ? answer.push(i) : null;
  }
  return answer.length;
};
