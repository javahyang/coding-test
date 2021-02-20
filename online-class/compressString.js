function solution(str) {
  let answer = "";
  let cnt = 1;
  str += " "; // 마지막 문자열 비교하기 위해서 빈 문자열 붙임
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) cnt++;
    else {
      answer += str[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
}

console.log(solution("KKHSSSSSSE"));
