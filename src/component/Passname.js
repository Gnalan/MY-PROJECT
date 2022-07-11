import React, { useState } from 'react';


function Passname() {
    const New = (a) => {
        alert("welcome "+a);
    }
    const[name,setName]=useState("");

    return (
        <div>
        <button onClick={() => New(name)}>Button click</button>
        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="enter your name"></input>
        </div>
            
        
    );
}

export default Passname;