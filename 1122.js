/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const sortArr1 = [];

  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        sortArr1.push(arr1[j]);
        arr1.splice(j, 1);
        j--;
      }
    }
  }
  arr1.sort((a, b) => a - b);
  return [...sortArr1, ...arr1];
};

// console.log(
//   relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
// );
// console.log(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]));
