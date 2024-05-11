import { useState } from 'react'
import './App.css'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import Error from './components/Error';

function App() {


    const increaseListMember = (e) => {
    }
  
    return (
      <div className="container-fluid">
         <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home-page" element={<HomePage />} />
            <Route path="/error" element={<Error />} />
            <Route path='*' element={<Navigate to="/error" />} />
          </Routes>
      </div>
    )
  }
  
  export default App
