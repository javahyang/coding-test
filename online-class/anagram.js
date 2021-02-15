function solution(n, m) {
  let sh = new Map();
  for (let item of n) {
    if (sh.has(item)) {
      const count = sh.get(item) + 1;
      sh.set(item, count);
    } else {
      sh.set(item, 1);
    }
  }

  for (let item of m) {
    if (sh.has(item) && sh.get(item) > 0) {
      sh.set(item, sh.get(item) - 1);
    } else return "NO";
  }

  // 수업 버전
  // for (let item of m) {
  //   if (!sh.has(item) || sh.get(item) === 0) {
  //     return "NO";
  //   }
  //   sh.get(item, sh.get(item) - 1);
  // }

  for (let [k, v] of sh) {
    if (v > 0) return "NO2";
  }

  return "YES";
}

// console.log(solution("AbaAeCe", "baeeeACA"));
console.log(solution("abaCC", "Caab"));
