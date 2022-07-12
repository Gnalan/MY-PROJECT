import React from 'react';
import './App.css';
import Home from './resume/Home';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Contact from './resume/Contact';
// import Home from './resume/Home';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>

  //   <div>hello
      // <Home></Home> 
  // <Contact></Contact>
  //   </div>
  );
}

export default App;