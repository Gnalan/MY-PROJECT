import React, { useEffect, useState } from "react";


function Hooks(){
    const[count,updatecount]=useState(0);
    useEffect(()=>{
    alert("hi")
    })
    return(
        <div>
            <p>you have click on {count}times</p>
            <button onClick={()=>updatecount(count+1)}>click</button>
        </div>
    )
}
export default Hooks;