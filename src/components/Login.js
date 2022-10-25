import { React } from 'react'
import './App.js'
import {useState} from 'react';
import FormUser from './FormUser.js';
import FormReg from './FormReg.js';
import Board from './Board.js';
import  { redirect } from 'react-router-dom'

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
        if (guest) {
            setGuest(!guest);
            redirect('/board')
        } else {
            setGuest(!guest);
            redirect('/home')
        }
        // setGuest(true);
        // <redirect to='/board'  />
    }

    return (
        <div className="login">
            {guest ?   <div>
                <button onClick={handleClickGuest}>{guest ? <h3>Guest</h3> : null }</button>
            </div> : <Board />}


            {login? 
            <div  className="loginBtn">
                <button className="loginButton" onClick={handleClickLog}> {login ? <h3>login</h3> : null}</button>
            </div> :
            <FormUser />
            }

            {regester ?   <div  className="regBtn">
                <button className="loginButton" onClick={handleClickReg}>{regester ? <h3>register</h3> : null}</button>
            </div> :  <FormReg />}
        </div>

    )
}

export default Login