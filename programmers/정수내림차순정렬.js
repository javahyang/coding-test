function solution(n) {
  return parseInt(
    n
      .toString()
      .split("")
      .sort((val1, val2) => val2 - val1)
      .join("")
  );
}

console.log(solution(118372));
