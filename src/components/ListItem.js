import React, { useState } from 'react'

export default function ListItem({ id, position, userId }) {
  const [opponent, setOpponent] = useState('')

  fetch(`http://localhost:9292/opponent/${id}/${userId}`)
  .then(res => res.json())
  .then(obj => setOpponent(obj))

  return (
    <div>
        <h3>Game vs {opponent} </h3>
    </div>
  )
}
