import { React } from 'react'
import './App.js'
import {useState} from 'react';
import FormUser from './FormUser.js';
import FormReg from './FormReg.js';
import { Chessboard } from 'react-chessboard'

function Login({ handleLoginSubmit }) {
    const [login, setLogin] = useState(true);
    const [register, setRegister] = useState(true)
    const [board, setBoard] = useState(true)

    const handleClickLog = (e) => {
        e.preventDefault();
        setLogin(!login);
        setRegister(true)
        setBoard(false)
    }

    const handleClickReg = (e) => {
        e.preventDefault();
        setRegister(!register);
        setLogin(true)
        setBoard(false)
    }

    return (
        <div className="login">
            {login ? <button className="btn btn-primary" onClick={handleClickLog}> <h3 id="loginTxt">login</h3> </button> : <FormUser handleLoginSubmit={handleLoginSubmit}/>}
            {register ? <button id="register" className="btn btn-primary" onClick={handleClickReg}> <h3 id="registerTxt">register</h3> </button> : <FormReg setLogin={setLogin} setRegister={setRegister}/>}
            {board ? <Chessboard id="BasicBoard" customBoardStyle={{ borderRadius: '5px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5 '}}/> : null}
        </div>
    )
}

export default Login