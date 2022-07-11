import React,{useState} from 'react';
import axios from 'axios';


function Homeview(props) {
    const [emp,setEmp]=useState([]);

    axios.get("http://localhost:3000/emp").then(guna=>setEmp(guna.data));
    
    return (
        <div>
            <table border="2px">
                <thead>
                    <tr>
                        <th>fname</th>
                        <th>lname</th>
                    </tr>
                    

                    

                </thead>
                <tbody>
                    {emp.map((e)=>
                    <tr key={e.id}>                                       
                        <td>{e.fname}</td>
                        <td>{e.lname}</td>
                        </tr>)
                        }
                </tbody>
            </table>
            
        </div>
    );
}

export default Homeview;