// 부분수열의 합이 m이하가 되는 경우의 수
function solution(m, arr) {
  let answer = 0,
    lt = 0;
  arr.reduce((acc, curr, rt) => {
    acc += curr;
    while (acc > m) acc -= arr[lt++];
    if (acc <= m) answer += rt - lt + 1;
    return acc;
  }, 0);
  return answer;
}

console.log(solution(5, [1, 3, 1, 2, 3]));
