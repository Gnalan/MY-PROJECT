import React, { useState } from 'react';


function FunctionChild(props) {

    const[cname,setCname]=useState("");

    return (
        <div>
           my name is {props.parentName}
           <input onChange={(e)=>props.setCName({cname:e.target.value})}></input>
           <button onClick={()=>props.update(props.setCName.cname)}>update</button>
        </div>
    );
}

export default FunctionChild;