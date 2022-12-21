import {React, useState} from 'react';
import './App.css';

function FormReg() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')


    function handleSubmit(e){
        e.preventDefault();
        console.log(email, password, userName);
    }
    return (
        <div className="FormReg">
            <form  onSubmit={handleSubmit}>
                <div className="form-group">

                    <label for="Create User Name"></label>
                    <input type="text"
                        className="form-control"
                        // id="Create User Name"
                        aria-describedby="emailHelp"
                        placeholder="Create User Name"
                        onChange={(e) => setUserName(e.target.value)}
                        value={userName}
                    />

                    <label for="exampleInputEmail1">Email address</label>   
                    <input type="email"
                        className="form-control" 
                        // id="exampleInputEmail1" 
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