import React, { useEffect, useState } from 'react'
import ListItem from './ListItem'
import { NavLink } from 'react-router-dom'

export default function List({ games, handleClick, username, userId, setGames, ongoingGames }) {
  const [input, setInput] = useState('')
  
  function handleChange(e) {
    // console.log(e.target.value)
    setInput(e.target.value)
  }

  // new game submit
  function handleSubmit(e) {
    e.preventDefault()

    fetch(`http://localhost:9292/allgames`, {
      method: 'POST',
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }, body: JSON.stringify({
        position: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
      })
    })
    .then(res => res.json())
    .then(game => {

      console.log(game)
      let yourSide = e.target.dropdown.value
      let opponentSide;
      if ('W' === yourSide) {
        opponentSide = 'B'
      } else {
        opponentSide = 'W'
      }

      fetch(`http://localhost:9292/matchups`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }, body: JSON.stringify({
          user_id: userId,
          game_id: game.id,
          side: yourSide
        })
      })
      fetch(`http://localhost:9292/users/${input}`).then(res => res.json()).then(opponentId => {
        fetch(`http://localhost:9292/matchups`, {
          method: 'POST',
          headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }, body: JSON.stringify({
            user_id: opponentId,
            game_id: game.id,
            side: opponentSide
          })
        })    
      })
      let newGames = [...games, game]
      setGames(newGames)
    })
  
  }

  return (
    <div className="list">
      <NavLink to='/' className="logout">log out</NavLink>
      <h1>{username}</h1>
      <div id="current">
        <h3>Current Games:</h3>
        {
          // gets user's games from App.js
          games.map(game => {
            if (game.ongoing===1) {
              return (
                <div className="item">
                  <NavLink to='/board' onClick={() => handleClick(game.id)}>
                    <ListItem  key={game} id={game.id} userId={userId}/>
                  </NavLink>
                </div>
              )
            }
          })
        }
      </div>
      {/* <hr class="my-4" id="line"></hr> */}
      {ongoingGames>=1 ? (
        <div id="past">
            <h3>Past Games:</h3>
          {
            games.map(game => {
              if (game.ongoing===0) {
                return (
                  <div className="item">
                    <NavLink to='/board' onClick={() => handleClick(game.id)}>
                      <ListItem key={game} id={game.id} userId={userId}/>
                    </NavLink>
                  </div>
                )
              }
            })
          }
        </div> 
      ) : null
      }
      <div id="newGame">
        <form className="form-control" onSubmit={handleSubmit}>
          <label>New Game</label>
          <input className="form-control" type="text" placeholder="opponent username" onChange={handleChange}/>
          <select id="dropdown" className="form-control">
            <option value="W">White</option>
            <option value="B">Black</option>
          </select>
          <input type="submit" className="form-control" value="Challenge"/>
        </form>
      </div>
    </div>
  )
}
