import React from "react";

function userWithGame() {

    const [users, setUserWithGame] = useState()
    fetch('http://localhost:9292/games')
    .then(r => r.json())
    .then(obj => setUserWithGame(obj))


  return (
    <div className="userWithGame">
        <ul>
            {users.map(user => <li>{user.userName}</li>)}
        </ul>
      <h2>userWithGame</h2>
    </div>
  );
}

export default userWithGame;