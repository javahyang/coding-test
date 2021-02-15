function solution(board) {
  // 현재 좌표 중심으로 12시, 3시, 6시, 9시의 시계방향 좌표값 확인
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let count = 0;

  function DFS(x, y) {
    if (x === board.length - 1 && y === board.length - 1) {
      count++;
      return;
    }

    dx.map((item, idx) => {
      let nx = x + item;
      let ny = y + dy[idx];
      // 경계선처리
      if (
        nx >= 0 &&
        nx < board.length &&
        ny >= 0 &&
        ny < board.length &&
        board[nx][ny] === 0
      ) {
        board[nx][ny] = 1;
        DFS(nx, ny);
        board[nx][ny] = 0;
      }
    });
  }
  board[0][0] = 1;
  DFS(0, 0);
  return count;
}

console.log(
  solution([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
  ])
);
