function solution(size, arr) {
  let answer = [];
  arr.forEach((item) => {
    let pos = -1;
    pos = answer.indexOf(item);
    if (pos === -1) {
      answer.unshift(item);
      if (answer.length > size) answer.pop();
    } else {
      answer.splice(pos, 1);
      answer.unshift(item);
    }
  });
  return answer;
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
