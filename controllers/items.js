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
}