import {React, useState} from 'react';

function FormReg({ setLogin, setRegister }) {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')
    const [username, setUsername] = useState('')



    function handleSubmit(e){
        e.preventDefault();
        console.log(username, email, password, passwordAgain);
        if (password === passwordAgain) {
            fetch('http://localhost:9292/users', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }, body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password,
                })
            })
            .then(res => res.json())
            .then(data => console.log(data))
            setLogin(false)
            setRegister(true)
        } else {
            console.log('your passswords don\'t match')
        }
                
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
                        placeholder="Enter User Name"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />

                    <label for="exampleInputEmail1"></label>   
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
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />

                    <input type="password"
                        className="form_control"
                        placeholder="Enter password again"
                        onChange={(e) => setPasswordAgain(e.target.value)}
                        value={passwordAgain}
                    />
                    <input type="submit"/>

                </div>
            </form>
        </div>
    )
}

export default FormReg;