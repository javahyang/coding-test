function solution(n) {
  function DFS(k) {
    if (k === 1) return 1;
    else return k * DFS(k - 1);
  }
  return DFS(n);
}

console.log(solution(5));
