import React, { useState } from 'react';

function Login(props) {
    const [uid,setUid]=useState("")
    const display=()=>{
        alert('welocome'+uid)
    }
    return (
        <div>
            <center>
                <h1><u>LOGIN</u></h1><br></br>
                User Name : <input onChange={(e)=>setUid(e.target.value)}></input><br></br>
                Password : <input type="password"></input><br></br>
                <button onClick={display}>Login</button>
            </center>
            
        </div>
    );
}

export default Login;