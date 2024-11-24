import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './Components/Navbar'; 
import Login from './Components/Login'; 
import Registration from './Components/Registration'; 
import Contact from './Components/Contact'; 
import About from './Components/About'; 
 
function App() { 
    return ( 
        <Router> 
            <Navbar /> 
            <div className="container"> 
                <Routes> 
                    <Route path="/" element={<Login />} /> 
                    <Route path="/registration" element={<Registration />} /> 
                    <Route path="/contact" element={<Contact />} /> 
                    <Route path="/about" element={<About />} /> 
                </Routes> 
            </div> 
        </Router> 
    ); 
} 
 
export default App;