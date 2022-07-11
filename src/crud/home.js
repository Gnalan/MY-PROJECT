import React from 'react';
import{BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Homeupdate from './homeupdate';
import Homeview from './homeView';
import Homeadd from './homeAdd';
function Home(props) {
    return (
        <BrowserRouter>
        <div>
            <h1>React crud operation</h1>
            <Link to='/add'><button><b>Add Employee</b></button></Link>
            <Link to='/view'><button><b>View Employee</b></button></Link>
        </div>
        <Routes>
            <Route path='/view' element={<Homeview />}></Route>
            <Route path='/add' element={<Homeadd />}></Route>
            <Route path='/update' element={<Homeupdate />}></Route>

            </Routes>
        </BrowserRouter>
    );
}

export default Home;