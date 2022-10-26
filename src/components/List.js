import React, { useEffect, useState } from 'react'
import ListItem from './ListItem'
import { NavLink } from 'react-router-dom'

export default function List({ games, handleClick }) {
  const [input, setInput] = useState('')
  
  function handleChange(e) {
    setInput(e)
  }

  function handleSubmit() {
    fetch('http://localhost:9292/users')
  }

  return (
    <div>
      <h1></h1>
      {
        games.map(game => {
          // console.log(game.id)
          return (
          <NavLink to='/board' onClick={() => handleClick(game.id)}>
            <ListItem key={game.id} id={game.id} position={game.position}/>
          </NavLink>
        )})
      }
      <h3>New Game</h3>
      <form onSubmit={handleSubmit}>
        <label>opponent username:</label>
        <input type="text" onChange={handleChange}/>
        <select>
          <option value="W">W</option>
          <option value="B">B</option>
        </select>
      </form>
    </div>
  )
}
