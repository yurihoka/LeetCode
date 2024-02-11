/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  const result = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      const freq = arr.filter((el) => el === arr[i]).length;
      if (freq === arr[i]) result.push(arr[i]);
    }
  }
  return result.length ? Math.max(...result) : -1;
};

findLucky([2, 2, 3, 4]);
