import { Chess } from 'chess.js';
import { useState, useEffect } from 'react'
import { Chessboard } from "react-chessboard";

function Board({ id, game, setGame, userId}) {
  
  const [position, setPosition] = useState('')
  const [side, setSide] = useState('')

  if (game.isCheckmate()) {
    alert('Checkmate!')
  } else if (game.isStalemate()) {
    alert('Stalemate!')
  }

  useEffect(() => {
    fetch(`http://localhost:9292/allgames/${id}`)
    .then(res => res.json())
    .then(obj => {
      // console.log(obj.position)
      game.load(obj.position)
      setPosition(obj.position) 
    })
  }, [])

  useEffect(() => {
    fetch(`http://localhost:9292/side/${id}/${userId}`)
    .then(res => res.json())
    .then(obj => {
      // console.log(obj.side.toLowerCase()===game.turn())
      setSide(obj.side.toLowerCase())
    })
  }, [])

  let reset = new Chess()

  function makeAMove(move) {
    const gameCopy = Object.assign(Object.create(Object.getPrototypeOf(game)), game);
    const result = gameCopy.move(move);

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

    if (gameCopy.isCheckmate()) {
      alert('Checkmate!')
    } else if (gameCopy.isStalemate()) {
      alert('Stalemate!')
    }
 
    return result; // null if the move was illegal, the move object if the move was legal
  }

  function onDrop(sourceSquare, targetSquare, piece) {

    let move;
    if ((game.turn()===side) && ((sourceSquare[1] === '7' && piece[1].toLowerCase() === 'p' && targetSquare[1] === '8') || (sourceSquare[1] === '2' && piece[1].toLowerCase() === 'p' && targetSquare[1] === '1'))) {
      move = makeAMove({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q'
      });
    } else if (game.turn()===side) {
      // console.log('made')
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
    <div className="board">
      <Chessboard id="BasicBoard" boardOrientation={side==='w' ? 'white' : 'black'} position={game.fen()} onPieceDrop={onDrop} />
    </div>
  );
}

export default Board;