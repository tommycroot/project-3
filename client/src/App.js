//! React
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

//!Components
import Home from './components/Home'
import ItemPage from './components/items/ItemPage'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import ItemNew from './components/items/ItemNew'
import ItemEdit from './components/items/ItemEdit'

const App = () => {

  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items/:id" element={<ItemPage />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/item/new" element={<ItemNew />} /> 
          <Route path="/item/:itemId/edit" element={<ItemEdit />} /> 
        </Routes>
      </BrowserRouter>
    </div>

  )

}

export default App
