function solution(str) {
  return str.replace(/[^A-Z]/g, "").length;
}

console.log(solution("KoreaTimeGood"));
