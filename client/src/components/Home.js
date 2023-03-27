//!React
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

//!Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const Home = () => {
  console.log('HOME PAGE')

  const [items, setItems] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/items') // * <-- replace with your endpoint
        setItems(data.sort((a, b) => a.swapValue < b.swapValue ? 1 : -1))
      } catch (err) {
        console.log(err.message)
      }
    }
    getData()
    console.log(items)
  }, [])

  return (
    <>
      <Container>
        <Row>
          <Col xs="12">
            <h1 className="display-4 mb-4 text-center">Items available for swap!</h1>
          </Col>
          {items.map(item => {
            const { _id, title, category, description, location, condition, swapValue, image, owner } = item

            return (
              <Col key={_id} lg='4' className='item'>
                <Link to={`/items/${_id}`}>
                  <Card>
                    <Card.Img variant="top" src={image} className="thumbnail"/>
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Subtitle>£{swapValue}</Card.Subtitle>
                      <Card.Text>{owner.location}</Card.Text>
                      <Card.Text>{owner.username}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            )

          })}

        </Row>
      </Container>
    </>

  )
  

}

export default Home