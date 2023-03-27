//! React
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

//!Components
import Home from './components/Home'
import ItemPage from './components/ItemPage'

const App = () => {

  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items/:id" element={<ItemPage />} />
        </Routes>
      </BrowserRouter>
    </div>

  )

}

export default App
