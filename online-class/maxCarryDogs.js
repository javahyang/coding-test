function solution(max, arr) {
  let answer = 0;
  function DFS(L, sum) {
    if (sum > max) return; // 불필요한 재귀함수 호출 방지
    if (L === arr.length) {
      answer = Math.max(answer, sum);
      return;
    }
    DFS(L + 1, sum + arr[L]);
    DFS(L + 1, sum);
  }
  DFS(0, 0);
  return answer;
}
// console.log(Number.MIN_SAFE_INTEGER);
console.log(solution(259, [81, 58, 42, 33, 61]));
