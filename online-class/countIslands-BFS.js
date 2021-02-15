function solution(board) {
  let answer = 0;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  let queue = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        queue.push([i, j]);
        while (queue.length) {
          let [x, y] = queue.shift();
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
              board[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          });
        }
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
