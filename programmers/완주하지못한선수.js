function solution(participant, completion) {
  let answer = "";
  let sh = new Map();
  for (let item of participant) {
    if (sh.has(item)) {
      const count = sh.get(item) + 1;
      sh.set(item, count);
    } else {
      sh.set(item, 1);
    }
  }
  console.log(sh);

  for (let item of completion) {
    if (sh.has(item)) {
      const count = sh.get(item) - 1;
      sh.set(item, count);
    }
  }

  console.log(sh);

  for (let [k, v] of sh) {
    if (v === 1) return k;
  }

  return answer;
}

// console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
// console.log(
//   solution(
//     ["marina", "josipa", "nikola", "vinko", "filipa"],
//     ["josipa", "filipa", "marina", "nikola"]
//   )
// );
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "mislav", "ana"])
);
