import React from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import AddEmp from './AddEmp';
import UpdateEmp from './UpdateEmp';
import DisplayEmp from './DisplayEmp';


function Home(props) {
    return (
        <BrowserRouter>
        <div>
            <h1>REACT EMPLOYEE DETAILS</h1>
            <Link to='/add'><button>Add Employee</button></Link>
            <Link to='/display'><button>Display Employee Details</button></Link>

        </div>
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route  path='/display' element={<DisplayEmp/>}></Route>
            <Route  path='/add' element={<AddEmp/>}></Route>
            <Route path='/update' element={<UpdateEmp/>}></Route>


        </Routes>
        </BrowserRouter>
    );
}

export default Home;