function solution(s, t) {
  let answer = [];
  let p = 1000;

  for (let x of s) {
    if (x === t) p = 0;
    else p++;
    answer.push(p);
  }

  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

console.log(solution("teachermode", "e"));
