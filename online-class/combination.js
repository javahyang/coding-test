function solution(n, r) {
  let memo = Array.from(Array(n), () => Array(r).fill(0));
  // console.log(memo);
  function DFS(n, r) {
    if (r === 0 || n === r) return 1;
    // 한 번 방문한 값은 저장한 후 접근
    else if (memo[n - 1][r - 1] > 0) {
      console.log("memo", memo[n - 1][r - 1]);
      return memo[n - 1][r - 1];
    } else {
      memo[n - 1][r - 1] = DFS(n - 1, r - 1) + DFS(n - 1, r);
      return memo[n - 1][r - 1];
    }
  }
  console.log(memo);
  return DFS(n, r);
}

console.log(solution(5, 3));
