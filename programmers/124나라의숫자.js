function solution(n) {
  let answer = [];
  function DFS(n) {
    const share = parseInt(n / 3);
    const rest = n % 3;
    answer.unshift(rest == 0 ? 4 : rest);

    if (share < 3) {
      if (share > 0) {
        if (rest != 0) answer.unshift(share);
        else if (rest == 0 && share - 1 != 0) answer.unshift(share - 1);
      }
      return;
    }
    DFS(rest == 0 ? share - 1 : share);
  }

  DFS(n);
  return answer.join("");
}

console.log(solution(13)); // 111
console.log(solution(273)); // 24244
