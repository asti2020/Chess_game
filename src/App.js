
import './App.css';
// import { useState } from 'react';
import {useEffect} from 'react';
import {React} from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from './Login.js';
import TypeError from './TypeError.js';
import MyChase from './MyChase.js';

function App() {

    useEffect(() => {
        fetch('http://localhost:9292/')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
;    return(
    <div className="App">
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="*" element={<TypeError />}/>
            <Route path="/" element={<MyChase/>}/>
        </Routes>
    </div>

)}

export default App;
