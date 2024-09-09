/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function (nums) {
  const singleDigitNums = [...nums].filter((num) => num < 10);
  const doubleDigitNums = [...nums].filter((num) => num > 9);
  const sumSingleDigitNums = singleDigitNums.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue;
    },
    0
  );
  const sumDoubleDigitNums = doubleDigitNums.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue;
    },
    0
  );

  return sumSingleDigitNums != sumDoubleDigitNums ? true : false;
};
