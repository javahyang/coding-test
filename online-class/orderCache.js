function solution(size, arr) {
  let answer = Array(size).fill(0);

  arr.forEach((x) => {
    let pos = -1;
    answer.map((item, idx) => {
      if (x === item) pos = idx; //hit된 작업의 위치구함
    });
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      //hit 발생
      // hit 지점부터 앞까지 당긴다
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });
  return answer;
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
