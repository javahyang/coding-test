function solution(board, moves) {
  const size = board.length;
  const new_board_acc = Array.from(Array(size), () => Array());
  // board 재정렬
  const new_board = board.reduce((acc, curr, i) => {
    curr.map((item, idx) => {
      if (item > 0) {
        // acc[idx][i] = item;
        acc[idx] = [...acc[idx], item];
      }
    });
    return acc;
  }, new_board_acc);
  console.log(new_board);
  // moves 대로 바구니에 담기
  let answer = 0;
  const basket = moves.reduce((acc, curr) => {
    const idx = curr - 1;
    if (new_board[idx].length > 0) {
      const pickup_item = new_board[idx].shift();
      if (acc[acc.length - 1] === pickup_item) {
        acc.pop();
        answer += 2;
      } else acc.push(pickup_item);
    }
    return acc;
  }, []);
  console.log(basket);

  return answer;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
const result = solution(board, moves);
console.log(result); // 4
