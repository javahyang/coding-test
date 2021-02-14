function solution(str) {
  let stack = [];
  for (let item of str) {
    if (!isNaN(item)) stack.push(Number(item));
    else {
      const rt = stack.pop();
      const lt = stack.pop();
      let temp;
      if (item === "+") temp = lt + rt;
      else if (item === "-") temp = lt - rt;
      else if (item === "*") temp = lt * rt;
      else if (item === "/") item = lt / rt;
      stack.push(temp);
    }
  }
  return stack.pop();
}

console.log(solution("352+*9-"));
