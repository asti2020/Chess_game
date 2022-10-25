import {React, useState} from 'react';
// import { Form } from 'react-router-dom';


function FormUser(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function handleSubmit(e){
        e.preventDefault();
        console.log(email, password);
    }
    return (
        <div className="Form_user">

            <form  onSubmit={handleSubmit}>
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