import React,{Component} from 'react';
function Employee(props){
    return(
        <div>
            <h1>hello,{props.name}</h1>
            <h1>your emp id: {props.empid}</h1>
            <skills empskill='react developer'></skills>
        </div>
    )
}
export default Employee;