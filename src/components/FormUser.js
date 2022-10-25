import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom'
// import { Form } from 'react-router-dom';


function FormUser( {handleLoginSubmit} ){
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')




    return (
        <div className="Form_user">

            <form  onSubmit={e => handleLoginSubmit(e, email, password)}>
                <div className="form-group">
                    <label for="exampleInputEmail1"></label>   
                    <input type="email"
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <small id="emailHelp" className="form-text text-muted"></small>
                    <input 
                        type="password" 
                        className="form_control" 
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <input type="submit"/>

                </div>
            </form>
            </div>
    )
}

export default FormUser;