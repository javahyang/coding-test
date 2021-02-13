function solution(n) {
  let subset = [];
  let check = Array.from(Array(n + 1), () => 0);
  function DFS(v) {
    if (v === n + 1) {
      const tmp = check.reduce((acc, curr, idx) => {
        if (curr === 1) acc.push(idx);
        return acc;
      }, []);
      if (tmp.length > 0) subset.push(tmp.join(" "));
      return;
    }

    check[v] = 1;
    DFS(v + 1);
    check[v] = 0;
    DFS(v + 1);
  }

  DFS(1);
  return subset;
}

console.log(solution(3));
