function solution(n) {
  let answer = 0;
  let dy = Array(n + 1).fill(0);
  // 직관적으로 풀 수 있는 작은 문제는 미리 답을 구해 저장한다
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  answer = dy[n];
  return answer;
}

console.log(solution(7));
