import Item from '../models/items.js'



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