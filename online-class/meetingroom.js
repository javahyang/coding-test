function solution(arr) {
  let meeting = arr.sort((a, b) => {
    return a[1] === b[1] ? a[0] - b[0] : a[1] - b[1];
  });

  return meeting.reduce(
    (acc, curr) => {
      if (curr[0] >= acc[1]) {
        acc[0]++;
        acc[1] = curr[1];
      }
      return acc;
    },
    [0, 0]
  )[0];
}

console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
