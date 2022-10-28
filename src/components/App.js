import '../App.css';
import Board from './Board'
import { Routes, Route } from "react-router-dom"
import {useState, useEffect} from 'react'
import Login from './Login';
import TypeError from './TypeError';
import { Chess } from 'chess.js'
import Games from './Games';
// import {Link} from 'react-router-dom'


function App() {
    // const navigate = useNavigate()
    const [users, setUsers] = useState(null)

    const [id, setId] = useState(null)
    const [game, setGame] = useState(new Chess())

    useEffect(() => {
        fetch('http://localhost:9292/users')
        .then(res => res.json())
        .then(obj => {
            setUsers(obj)
        })
    }, [])

    console.log(users)
    function handleClick(id) {
        setId(id)
    }

    return (
        <div>
        <Routes>
            {/* <Route path='/list' element={<UserList setGames={setGames} games={games} handleClick={handleClick}/>} /> */}
            <Route path='/board' element={<Board id={id} game={game} setGame={setGame}/>} />
            <Route path="/" element={<Login />}/>
            <Route path="/home" element={<Login/>}/>
            <Route path="*" element={<TypeError />}/>
            <Route path="/game" element={<Games handleClick={handleClick}/>}/>
        </Routes>
        </div>
    );
}

export default App;