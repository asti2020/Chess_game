import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';


function FormUser(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navegation = useNavigate();


    function handleSubmit(e){
        // const navegation = useNavigate();

        e.preventDefault();
            navegation('/board')
        // console.log(email, password);
        // if (email === 'email' && password === 'password') {
        //     navegation('/board')
        // } else {
        // navegation('/Login')
        // }
    }
    return (
        <div className="Form_user">

            <form  onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>   
                    <input type="email"
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    <input 
                        type="password" 
                        className="form_control" 
                        placeholder="Enter your password"
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