import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

// Custom functions
import { authenticated, isAuthenticated, userIsOwner } from '../helpers/auth'

// Custom Components
import ItemForm from './ItemForm'

const ItemEdit = () => {

  // ! Location variables
  const navigate = useNavigate()
  const { itemId } = useParams()

  // ! State
  const [ formFields, setFormFields ] = useState({
    title: '',
    category: '',
    description: '',
    location: '',
    condition: '',
    swapValue: '',
    image: '',
  })
  const [ error, setError ] = useState('')

  const [ item, setItem ] = useState(null)

  // ! On Mount

  useEffect(() => {

    const getItem = async () => {
      try {
        const { data } = await authenticated.get(`/api/items/${itemId}`)
        //console.log('AUTHENTICATED')
        //console.log('ITEM DATA', data)
        setFormFields(data)
      } catch (err) {
        console.log(err)
      }
    }
    getItem()

    console.log('is User is owner working', userIsOwner(item))
    

  }, [item])

  // ! Execution
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await authenticated.put(`/api/items/${itemId}`, formFields)
      navigate(`/items/${itemId}`)
    } catch (err) {
      console.log(err)
      setError(err.response.data.message)
    }
  }


  return (
    <main className='form-page'>
      <ItemForm 
        title="Edit Item"
        formFields={formFields}
        setFormFields={setFormFields}
        error={error}
        setError={setError}
        handleSubmit={handleSubmit}
      />
    </main>
  )
}

export default ItemEdit