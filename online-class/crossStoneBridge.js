function solution(n) {
  let answer = 0;
  let dy = Array(n + 1).fill(0);
  dy[0] = 1; // 한 번에 3칸을 이동할 수 있는 경우
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n; i++) {
    // dy[i-3] ; 3칸을 이동할 수 있는 경우 포함
    dy[i] = dy[i - 3] + dy[i - 2] + dy[i - 1];
  }
  answer = dy[n] + dy[n - 2] + dy[n - 1]; //돌다리를 지나 땅에 도착해야하니까
  return answer;
}

console.log(solution(7));
