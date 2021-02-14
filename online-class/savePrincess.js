function solution(n, k) {
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  let count = 1;
  while (queue.length > 1) {
    const x = queue.shift();
    if (count < k) {
      queue.push(x);
      count++;
    } else count = 1;
  }
  return queue.shift();
}

console.log(solution(8, 3));
