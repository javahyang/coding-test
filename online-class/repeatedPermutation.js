function solution(n, m) {
  let answer = [];
  let temp = Array.from({ length: m }, () => 0); //m개 뽑으니까
  function DFS(L) {
    //m중 for문 기능
    if (L === m) {
      // answer.push(temp); // temp 얕은복사.
      answer.push(temp.slice()); // temp 깊은복사.
      return;
    }
    for (let i = 1; i <= n; i++) {
      temp[L] = i;
      DFS(L + 1);
    }
  }
  DFS(0);

  return answer;
}

console.log(solution(3, 2));
