/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  const sortedSalary = [...new Set(salary)].sort((a, b) => a - b);

  sortedSalary.shift();
  sortedSalary.pop();
  return sortedSalary.reduce((a, b) => a + b, 0) / sortedSalary.length;
};

// console.log(average([4000, 3000, 1000, 2000]));
// console.log(average([1000, 2000, 3000]));
