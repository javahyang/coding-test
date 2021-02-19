function solution(str) {
  const mid = parseInt(str.length / 2);
  const mod = str.length % 2;
  if (mod === 1) return str.substring(mid, mid + 1);
  else return str.substring(mid - 1, mid + 1);
}

console.log(solution("good"));
