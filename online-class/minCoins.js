function solution(arr, n) {
  let answer = Number.MAX_SAFE_INTEGER;
  function DFS(L, sum) {
    if (sum > n) return;
    if (L >= answer) return; // 불필요하게 뻗는 가지치기
    if (sum === n) {
      answer = Math.min(answer, L);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      DFS(L + 1, sum + arr[i]);
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution([1, 2, 5], 15));
