import React, {useEffect, useState} from 'react'
import ListItem from './ListItem'
import { NavLink } from 'react-router-dom'

export default function List({games, handleClick}) {

  return (
    games.map(game => (
      <NavLink to='/board' onClick={handleClick(game.position, game.id)}>
        <ListItem key={game.id} id={game.id} position={game.position}/>
      </NavLink>
    ))
  )
}
