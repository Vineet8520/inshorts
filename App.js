import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Topnews from './components/Topnews';
import Sports from './components/Sports';
import Business from './components/Business';
import Politics from './components/Politics';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
<> 
      <Navbar/>
    <div>
      <Routes>
          <Route path="/" element={<Topnews/>}/>
          <Route path="/Sports" element={<Sports/>}/>
          <Route path="/Business" element={<Business/>} />
          <Route path = "/Politics" element={<Politics/>}/>
     </Routes>
    </div>
    </>
    </Router> 
  )
}


