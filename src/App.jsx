import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';

function App() {


  const increaseListMember = (e) => {
  }

  return (
    <div className="container-fluid">
       <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home-page" element={<HomePage />} />
        </Routes>
    </div>
  )
}

export default App
