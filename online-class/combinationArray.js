function solution(n, r) {
  let answer = [];
  let temp = Array(r).fill(0);
  function DFS(L, s) {
    if (L === r) {
      answer.push(temp.slice());
      return;
    }
    for (let i = s; i <= n; i++) {
      temp[L] = i;
      DFS(L + 1, i + 1);
    }
  }
  DFS(0, 1);
  return answer;
}

console.log(solution(4, 2));
