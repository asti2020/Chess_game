import React, { useState } from 'react'

export default function ListItem({ id, userId }) {
  const [opponent, setOpponent] = useState('')

  // gets users opponenet from backend
  fetch(`http://localhost:9292/opponent/${id}/${userId}`)
  .then(res => res.json())
  .then(obj => setOpponent(obj))

  return (
    <div>
        <h3>Game vs {opponent} </h3>
    </div>
  )
}