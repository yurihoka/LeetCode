/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
  const sortedStudents = [...students].sort((a, b) => a - b);
  const sortedSeats = [...seats].sort((a, b) => a - b);

  return sortedSeats.reduce((a, b, i) => a += Math.abs(sortedSeats[i] - sortedStudents[i]), 0); 
};
