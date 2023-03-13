/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15　== 0) {
            answer[i] = "FizzBuzz";
        } else if (i % 3 == 0) {
            answer[i] = "Fizz";
        } else if (i % 5 == 0) {
            answer[i] = "Buzz";
        } else {
            answer[i] = `${i}`;
        }
    }
    answer.shift();
    return answer;
};