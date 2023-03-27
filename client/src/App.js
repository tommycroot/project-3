//! React
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

//!Components
import Home from './components/Home'

const App = () => {

  return (

    <div className="site-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>
      </BrowserRouter>
    </div>

  )

}

export default App
