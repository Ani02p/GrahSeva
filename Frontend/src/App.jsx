import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Regester'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import axios from "axios";
import SignOut from './components/SignOut';


function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />  
        <Route path="/register" element={<Register />} />  
        <Route path="/Dashboard/*" element={<Dashboard />}/>
        <Route path="/SignOut" element={<SignOut />}/>
      </Routes>
    </Router>
  );
}

export default App;

