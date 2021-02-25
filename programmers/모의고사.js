function solution(answers) {
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let fp = 0,
    sp = 0,
    tp = 0;

  const n = answers.length;
  let sumArr = [0, 0, 0];
  while (fp < n || sp < n || tp < n) {
    let fe = fp + first.length > n ? n : fp + first.length;
    sumArr[0] = answers.slice(fp, fe).reduce((acc, curr, idx) => {
      if (curr === first[idx]) acc++;
      return acc;
    }, sumArr[0]);
    fp = fe;
    let se = sp + second.length > n ? n : sp + second.length;
    sumArr[1] = answers.slice(sp, se).reduce((acc, curr, idx) => {
      if (curr === second[idx]) acc++;
      return acc;
    }, sumArr[1]);
    sp = se;
    let te = tp + third.length > n ? n : tp + third.length;
    sumArr[2] = answers.slice(tp, te).reduce((acc, curr, idx) => {
      if (curr === third[idx]) acc++;
      return acc;
    }, sumArr[2]);
    tp = te;
  }

  let max = Math.max(...sumArr);
  return sumArr.reduce((acc, curr, idx) => {
    if (max === curr) acc.push(idx + 1);
    return acc;
  }, []);
}

// 다른 사람 풀이
function solution_best(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}

// console.log(solution([1, 2, 3, 4, 5]));
// console.log(solution([1, 3, 2, 4, 2]));
console.log(
  solution([2, 5, 3, 2, 4, 2, 2, 3, 4, 3, 2, 1, 4, 2, 4, 5, 2, 3, 1, 4, 5])
);
console.log(
  solution_best([2, 5, 3, 2, 4, 2, 2, 3, 4, 3, 2, 1, 4, 2, 4, 5, 2, 3, 1, 4, 5])
);
