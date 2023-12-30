import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Aboutus from './components/pages/Aboutus';
import Contact from './components/pages/Contact';
import SignIn from './components/pages/SignIn';
// import Gallary from './components/pages/Gallary';
import Navbar from './components/inc/Navbar';
import Footer from './components/inc/Footer';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div >
    <Navbar/>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />

            {/* <Route path="/gallary" element={<Gallary />} />
            <Route path=':gallaryid' element={<Gallary />}/>     */}
           
          <Route path="/signin" element={<SignIn />} />

      </Routes> 
      <Footer/>
    </div>
    </Router>
    
    
  );
}

export default App;


