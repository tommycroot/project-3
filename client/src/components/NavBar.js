//!Bootstrap components
import axios from 'axios'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { isAuthenticated, removeToken } from './helpers/auth'



const NavBar = () => {

  const navigate = useNavigate()
  const location = useLocation()
  

  const handleLogOut = () => {
    removeToken()
    delete axios.defaults.headers.common['Authorization']
    navigate('/login')
  }

  return (
    <Nav variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link to="/" as={Link} className={location.pathname === '/' ? 'active' : ''}>Home</Nav.Link>
      </Nav.Item>
      {isAuthenticated() ?
        <>
          <Nav.Item>
            <Nav.Link to="/profile" as={Link} className={location.pathname === '/profile' ? 'active' : ''}>My Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <span className="nav-link" onClick={handleLogOut}>Log Out</span>
          </Nav.Item>
        </>
        :
        <>
          <Nav.Item>
            <Nav.Link to="/register" as={Link} className={location.pathname === '/register' ? 'active' : ''}>Register</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/login" as={Link} className={location.pathname === '/login' ? 'active' : ''}>Login</Nav.Link>
          </Nav.Item>
        </>
      }
    </Nav>
  )

}

export default NavBar