/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const stringArray = n.toString().split("");
  let sum = 0;
  let product = 1;

  for (let i = 0; i < stringArray.length; i++) {
    const number = parseInt(stringArray[i]);

    sum += number;
    product *= number;
  }

  return product - sum;
};
