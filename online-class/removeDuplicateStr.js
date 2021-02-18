function solution(str) {
  return str.filter((v, i) => {
    return str.indexOf(v) === i;
  });
}

console.log(solution(["good", "time", "good", "time", "student"]));
