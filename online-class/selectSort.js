function solution(arr) {
  let answer = arr;
  answer.map((item, idx) => {
    let k = idx;
    let j;
    for (j = idx + 1; j < arr.length; j++) {
      if (arr[j] < arr[k]) k = j;
    }
    [arr[idx], arr[k]] = [arr[k], arr[idx]];
  });
  return answer;
}

console.log(solution([13, 5, 11, 7, 23, 15]));
