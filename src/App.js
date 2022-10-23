import './App.css';
import {useState} from 'react'
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";

function App() {
  const [game, setGame] = useState(new Chess())

  // let clone = Object.assign(Object.create(Object.getPrototypeOf(game)), game)

  function makeAMove(move) {
    console.log(move)
    const gameCopy = Object.assign(Object.create(Object.getPrototypeOf(game)), game);
    const result = gameCopy.move(move);
    setGame(gameCopy);

    return result; // null if the move was illegal, the move object if the move was legal
  }

  function onDrop(sourceSquare, targetSquare) {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare
      // promotion: 'q' // always promote to a queen for example simplicity
    });

    console.log(move)

    // illegal move
    if (move === null) return false;
    
    return true;
  }

  return (
    <div>
      <Chessboard id="BasicBoard" position={game.fen()} onPieceDrop={onDrop} />
    </div>
  );
}

export default App;