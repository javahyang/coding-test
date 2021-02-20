// arr 의 부분수열 합이 m인 개수 구하기
function solution(m, arr) {
  let answer = 0,
    lt = 0,
    sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) {
      answer++;
    }
    while (sum >= m) {
      sum -= arr[lt];
      lt++;
      if (sum === m) answer++;
    }
  }
  return answer;
}

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));
