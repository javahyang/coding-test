function solution(arr) {
  let answer = "NO",
    flag = false;
  let totalSum = arr.reduce((acc, curr) => acc + curr, 0);
  function DFS(L, sum) {
    if (flag !== false) return;
    if (L === arr.length) {
      if (totalSum - sum === sum) {
        answer = "YES";
        flag = true; // 재귀함수 도는 중에 조건에 도달했으면 재귀함수 빠져나가기
      }
      return; // if-else 면 return 안해도 되지만, if만 적은 경우엔 없으면 무한루프
    }
    DFS(L + 1, sum + arr[L]);
    DFS(L + 1, sum);
  }

  DFS(0, 0);
  return answer;
}

// console.log(solution([1, 3, 5, 6, 7, 10]));
console.log(solution([1, 3]));
