import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap'


const ItemPage = () => {
  console.log('itempage')
  const [item, setItem] = useState(null)
  const { id } = useParams()

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

  return (
    <>
      <Container>
        <div className="heroSection" id ='hero'></div>
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
            <Button className='editItem'>Edit Item</Button>
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