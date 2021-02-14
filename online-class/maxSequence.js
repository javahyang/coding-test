function solution(arr) {
  // arr 크기로 dy 배열 생성
  let dy = Array(arr.length);
  dy[0] = 1;
  // dy[i] : arr[i]값이 증가수열의 마지막 숫자일 때 최대 길이
  // arr[i] 위치에서 arr[i-1~0]값이 현재보다 작을 때 dy[i-1 ~ 0] 까지의 값 중 가장 큰 값+1
  for (let i = 1; i < arr.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dy[j] > max) {
        max = dy[j];
      }
    }
    dy[i] = max + 1;
  }

  return Math.max(...dy);
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));
