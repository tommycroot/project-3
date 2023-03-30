//!React
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

//!Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import Spinner from './Spinner.js'
import Error from './Error.js'

const DealOfDay = () => {


  const [items, setItems] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/items')

        //!Sorting by most messages 
        data.sort((a, b) => {
          console.log('a.messages.length', a.messages.length)
          return a.messages.length < b.messages.length ? 1 : -1
        })
        setItems(data)

        console.log('data', data)
      } catch (err) {
        console.log(err.message)
        setError(err.message)
      }
    }

    getData()
    console.log('items', items)
  }, [])


  return (
    <>
      <Container>
        <Row>
          <Col xs="12">
            <h1 className="display-4 mb-4 text-center">Deals of the day</h1>
            <h2 className="display-4 mb-4 text-center">Swap for Hot items fast!</h2>
          </Col>
        </Row>

        <Row>
          {items.filter(item => item.messages.length > 0).map(item => {
            const { _id, title, swapValue, image, owner, borough } = item

            return (
              <Col key={_id} lg="4" sm="12" className="item">
                <Link to={`/items/${_id}`}>
                  <Card>
                    <div style={{ backgroundImage: `url('${image}')` }} className="thumbnail"></div>
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Subtitle>Swap value: £{swapValue}</Card.Subtitle>
                      <Card.Text>
                        <p>{owner.username}<br></br>{owner.location}, {borough}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            )
          })}
        </Row>
        <Row>
          {error ? (
            <Error error={error} />
          ) : null}
        </Row>



      </Container>
    </>
  )

}

export default DealOfDay