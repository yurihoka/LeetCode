/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const digits = n.toString().split("");
  let sum = 0;
  let product = 1;

  for (let i = 0; i < digits.length; i++) {
    const number = parseInt(digits[i]);

    sum += number;
    product *= number;
  }

  return product - sum;
};
