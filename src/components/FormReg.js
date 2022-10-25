import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';

function FormReg() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const navegation = useNavigate();


    function handleSubmit(e){
        e.preventDefault();
        console.log(email, password, userName);
        navegation('/Login')
    }

    fetch('http://localhost:9292/users/:id', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }, body: JSON.stringify({
            email: email,
            password: password,
            userName: userName
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    
    return (
        <div className="FormReg">
            <form  onSubmit={handleSubmit}>
                <div className="form-group">

                    <label for="Create User Name"></label>
                    <input type="text"
                        className="form-control"
                        id="Create User Name"
                        aria-describedby="emailHelp"
                        placeholder="Create User Name"
                        onChange={(e) => setUserName(e.target.value)}
                        value={userName}
                    />

                    <label for="exampleInputEmail1">Email address</label>   
                    <input type="email"
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                    <input 
                        type="password" 
                        className="form_control" 
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />

                    <input type="password"
                        className="form_control"
                        placeholder="Enter your password again to save"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <input type="submit"/>

                </div>
            </form>
        </div>
    )
}

export default FormReg;