function solution(day, arr) {
  return arr.reduce((acc, curr) => {
    if (curr % 10 === day) acc++;
    return acc;
  }, 0);
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
