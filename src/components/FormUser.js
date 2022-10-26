import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom'
// import { Form } from 'react-router-dom';


function FormUser( {handleLoginSubmit} ){
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e, email, password){
        e.preventDefault();

        fetch('http://localhost:9292/login/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify
            ({
                email: email,
                password: password
        })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        navigate('/board')
    }
    
        // .then(res => res.json())
        // .then(data => {console.log(data))

    //     fetch('http://localhost:9292/users')
    //     .then(r => r.json())
    //     .then(obj => {
    //         obj.map((user) => {
    //             if (user.email === email && user.password === password) {
    //                 fetch(`http://localhost:9292/mygames/(user.id)`)
    //                 .then(r => r.json())
    //                 .then(obj => handleLoginSubmit(obj))
    //                 .then((obj) => console.log(obj))
    //                 return navigate('/home')
    //             }else{
    //                 return false
    //             }
    //         })
    //     })
    //     console.log(email, password)
    // }
    //     //     // setEmail('')
    //     // // setPassword('')
    //     // if (email === 'email' && password === 'password'){
    //     //     navigate('/home')
    //     // } else {
    //     //     alert('Please fill out all fields')
    //     // }




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