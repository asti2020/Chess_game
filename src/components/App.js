import '../App.css';
import Board from './Board'
import List from './List'
import { Routes, Route, useNavigate } from "react-router-dom"
import {useState, useEffect} from 'react'
import Login from './Login';
import TypeError from './TypeError';
import { Chess } from 'chess.js'


function App() {
  const navigate = useNavigate()
  const [username, setUsername] = useState(null)
  const [userId, setUserId] = useState(null)

  const [games, setGames] = useState([])
  const [id, setId] = useState(null)
  const [game, setGame] = useState(new Chess())

  const [newGame, setNewGame] = useState('')
  
  function handleLoginSubmit(e, email, password){
    e.preventDefault();

    // fetch('http://localhost:9292/login/',{
    //   method: 'POST',
    //   headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //   },
    //   body: JSON.stringify({
    //       email: email,
    //       password: password
    //   })
    // })
    // .then(res => res.json())
    // .then(data => console.log(data))
    // navigate('/home')















    fetch(`http://localhost:9292/users/${email}/${password}`)
    .then(r => r.json())
    .then(user => {
      setUserId(user.id)
      setUsername(user.username)
      return user
    })
    .then((user) => {
      fetch(`http://localhost:9292/games/${user.id}`)
      .then(r => r.json())
      .then(obj => {
        setGames(obj)
      })
      .then(() => navigate('/home'))
    })
  }


  function handleClick(id) {
    setId(id)
  }

  return (
    <div>
      <Routes>
        <Route path='/home' element={<List games={games} handleClick={handleClick} username={username} userId={userId} setGames={setGames}/>} />
        <Route path='/board' element={<Board id={id} game={game} setGame={setGame} userId={userId}/>} />
        <Route path="/" element={<Login handleLoginSubmit={handleLoginSubmit}/>}/>
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path="*" element={<TypeError />}/>
        <Route path="/" element={<Board/>}/>
      </Routes>
    </div>
  );
}

export default App;