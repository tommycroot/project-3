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
    <Container>
      <>
        <Row >
          <Col className='titleLocation'>
            <span> <h1>{title}</h1>{location}</span>
          </Col>
        </Row>
        <Row className="imageInfoRow">
          <Col md={6}>
            <img src={image} alt={title} className='singleImage' />
          </Col>
          <Col md={6} className='itemInfo'>
            <div>
              <p>Condition: {condition}</p>
              <p>£{swapValue}</p>
            </div>
            <Button className = 'swapNow'>Swap Now</Button>
            <Button className = 'editItem'>Edit Item</Button>
          </Col>
          <Row className ='descriptionRow'>
            <Col> <div>{description}</div></Col>
          </Row>
        </Row>
      </>
    </Container>
  )
}

export default ItemPage