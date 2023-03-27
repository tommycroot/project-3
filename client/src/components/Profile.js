import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

import { authenticated, isAuthenticated, userIsOwner } from './helpers/auth'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import Spinner from './Spinner.js'
import Error from './Error.js'
import NavBar from './NavBar'

const Profile = () => {

  console.log('PROFILE PAGE')

  const [userInfo, setUserInfo] = useState([])
  const [error, setError] = useState('')



  

  useEffect(() => {
    
    
    
    const getInfo = async () => {
      try {
      
        const { data } = await authenticated.get('/profile')
        setUserInfo(data)
      } catch (err) {
        console.log(err.message)
        setError(err.message)
      }
    }
    getInfo()
    console.log(userInfo)
  }, [])

  const { username, location, averageRating, items } = userInfo

  return (
    <Container>
      <NavBar />
      <Row>
        <Col xs="12">
          <h1>Welcome back, {username}</h1>
        </Col>

        <Col>
          <h2>Listed items:</h2>
          <div>
            {items ?
              items.map(item => {
                const { _id, title, swapValue, image } = item

                return (
                  <Col key={_id} lg="4" sm="12" className="item">
                    <Link to={`/items/${_id}`}>
                      <Card>
                        <div style={{ backgroundImage: `url('${image}')` }} className="thumbnail"></div>
                        <Card.Body>
                          <Card.Title>{title}</Card.Title>
                          <Card.Subtitle>£{swapValue}</Card.Subtitle>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                )

              })
              :
              <>
                {error ?
                  <Error error={error} />
                  :
                  <Spinner />}
              </>
            }
          </div>
        </Col>

      </Row>

    </Container>

  )

}

export default Profile