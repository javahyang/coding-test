function solution(arr, n) {
  let max = 0;
  arr.reduce((acc, curr, idx) => {
    if (idx < n) acc += curr;
    else acc += curr - arr[idx - n];
    max = Math.max(acc, max);
    return acc;
  }, 0);
  return max;
}

console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3));
