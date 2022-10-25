import '../App.css';
import Board from './Board'
import List from './List'
import { Routes, Route } from "react-router-dom"
import {useState, useEffect} from 'react'
import Login from './Login';
import TypeError from './TypeError';


function App() {

    let userId = 1;
    const [games, setGames] = useState([])
    const [position, setPosition] = useState('')
    const [id, setId] = useState(null)

    useEffect(() => {
        fetch('http://localhost:9292/{userId}/games')
        .then(r => r.json())
        .then(obj => setGames(obj))
    }, [])

    function handleClick(pos, id) {
        setPosition(pos)
        setId(id)
    }

    return (
        <div>
        <Routes>
            <Route path='/home' element={<List games={games} handleClick={handleClick} />} />
            <Route path='/board' element={<Board position={position} id={id}/>} />
            <Route path="/" element={<Login />}/>
            <Route path='/login' element={<Login />} />
            <Route path="*" element={<TypeError />}/>
        </Routes>
        </div>
    );
}

export default App;