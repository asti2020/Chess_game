import React from 'react'

export default function ListItem({id, position}) {
  return (
    <div>
        <h3>Game {id}. Position: {position} </h3>
    </div>
  )
}
