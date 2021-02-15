function solution(board) {
  let answer = 0;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  function DFS(x, y) {
    if (board[x][y] === 0) return;
    board[x][y] = 0;
    dx.map((item, idx) => {
      let nx = x + dx[idx];
      let ny = y + dy[idx];
      if (
        nx >= 0 &&
        nx < board.length &&
        ny >= 0 &&
        ny < board.length &&
        board[nx][ny]
      ) {
        DFS(nx, ny);
      }
    });
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        DFS(i, j);
        answer++;
      }
    }
  }

  return answer;
}

console.log(
  solution([
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
  ])
);
