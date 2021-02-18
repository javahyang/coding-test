function solution(arr) {
  return arr.reduce((acc, curr) => {
    return Math.min(acc, curr);
  }, Number.MAX_SAFE_INTEGER);
}

console.log(solution([2, 5, 1]));
