function solution(arr) {
  return arr.reduce(
    (acc, curr) => {
      if (curr === 1) {
        acc[1]++;
        acc[0] += acc[1];
      } else acc[1] = 0;
      return acc;
    },
    [0, 0]
  )[0];
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
