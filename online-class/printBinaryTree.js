function solution(n) {
  let preorder = (inorder = postorder = "");
  function DFS(v) {
    if (v > 7) return;

    preorder += v;
    DFS(v * 2); //왼쪽자식
    inorder += v;
    DFS(v * 2 + 1); //오른쪽자식
    postorder += v;
  }
  DFS(n);
  console.log("preorder: ", preorder);
  console.log("inorder: ", inorder);
  console.log("postorder: ", postorder);
}

console.log(solution(1));
