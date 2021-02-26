function solution(s) {
  var acc = [0, 0];
  for (let x of s) {
    if (/[pP]/.test(x)) acc[0]++;
    else if (/[yY]/.test(x)) acc[1]++;
  }

  return acc[0] === acc[1];
}

function solution2(s) {
  return s.match(/p/gi).length === s.match(/y/gi).length;
}

console.log(solution2("pPoooyY"));
console.log(solution2("Pyy"));
