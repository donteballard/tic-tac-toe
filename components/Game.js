import React, { useState, useEffect } from "react";
import { createBoard, placeMark, checkWinner } from "../game.js"
import Board from "./Board";

const Game = ({ size }) => {
  const [board, setBoard] = useState(createBoard(size));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleCellClick = (x, y) => {
    if (winner) return;

    const newBoard = placeMark(board, x, y, player);
    if (!newBoard) return;

    setBoard(newBoard);

    if (checkWinner(newBoard, x, y, player)) {
      setWinner(player);
    } else {
      setPlayer(player === "X" ? "O" : "X");
    }
  };

  const resetGame = () => {
    setBoard(createBoard(size));
    setPlayer(winner === "X" ? "O" : "X");
    setWinner(null);
  };

  useEffect(() => {
    resetGame();
  }, [size]);

  return (
    <div className="text-center">
      <Board board={board} onCellClick={handleCellClick} />
      <div className="mt-4">
        {winner ? (
          <div>
            <div>{winner} wins!</div>
            <button onClick={resetGame} className="bg-yellow-300 text-gray-800 px-4 py-2 rounded">
              Play again
            </button>
          </div>
        ) : (
          <div>Next player: {player}</div>
        )}
      </div>
    </div>
  );
};

export default Game;
