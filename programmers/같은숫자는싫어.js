function solution(arr) {
  return arr.reduce((acc, curr) => {
    if (acc.length < 1 || acc[acc.length - 1] !== curr) acc.push(curr);
    return acc;
  }, []);
}

function solution2(arr) {
  return arr.filter((item, idx) => item !== arr[idx - 1]);
}

console.log(solution2([1, 3, 3, 0, 1]));
