import '../App.css';
import Board from './Board'
import List from './List'
import { Routes, Route } from "react-router-dom"
import {useState, useEffect} from 'react'
import Login from './Login';
import TypeError from './TypeError';
import { Chess } from 'chess.js'


function App() {

  let userId = 2;

  const [games, setGames] = useState([])
  // const [position, setPosition] = useState('')
  const [id, setId] = useState(null)
  const [game, setGame] = useState(new Chess())

  useEffect(() => {
    fetch(`http://localhost:9292/mygames/${userId}`)
    .then(r => r.json())
    .then(obj => setGames(obj))
  }, [])

  function handleClick(id) {
    setId(id)
  }

  return (
    <div>
      <Routes>
        <Route path='/home' element={<List games={games} handleClick={handleClick}/>} />
        <Route path='/board' element={<Board id={id} game={game} setGame={setGame}/>} />
        <Route path="/" element={<Login/>}/>
        <Route path="*" element={<TypeError />}/>
        <Route path="/" element={<Board/>}/>
      </Routes>
    </div>
  );
}

export default App;