function solution(n, m) {
  let answer = [];
  let check = Array.from(Array(n), () => 0); // 순열 돌리기 위해 필요
  let p = []; // 순열 담을 배열
  let c = []; // 조합값 구하기
  let flag = false;
  let memo = Array.from(Array(11), () => Array(11).fill(0)); // 문제에서 n의 최대값이 10이므로 사이즈 지정
  function combination(n, r) {
    if (r === 0 || n === r) return 1;
    else if (memo[n - 1][r - 1] > 0) {
      return memo[n - 1][r - 1];
    } else {
      memo[n - 1][r - 1] = combination(n - 1, r - 1) + combination(n - 1, r);
      return memo[n - 1][r - 1];
    }
  }
  function DFS(L, sum) {
    if (flag !== false) return;
    if (L === n && sum === m) {
      answer = p.slice();
      flag = true;
      return;
    }
    for (let i = 0; i < n; i++) {
      if (check[i]) continue;
      check[i] = 1;
      p.push(i + 1);
      DFS(L + 1, sum + c[L] * p[L]);
      check[i] = 0;
      p.pop(); // p[L] = i+1 이면 필요없지만, push를 한 경우 pop 을 반드시! 인덱스를 지정하면 같은 위치에 덮어써지기에 괜찮지만 push를 하면 데이터가 계속 쌓인다
    }
  }

  // 조합 구하기
  for (let i = 0; i < n; i++) {
    c.push(combination(n - 1, i));
  }

  DFS(0, 0);
  return answer;
}

console.log(solution(4, 16));
