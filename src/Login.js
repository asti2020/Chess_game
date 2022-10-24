import { React } from 'react'
import './App.js'
import {useState} from 'react';
import FormUser from './FormUser.js';
import FormReg from './FormReg.js';
import MyChase from './MyChase.js';

function Login() {
    const [login, setLogin] = useState(true);
    const [regester, setRegester] = useState(true)
    const [guest, setGuest] = useState(true)



    const handleClickLog = (e) => {
        e.preventDefault();
        setLogin(!login);
    }

    const handleClickReg = (e) => {
        e.preventDefault();
        setRegester(!regester);
    }

    const handleClickGuest = (e) => {
        e.preventDefault();
        setGuest(!guest);
    }

    return (
        <div className="login">
            <div>
                <button onClick={handleClickGuest}>{guest ? <h3>Guest</h3> : < MyChase />}</button>
            </div>
            <div  className="loginBtn">
                <button className="loginButton" onClick={handleClickLog}> {login ? <h3>login</h3> : <FormUser />}</button>
            </div>
            <div  className="regBtn">
                <button className="loginButton" onClick={handleClickReg}>{regester ? <h3>register</h3> : <FormReg />}</button>
            </div>
        </div>

    )
}

export default Login