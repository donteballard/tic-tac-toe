export const createBoard = (size) => {
  return Array(size).fill(null).map(() => Array(size).fill(null));
};

export const placeMark = (board, x, y, mark) => {
  if (board[y][x] !== null) return false;

  const newBoard = JSON.parse(JSON.stringify(board));
  newBoard[y][x] = mark;
  return newBoard;
};

export const checkWinner = (board, x, y, mark) => {
  const size = board.length;

  // Check row
  if (board[y].every((cell) => cell === mark)) return true;

  // Check column
  if (board.every((row) => row[x] === mark)) return true;

  // Check diagonal (top-left to bottom-right)
  if (x === y && board.every((row, i) => row[i] === mark)) return true;

  // Check diagonal (top-right to bottom-left)
  if (x === size - 1 - y && board.every((row, i) => row[size - 1 - i] === mark)) return true;

  return false;
};
