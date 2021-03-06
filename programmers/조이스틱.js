function solution(name) {
  const A = 65,
    Z = 90;
  let answer = [];
  let notA = 0;
  let idx = 0;
  while (idx < name.length) {
    let x = Math.min(name.charCodeAt(idx) - A, Z - name.charCodeAt(idx) + 1);
    answer.push(x);
    if (x !== 0 && idx !== 0 && notA === 0) notA = idx;
    idx++;
  }
  console.log(answer);
  if (notA - 0 < name.length - notA) {
    return (
      answer.reduce((acc, curr) => {
        acc += curr;
        acc++;
        return acc;
      }, 0) - 1
    );
  } else {
    return (
      answer.reduce((acc, curr) => {
        acc += curr;
        return acc;
      }, 0) +
      name.length -
      notA
    );
  }
}

console.log(solution("BBBBAAAABA")); //12
