

// import React, { useState } from 'react'
// import ListItem from './ListItem'
// import { NavLink } from 'react-router-dom'
// import Games from './Games';
// import { Chess } from 'chess.js';

// export default function UserList({ username, userId, ongoingGames }) {
//     const [input, setInput] = useState('')
//     const [games, setGames] = useState([])
//     const [game, setGame] = useState(new Chess())
    
//     function handleChange(e) {
//         // console.log(e.target.value)
//         setInput(e.target.value)
//     }

//     // new game submit
//     function handleSubmit(e) {
//         e.preventDefault()

//         fetch(`http://localhost:9292/allgames`, {
//         method: 'POST',
//         headers: { 
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         }, body: JSON.stringify({
//             position: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
//         })
//         })
//         .then(res => res.json())
//         .then(game => {

//         console.log(game)
//         let yourSide = e.target.dropdown.value
//         let opponentSide;
//         if ('W' === yourSide) {
//             opponentSide = 'B'
//         } else {
//             opponentSide = 'W'
//         }

//         fetch(`http://localhost:9292/matchups`, {
//             method: 'POST',
//             headers: { 
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             }, body: JSON.stringify({
//             user_id: userId,
//             game_id: game.id,
//             side: yourSide
//             })
//         })
//         fetch(`http://localhost:9292/users/${input}`).then(res => res.json()).then(opponentId => {
//             fetch(`http://localhost:9292/matchups`, {
//             method: 'POST',
//             headers: { 
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             }, body: JSON.stringify({
//                 user_id: opponentId,
//                 game_id: game.id,
//                 side: opponentSide
//             })
//             })    
//         })
//         let newGames = [...games, game]
//         setGames(newGames)
//         })
    
//     }

//     return (
//         <div className="list">
//         <NavLink to='/' className="logout">log out</NavLink>
//         <h1>{username}</h1>
//         <h3>Current Games:</h3>
//         {/* {
//             // gets user's games from App.js
//             games.map(game => {
//             if (game.ongoing===1) {
//                 return (
//                 <NavLink to='/board' onClick={() => handleClick(game.id)}>
//                     <ListItem key={game} id={game.id} userId={userId}/>
//                 </NavLink>
//                 )
//             }
//             })
//         }
//         {
//             ongoingGames>=1 ? <h3>Past Games:</h3>: null
//         }
//         {
//             games.map(game => {
//             if (game.ongoing===0) {
//                 return (
//                 <NavLink to='/board' onClick={() => handleClick(game.id)}>
//                     <ListItem key={game} id={game.id} userId={userId}/>
//                 </NavLink>
//                 )
//             }
//             })
//         } */}
//         <h3>New Game</h3>
//         {/* new game form */}
//         <form id="newGame" onSubmit={handleSubmit}>
//             <input className="formMargin" type="text" placeholder="opponent username" onChange={handleChange}/>
//             <select id="dropdown">
//             <option value="W">W</option>
//             <option value="B">B</option>
//             </select>
//             <input type="submit" value="Challenge"/>
//         </form>
//         </div>
//     )
// }
