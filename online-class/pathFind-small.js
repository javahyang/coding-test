function solution(n, arr) {
  // 그래프배열 생성
  let g = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  arr.reduce((acc, curr) => {
    acc[curr[0]][curr[1]] = 1;
    return acc;
  }, g);
  let count = 0;
  let check = Array(n + 1).fill(0);
  function DFS(V) {
    if (V === n) {
      count++;
      return;
    }
    g[V].map((item, idx) => {
      if (check[idx]) return;
      if (item) {
        check[V + 1] = 1;
        DFS(V + 1);
        check[V + 1] = 0;
      }
    });
  }
  check[1] = 1;
  DFS(1);
  return count;
}

console.log(
  solution(5, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
);
