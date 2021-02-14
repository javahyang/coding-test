function solution(arr) {
  // 비교할 때 현재위치-다음위치 비교하기때문에 -1 해줌
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(solution([13, 5, 11, 7, 23, 15]));
// console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]));
