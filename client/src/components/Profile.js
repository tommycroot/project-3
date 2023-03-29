import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useLocation } from 'react-router-dom'

import { authenticated, getPayload, getToken, isAuthenticated, userIsOwner } from './helpers/auth'

import { Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import Spinner from './Spinner.js'
import Error from './Error.js'
import NavBar from './NavBar'



const Profile = () => {

  const navigate = useNavigate()

  console.log('PROFILE PAGE')

  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {


    const getInfo = async () => {
      try {
        console.log('USER INFO', userInfo)
        console.log('PAYLOAD', getPayload())
        const { data } = await authenticated.get('/api/profile')
        console.log('response', data)
        setUserInfo(data)
      } catch (err) {
        console.log(err.message)
        setError(err.message)
      }
    }
    getInfo()
  }, [])

  const [error, setError] = useState('')

  const postNewItem = () => {
    navigate('/items/new')
  }




  return (
    <Container>
      {userInfo &&
        <Row>
          <Col xs="12">
            <h1>Welcome back, {userInfo.username}</h1>
            <h2>Listed items:</h2>
          </Col>

          <Col className="item-container-profile" lg="7">

            {userInfo.items ?
              userInfo.items.map(item => {
                const { _id, title, swapValue, image } = item

                return (
                  <Col key={_id} lg="5" sm="12" className="item-card-profile">
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

          </Col>

          <Col>
            <h2>Location: {userInfo.location}</h2>
            <h3>Your average rating: {userInfo.averageRating}</h3>
            <p>Click an item card to view your listing and make edits.</p>
            <Button onClick={postNewItem}>List new item</Button>


            <div>{userInfo.items.map(item => {
              console.log('Item Message', item.messages)
              const itemMessages = item.messages
              console.log('constMessages', itemMessages)
              if (itemMessages.length > 0)
                return itemMessages.map((message, index) => {
                  console.log('logged message', message.text)
                  console.log('item url', message.itemToSwap)
                  const idB = message.itemToSwap.split('/')
                  const swapURL = idB[idB.length - 1]
                  console.log('idb', idB)
                  if (message.text) {
                    return (
                      <div key={`${item.id}-${index}`}>
                        <p>{item.title}</p>
                        <p>{message.text}</p>
                        <Link to={message.itemToSwap}>Click here to see my Item! </Link>
                        <Button onClick={async () => {
                          try {
                            await authenticated.put(`api/trade/${item._id}/${swapURL}`)
                            await authenticated.delete(`api/items/${item._id}/messages`)
                            await authenticated.get('/api/profile')
                            navigate('/profile')
                          } catch (err) {
                            console.log(err)
                          }
                        }}>Accept Swap</Button>
                      </div>
                    )
                  } else {
                    return (<> <p>You have no messages</p></>)
                  }
                })
            }
            )
            }
            </div>
          </Col>

        </Row>}

    </Container>

  )

}

export default Profile