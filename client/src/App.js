//! React
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

//!Components
import Home from './components/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

const App = () => {

  return (

    <div className="site-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/login" element={<Login />} /> 
        </Routes>
      </BrowserRouter>
    </div>

  )

}

export default App
