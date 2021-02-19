function solution(times) {
  let timeline = times.reduce((acc, curr) => {
    acc.push([curr[0], "s"]);
    acc.push([curr[1], "e"]);
    return acc;
  }, []);

  let sorted = timeline.sort((a, b) => {
    return a[0] === b[0] ? a[1].charCodeAt() - b[1].charCodeAt() : a[0] - b[0];
  });
  console.log(sorted);

  return sorted.reduce(
    (acc, curr) => {
      if (curr[1] === "s") acc[0]++;
      else acc[0]--;
      acc[1] = Math.max(acc[1], acc[0]);
      return acc;
    },
    [0, 0]
  )[1];
}

console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
