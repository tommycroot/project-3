// * PUT route
import { sendError } from '../config/errors.js'
import Item from '../models/items.js'

export const updateItem = async (req, res) => {
  try {
    const { id } = req.params
    const itemToUpdate = await Item.findById(id)
    if(!itemToUpdate) throw new Error('Record not found')

    if(!itemToUpdate.owner.equals(req.loggedInUser._id)){
      throw new Error('Unauthorised')
    }

    Object.assign(itemToUpdate, req.body)
    await itemToUpdate.save()

    return res.json(itemToUpdate)
  } catch (err) {
    return sendError(err, res)
  }
}



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
}
