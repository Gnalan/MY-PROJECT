import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';

import Contact from './resume/Contact';
import Home from './resume/Home';

function App() {
  return (
    
    <Router>
      <Switch>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Switch>
    </Router>

    
  );
}

export default App;