function solution(s, e) {
  let answer = 0;
  let queue = [];
  let sh = new Map();
  sh.set(s, 0);
  queue.push(s);
  while (queue.length) {
    let v = queue.shift();
    for (let nv of [v - 1, v + 1, v + 5]) {
      if (nv === e) {
        return sh.get(v) + 1;
      } else if (sh.has(nv)) continue;
      if (nv > 0 && nv <= 10000) {
        sh.set(nv, sh.get(v) + 1);
        queue.push(nv);
      }
    }
  }

  return answer;
}

console.log(solution(8, 3));
