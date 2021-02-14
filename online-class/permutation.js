function solution(arr, m) {
  let answer = [];
  let check = Array.from({ length: arr.length }, () => 0);
  let temp = Array.from({ length: m }, () => 0);
  function DFS(L) {
    if (L === m) {
      answer.push(temp.slice()); // 깊은복사
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (check[i]) continue;
      check[i] = 1;
      temp[L] = arr[i];
      DFS(L + 1);
      check[i] = 0; // 다른 가지에서 사용할 수 있도록 체크 해제
    }
  }
  DFS(0);

  return answer;
}

console.log(solution([3, 6, 9], 2));
