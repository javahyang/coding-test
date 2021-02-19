function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  return arr.reduce((acc, item) => {
    let reversed = Number(item.toString().split("").reverse().join(""));
    // 숫자 뒤집기 다른 방법
    // let reversed = 0;
    // while (item) {
    //   let t = item % 10;
    //   reversed = reversed * 10 + t;
    //   item = parseInt(item / 10);
    // }
    if (isPrime(reversed)) acc.push(reversed);
    return acc;
  }, []);
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
