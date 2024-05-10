import { useState } from 'react'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';

function App() {


    const increaseListMember = (e) => {
    }
  
    return (
      <div className="container-fluid">
         <Routes>
            <Route path="/react-github-pages/" element={<Login />} />
            <Route path="/react-github-pages/register" element={<Register />} />
            <Route path="/react-github-pages/home-page" element={<HomePage />} />
          </Routes>
      </div>
    )
  }
  
  export default App
