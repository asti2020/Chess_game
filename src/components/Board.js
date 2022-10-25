import { useState, useEffect } from 'react'
import { Chessboard } from "react-chessboard";
// import { Chess } from "chess.js";

function Board({ id, game, setGame }) {
  
  const [position, setPosition] = useState('')

  useEffect(() => {
    fetch(`http://localhost:9292/allgames/${id}`)
    .then(res => res.json())
    .then(obj => {
      console.log(obj.position)
      game.load(obj.position)
      setPosition(obj.position) 
    })
  }, [])

  function makeAMove(move) {
    const gameCopy = Object.assign(Object.create(Object.getPrototypeOf(game)), game);
    const result = gameCopy.move(move);
    
    setGame(gameCopy);

    fetch(`http://localhost:9292/allgames/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({position: gameCopy.fen()})
    })
    .then(obj => obj.json())
    .then(obj => {
      setPosition(obj.position)
    })
 
    return result; // null if the move was illegal, the move object if the move was legal
  }

  function onDrop(sourceSquare, targetSquare, piece) {

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