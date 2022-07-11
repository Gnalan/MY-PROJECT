// router concept is doubt
import React from 'react';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
const routing=(
    <Router>
        <div>
            <h1>router on</h1>
            <ul>
                <li>
                    <Link to='/'>Vidu</Link>
                </li>
                <li>
                    <Link to='/a'>About</Link>
                </li>
            </ul>
        </div>
    </Router>
)
export default routing;