import { Chess } from 'chess.js';
import { useState, useEffect } from 'react'
import { Chessboard } from "react-chessboard";
import { NavLink } from 'react-router-dom';

function Board({ id, game, setGame, userId, setOngoingGames, ongoing}) {
  
  const [position, setPosition] = useState('')
  const [side, setSide] = useState('')
  const [isCheckmate, setIsCheckmate] = useState(false)
  const [isStalemate, setIsStalemate] = useState(false)

  if (game.isGameOver()) {
    fetch(`http://localhost:9292/ongoing/`, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
      })
  })
    .then(obj => setOngoingGames(1))
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
      setIsCheckmate(true)
    } else if (gameCopy.isStalemate()) {
      setIsStalemate(true)
    }

    if (gameCopy.isGameOver()) {
      fetch(`http://localhost:9292/ongoing/`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id,
        })
    })
      .then(obj => setOngoingGames(1))
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

    console.log('ongoing:', ongoing)

  return (
    <div className="board">
      <NavLink to='/' className="logout">log out</NavLink>
      <div className="board">
        {ongoing===0||isCheckmate||isStalemate ? <h1>GameOver</h1> : <h1>{game.turn()==='w' ? 'white' : 'black'} to move</h1>}
        <Chessboard id="BasicBoard" customBoardStyle={{ borderRadius: '5px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5 '}} boardOrientation={side==='w' ? 'white' : 'black'} position={game.fen()} onPieceDrop={onDrop} />
      </div>
    </div>
  );
}

export default Board;