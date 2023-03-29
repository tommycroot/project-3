import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap'

import { userIsOwner, authenticated } from '../helpers/auth.js'

const ItemPage = () => {
  console.log('itempage')
  const [item, setItem] = useState(null)
  const { id } = useParams()

  const navigate = useNavigate()

  console.log('TEST USER', userIsOwner(item))

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/items/${id}`)
      setItem(data)
    }

    getData()
  }, [id])

  if (!item) {
    return <p>Loading...</p>
  }

  const { title, image, description, swapValue, condition, location } = item

  const handleDelete = async () => {
    try {
      console.log('deleted')
      await authenticated.delete(`/api/items/${id}`)
      navigate('/profile')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Container>
        <div className="heroSection" id='hero'></div>
        <Row >
          <Col className='titleLocation'>
            <h1>{title}</h1>
          </Col>
        </Row>
        <Row className="imageInfoRow">
          <Col md={6}>
            <img src={image} alt={title} className='singleImage' />
          </Col>
          <Col md={6} className='itemInfo'>
            <div>
              <p>Location: {location}</p>
              <p>Condition: {condition}</p>
              <p>Approximate Value: £{swapValue}</p>
            </div>
            <Button className='swapNow'>Swap Now</Button>
            {userIsOwner(item) && <div><Link to={`/items/${id}/edit`}className='editItem'>Edit Item</Link></div> }
            {userIsOwner(item) && <div><Link className='deleteItem' onClick={handleDelete}>Delete Item</Link></div> }
          </Col>
          <Row className='description'>
            <Col>
              <div>
                Description <br />
                {description}
              </div>

            </Col>
          </Row>
        </Row>
      </Container>
    </>
  )
}

export default ItemPage