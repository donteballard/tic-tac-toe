import React from "react";

const Board = ({ board, onCellClick }) => {
  const size = board.length;

  return (
    <div
      className="grid gap-2 w-max mx-auto"
      style={{
        gridTemplateColumns: `repeat(${size}, auto)`,
      }}
    >
      {board.map((row, y) => row.map((cell, x) => (
        <button
          key={`${x}-${y}`}
          onClick={() => onCellClick(x, y)}
          className={`w-16 h-16 border-2 border-gray-600 flex items-center justify-center text-2xl font-bold ${cell ? "bg-gray-200" : "bg-white"}`}
          disabled={cell !== null}
        >
          {cell}
        </button>
      )))}
    </div>
  );
};

export default Board;
