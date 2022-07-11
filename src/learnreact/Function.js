import React, { useState } from 'react';
import FunctionChild from './FunctionChild';

function Function(props) {
     const[name,setName]=useState("guna");
      const update=(child)=>setName({name:child})



    return (
        <div>
           my name is {name} <br></br>
           <FunctionChild  parentName={name} update={update}/>
        </div>
    );
}

export default Function;