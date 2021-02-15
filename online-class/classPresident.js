function solution(str) {
  let arr = str.split("");
  let sh = new Map();
  arr.forEach((item) => {
    if (sh.has(item)) {
      const count = sh.get(item) + 1;
      sh.set(item, count);
    } else {
      sh.set(item, 1);
    }
  });
  // console.log(sh);
  let max = Number.MIN_SAFE_INTEGER;
  let answer;
  for (let [k, v] of sh) {
    if (v > max) {
      max = v;
      answer = k;
    }
  }
  return answer;
}

console.log(solution("BACBACCACCBDEDE"));
