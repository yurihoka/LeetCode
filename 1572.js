/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let result = 0;
  let left = 0;
  let right = mat.length - 1;

  for (let i = 0; i < mat.length; i++) {
    if (left === right) {
      result += mat[i][left];
    } else {
      result += mat[i][left];
      result += mat[i][right];
    }
    left++;
    right--;
  }
  return result;
};
