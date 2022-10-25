import { useState, useEffect } from 'react'
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";

function Board({ position, id }) {
  const [game, setGame] = useState(new Chess())

  useEffect(() => {
    game.load(position)
  }, [])
  console.log(game.turn())
  

  function makeAMove(move) {
    // console.log(move)
    const gameCopy = Object.assign(Object.create(Object.getPrototypeOf(game)), game);
    const result = gameCopy.move(move);
    setGame(gameCopy);
    console.log(game.fen())

    fetch(`http://localhost:9292/allgames/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({position: game.fen()})
    })
    .then(obj => console.log(obj))
 
    console.log(result)
    return result; // null if the move was illegal, the move object if the move was legal
  }

  function onDrop(sourceSquare, targetSquare, piece) {
    // console.log(sourceSquare[1], targetSquare[1], piece[1].toLowerCase)
    let move;
    if ((sourceSquare[1] === '7' && piece[1].toLowerCase() === 'p' && targetSquare[1] === '8') || (sourceSquare[1] === '2' && piece[1].toLowerCase() === 'p' && targetSquare[1] === '1')) {
      move = makeAMove({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q'
      });
    } else {
      move = makeAMove({
        from: sourceSquare,
        to: targetSquare
      });
    }
    
    // console.log(game.fen())

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

export default Board;