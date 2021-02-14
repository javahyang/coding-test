function solution(arr, n) {
  // 거스름돈 금액+1 만큼의 dy 를 만들고 큰 숫자로 초기화
  // 문제에서 거스름돈 최대는 500원이기에 1000으로
  let dy = Array(n + 1).fill(1000);
  // dy[i] ; i금액을 거슬러주는데 사용된 최소 동전의 개수
  dy[0] = 0;

  arr.forEach((coin) => {
    for (let j = coin; j <= n; j++) {
      // 현재 coin 은 무조건 사용한다(+1)
      // coin 을 사용하기 위해 이전 거스름돈에 사용된 동전 개수 구함(dy[j-coin])
      dy[j] = Math.min(dy[j], dy[j - coin] + 1);
    }
  });

  return dy[n];
}

console.log(solution([1, 2, 5], 15));
