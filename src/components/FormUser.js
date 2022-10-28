import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import  Games from './Games.js';


function FormUser() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userGame, setGameToUser] = useState(' ')
    const[userId, setUserId] = useState(' ')
    const[username, setusername] = useState(' ')
    const[id, setId] = useState(' ')
    const [ongoingGames, setOngoinggames] = useState([])

    function handleSubmit(e){
        e.preventDefault();
        console.log(email,password)
        fetch('http://localhost:9292/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password})
        })

        .then(res => res.json())
        .then(user => {
            setUserId(user.id)
            setusername(user.username)
            return user
        })
        
        .then((user)=> {
            fetch(`http://localhost:9292/games/${user.id}`)
            .then(res => res.json())
            .then(games => {
                console.log(games)
                setGameToUser(games)
                setOngoinggames(games.filter(game => game.ongoing===0).length)
        })

        navigate('/game')

    })
    }
    function handleClick(id){
        setId(id)
    }


    console.log(userGame)

    return (
        <>
        {/* <UserList userGame={userGame} userId={userId} username={username}/> */}
        <div className="Form_user">

            <form  onSubmit={handleSubmit}>
                <div className="form-group"> 
                    <input type="email"
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    {/* <small id="emailHelp" className="form-text text-muted"></small> */}
                    <input 
                        type="password" 
                        className="form-control"  
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <input className='Button' type="submit"/>

                </div>
            </form>
            </div>

            <Games id={id} userId={userId} username={username} ongoingGames={ongoingGames} handleClick={handleClick}/>
</>
    )
}

export default FormUser;