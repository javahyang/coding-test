function solution(arr) {
  let answer = arr;
  answer.map((item, idx) => {
    let temp = item;
    let j;
    for (j = idx - 1; j >= 0; j--) {
      if (arr[j] > temp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = temp;
  });
  return answer;
}

console.log(solution([11, 7, 5, 6, 10, 9]));
