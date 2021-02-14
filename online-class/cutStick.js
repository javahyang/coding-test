function solution(str) {
  let stack = [];
  return str.split("").reduce((acc, curr, idx, arr) => {
    if (curr === "(") stack.push(curr);
    else {
      stack.pop();
      acc = arr[idx - 1] === "(" ? acc + stack.length : acc + 1;
    }
    return acc;
  }, 0);
}

// console.log(solution("()(((()())(())()))(())"));
console.log(solution("(((()(()()))(())()))(()())"));
