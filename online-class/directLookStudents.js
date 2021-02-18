function solution(arr) {
  return arr.reduce(
    (acc, curr) => {
      if (acc[1] < curr) {
        acc[1] = curr;
        acc[0]++;
      }
      return acc;
    },
    [1, arr[0]]
  )[0];
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
