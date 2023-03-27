import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SingleItemPage = () => {
  const [item, setItem] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchItem = async () => {
      const { data } = await axios.get(`/items/${id}`)
      setItem(data)
    }

    fetchItem()
  }, [id])

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.image} alt={item.title} />
      <p>{item.description}</p>
      <p>{item.swapValue}</p>
      <p>{item.condition}</p>
      <p>{item.location}</p>
    </div>
  )
}

export default SingleItemPage
