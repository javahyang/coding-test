function solution(numbers) {
  const answer = numbers.reduce((acc, current, idx, array) => {
    array.map((i, idx2) => {
      if (idx2 !== idx) {
        if (acc.findIndex((item) => item === i + current) === -1) {
          acc.push(i + current);
        }
      }
    });
    return acc;
  }, []);
  return answer.sort((a, b) => a - b);
}

const numbers = [5, 0, 2, 7]; //[2, 1, 3, 4, 1];
const result = solution(numbers);
console.log(result);
