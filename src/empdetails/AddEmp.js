import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function AddEmp(props) {
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const add=()=>{
        axios.post("http://localhost:5000/emp",{fname,lname});
        alert('added')
       
    }
    return (
        <div>
            <input placeholder='fName'onChange={e=>setFname(e.target.value)}></input>
            <input placeholder='lName'onChange={e=>setLname(e.target.value)}></input>
            <button onClick={add}>Add Employee</button>
        </div>
    );
}

export default AddEmp;