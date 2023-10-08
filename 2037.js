/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
  const sortedStudent = students.sort((a, b) => a - b);
  const sortedSeat = seats.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < students.length; i++) {
    sum += Math.abs(sortedStudent[i] - sortedSeat[i]);
  }
  return sum;
};
