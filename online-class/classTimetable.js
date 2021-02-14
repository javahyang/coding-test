function solution(need, plan) {
  let answer = "YES";
  let queue = need.split("");
  for (let item of plan) {
    if (queue.includes(item)) {
      if (item !== queue.shift()) {
        answer = "NO";
        break;
      }
    }
  }
  if (queue.length > 0) answer = "NO";
  return answer;
}

console.log(solution("CBA", "CBDGE"));
