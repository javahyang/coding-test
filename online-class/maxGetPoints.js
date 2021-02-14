function solution(max, arr) {
  let answer = 0;

  function DFS(L, sum, time) {
    if (time > max) return;
    if (L === arr.length) {
      answer = Math.max(answer, sum);
      return;
    }
    DFS(L + 1, sum + arr[L][0], time + arr[L][1]);
    DFS(L + 1, sum, time);
  }

  DFS(0, 0, 0);
  return answer;
}

console.log(
  solution(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
