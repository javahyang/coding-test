function solution(arr) {
  let answer = arr.reduce(
    (acc, curr) => {
      acc[0] += curr;
      acc[1] = Math.max(acc[1], curr);
      return acc;
    },
    [0, Number.MIN_SAFE_INTEGER]
  );
  return answer[0] - answer[1] > answer[1] ? "YES" : "NO";
}

console.log(solution([6, 27, 11]));
