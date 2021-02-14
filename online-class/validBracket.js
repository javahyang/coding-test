function solution(str) {
  const arr = str.split("");
  let validStack = [];
  // arr.forEach((item) => {
  //   if (item === "(") validStack.push(item);
  //   else if (item === ")") validStack.pop();
  // });

  for (let item of str) {
    if (item === "(") validStack.push(item);
    else if (item === ")") validStack.pop();
  }
  return validStack.length > 0 ? "NO" : "YES";
}

// console.log(solution("(()(()))(()"));
console.log(solution("(()(()))"));
