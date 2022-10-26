import React from 'react'

export default function ListItem({ id, position, userId }) {
  fetch(`http://localhost:9292/opponent_username/${userId}/${id}`)
  .then(res => res.json())

  return (
    <div>
        <h3>Game {id}. vs {position} </h3>
    </div>
  )
}
