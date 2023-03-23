<<<<<<< HEAD
import Item from '../models/items.js'


//Get Items

export const getItems = async (req, res) => {
  try {
    const items = await Item.find()
    return res.status(200).json(items)
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}


// Delete route 
export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params
    const deletedItem = await Item.findById(id)
    if (!deletedItem) {
      throw new Error('Item not found')
    }
    await Item.findByIdAndDelete(id)
    return res.status(200).json({ message: 'Item deleted' })

  } catch (err) {
    return sendError(err, res)
  }

=======
import { sendError } from '../config/errors.js'
import Item from '../models/items.js'

//* INDEX route
// endpoint: /items

export const getItems = async (req, res) => {
  try {
    console.log('GET ROUTE HIT')
    const items = await Item.find()
    return res.json(items)
  } catch (err) {
    sendError(err, res)
  } 
}

export const createItem = async (req, res) => {
  try {
    console.log('POST ROUTE HIT')
    const newItem = await Item.create(req.body)
    console.log(newItem)
    return res.status(201).json(newItem)
  } catch (err) {
    sendError(err, res)
  }
>>>>>>> bfe4c3316e2573edea1c65409771834cc26a7a05
}