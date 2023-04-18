import { useState } from "react";
import Head from "next/head";
import Game from "../components/Game";

export default function Home() {
  const [size, setSize] = useState(3);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSize = parseInt(e.target.elements.boardSize.value);
    if (newSize >= 3) setSize(newSize);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>CallMiner x Tic-Tac-Toe</title>
      </Head>

      <div className="w-max mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Tic-Tac-Toe</h1>
        <form onSubmit={handleSubmit} className="mb-4 text-center">
          <label htmlFor="boardSize" className="mr-2">
            Board size:
          </label>
          <input
            id="boardSize"
            name="boardSize"
            type="number"
            defaultValue={size}
            min="3"
            className="border border-gray-400 px-2 py-1 rounded"
          />
          <button
            type="submit"
            className="bg-yellow-300 text-gray-800 px-4 py-2 rounded ml-2"
          >
            Update
          </button>
        </form>
        <Game size={size} />
        <br/>
        <h1 className="text-1xl font-bold mb-8 text-center">Made with ❤️ by D'onte' Ballard</h1>
      </div>
    </div>
  );
}
