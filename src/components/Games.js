import { Chess } from 'chess.js'
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Games (){
    const navigate = useNavigate()

    const [game, setGame] = useState(new Chess())
    const [games, setGames] = useState([])
    const [oppnent, setOpponents] = useState('')
    const [input, setInput] = useState('')

    
console.log(oppnent)
console.log(game)

    useEffect (() => {
    fetch(`http://localhost:9292/mygames/1`)
    .then(res => res.json())
    .then(game => {
        setGame(game)
    })

    fetch(`http://localhost:9292/opponent/1`)
    .then(res => res.json())
    .then(obj => {
        setOpponents(obj)
    })
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault()
        let newGames = [...games, game]
        setGames(newGames)
        navigate('/game')
    
    }

    
        console.log(games)
        const handleChange = (e) => {
            console.log(e)
            setInput(e.target.value)
        }   

        function handleClick(e){
            e.preventDefault()
            navigate('/board')
        }



    return(
        <div>
            <h2>Your Games:</h2>
            {games.map((game) => {
                return(
                    <>
                        <div key={game.id}>
                            <h3>Game {game.id} vs oppnent {game.id}</h3>
                            <button onClick={handleClick}>Play</button>
                        </div>
                    </>
                )})}
            <h2>Start a New Game</h2>
                 <form id="newGame" onSubmit={handleSubmit}>
                            <input input={input} className="formMargin" type="text" placeholder="opponent username" onChange={handleChange}/>
                            <select id="dropdown">
                            <option value="W">W</option>
                            <option value="B">B</option>
                            </select>
                            <input type="submit" value="Challenge"/>
                        </form>
        </div>
    )
}
  export default Games
