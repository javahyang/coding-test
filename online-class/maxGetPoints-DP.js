function solution(max, arr) {
  let dy = Array(max + 1).fill(0);
  // dy[j] ; j시간에 얻을 수 있는 최대 점수

  arr.forEach((question) => {
    let score = question[0];
    let time = question[1];
    // 중복을 피하기 위해서 배열을 거꾸로
    for (let j = max; j >= time; j--) {
      // 현재 문제 풀기로 했으니까 시간은 빼주고
      // 문제 푼 점수를 더하기
      dy[j] = Math.max(dy[j], dy[j - time] + score);
    }
  });
  // console.log(dy);
  return dy[max];
}

console.log(
  solution(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
