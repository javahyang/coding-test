function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.length > 0 ? arr : [-1];
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([1, 4, 2, 3]));
console.log(solution([10]));
