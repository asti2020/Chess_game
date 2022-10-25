import { React } from 'react'
import './App.js'
import {useState} from 'react';
import FormUser from './FormUser.js';
import FormReg from './FormReg.js';

function Login() {
    const [login, setLogin] = useState(true);
    const [regester, setRegester] = useState(true)



    const handleClickLog = (e) => {
        e.preventDefault();
        setLogin(!login);
    }

    const handleClickReg = (e) => {
        e.preventDefault();
        setRegester(!regester);
    }

    return (
        <div className="login">
            <div  className="loginBtn">
                {login ? <button className="loginButton" onClick={handleClickLog}> <h3>login</h3> </button> : <FormUser />}
            </div>
            <div  className="regBtn">
                {regester ? <button className="loginButton" onClick={handleClickReg}> <h3>register</h3> </button> : <FormReg />}
            </div>
        </div>

    )
}

export default Login