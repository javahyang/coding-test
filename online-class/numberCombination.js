function solution(arr, n, m) {
  let answer = 0;
  let temp = Array.from({ length: n });
  function DFS(L, s, sum) {
    if (L === n) {
      if (sum % m === 0) {
        answer++;
        console.log(sum, temp);
      }
      return;
    }
    for (let i = s; i < arr.length; i++) {
      temp[L] = arr[i];
      DFS(L + 1, i + 1, sum + arr[i]);
    }
  }
  DFS(0, 0, 0);

  return answer;
}

console.log(solution([2, 4, 5, 8, 12], 3, 6));
