import { React } from 'react'
import './App.js'
import {useState} from 'react';
import FormUser from './FormUser.js';
import FormReg from './FormReg.js';


function Login({ handleLoginSubmit }) {
    const [login, setLogin] = useState(true);
    const [register, setRegister] = useState(true)

    const handleClickLog = (e) => {
        e.preventDefault()
        setLogin(!login);
    }

    const handleClickReg = (e) => {
        e.preventDefault();
        setRegister(!register);
    }

    return (
        <div className="login">
            <div  className="loginBtn">
                {login ? <button className="loginButton" onClick={handleClickLog}> <h3>login</h3> </button> : <FormUser handleLoginSubmit={handleLoginSubmit}/>}
            </div>
            <div  className="regBtn">
                {register ? <button className="loginButton" onClick={handleClickReg}> <h3>register</h3> </button> : <FormReg setLogin={setLogin} setRegister={setRegister}/>}
            </div>
        </div>

    )
}

export default Login