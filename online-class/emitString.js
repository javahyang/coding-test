function solution(str) {
  let stack = [];
  for (let item of str) {
    if (item === ")") {
      while (stack.pop() !== "(");
    } else stack.push(item);
  }
  return stack.join("");
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
