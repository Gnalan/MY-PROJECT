import React, { useState } from 'react';
import axios from 'axios';

function Homeadd(props) {
    const[fname,setfname]=useState("");
    const[lname,setlname]=useState("");
    const addEmp=()=>{
        axios.post("http://localhost:3000/",{fname,lname})

    }
    return (
       
        <div>
            <input placeholder='fname' onChange={(e)=>setfname(e.target.value)}></input>
            <input placeholder='lname' onChange={(e)=>setlname(e.target.value)}></input>
            <button onClick={addEmp}>ADD empolyee</button>
        </div>
    );
}

export default Homeadd;