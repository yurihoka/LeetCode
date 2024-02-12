/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  const luckyInt = [];
  let temp = 0;

  for (let i = 0; i < arr.length; i++) {
    if (luckyInt.indexOf(arr[i]) === -1) {
      temp = arr.filter((el) => el === arr[i]).length;
      if (temp === arr[i]) luckyInt.push(arr[i]);
    }
  }
  return luckyInt.length ? Math.max(...luckyInt) : -1;
};

// console.log(findLucky([2, 2, 3, 4]));
// console.log(findLucky([1, 2, 2, 3, 3, 3]));
// console.log(findLucky([2, 2, 2, 3, 3]));
