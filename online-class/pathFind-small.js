function solution(n, arr) {
  // 그래프배열 생성
  let g = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  arr.reduce((acc, curr) => {
    acc[curr[0]][curr[1]] = 1;
    return acc;
  }, g);
  let count = 0;
  let check = Array(n + 1).fill(0);
  let path = [];
  let tmp = [];
  function DFS(V) {
    if (V === n) {
      count++;
      path.push(tmp.slice());
      return;
    }
    g[V].map((item, idx) => {
      if (idx === 0) return;
      if (item && check[idx] === 0) {
        check[idx] = 1;
        tmp.push(idx);
        DFS(idx);
        check[idx] = 0;
        tmp.pop();
      }
    });
  }
  tmp.push(1);
  check[1] = 1;
  DFS(1);
  console.log(path);
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
