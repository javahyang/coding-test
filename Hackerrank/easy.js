function flippingBits(N) {
  // 2진수 만들기
  // let binaryArr = [];
  // while (N >= 1) {
  //   binaryArr.unshift(N % 2 === 1 ? 0 : 1);
  //   N = parseInt(N / 2);
  // }
  // console.log(binaryArr);

  let sum = 0;
  let m = 0;
  while (m < 32) {
    sum += Math.pow(2, m);
    m++;
  }
  return sum - N;
}

console.log(flippingBits(9));
