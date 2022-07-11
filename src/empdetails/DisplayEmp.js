import axios from 'axios';
import React,{useState,useEffect}from 'react';

 function DisplayEmp(props) {
     const[emp,setEmp]=useState([]);
     useEffect(() => {
         view()
     }, []);
     const view=()=>{
         axios.get("http://localhost:5000/emp").then(res=>setEmp(res.data));
     }
     const onDelete=(id)=>{
         axios.delete(`http://localhost:5000/emp/${id}`).then(()=>view())
     }
  return (
    <div>
        <table border='2px'>
            <thead>
                <tr>
                    <th>fname</th>
                    <th>lname</th>
                    <th>action</th>
                    </tr>
            </thead>
            <tbody>
                {emp.map((item)=>
                <tr key={item.id}>
                    <td>{item.fname}</td>
                    <td>{item.lname}</td>
                    <td>
                    <button >Update</button>
                    <button onClick={()=>onDelete(item.id)}>Delete</button>
                    </td>
                </tr>)}
            </tbody>
        </table>

    </div>
  );
}
export default DisplayEmp;