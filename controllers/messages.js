import Item from '../models/items.js'
import { NotFound, Unauthorized, sendError } from '../config/errors.js'

// * POST Message
// Endpoint: /items/:itemId/messages
export const addMessage = async (req, res) => {
  try {
    const { id } = req.params
    const item = await Item.findById(id)
    if(!item) throw new NotFound('Item Not Found')
    const messageToAdd = { ...req.body, owner: req.loggedInUser._id }
    item.messages.push(messageToAdd)
    console.log('ITEM ->', item)
    await item.save()
    return res.status(201).json(record)
  } catch (err) {
    return sendError(err, res)
  }
}

// * DELETE Message
// Endpoint: /itesm/:itemId/messages/:messageId
export const deleteMessage = async (req, res) => {
  try {
    const { itemId, messageId } = req.params
    const loggedInUserId = req.loggedInUser._id
    const item = await Item.findById(itemId)
    if (!item) throw new NotFound('Record not found')
    const messageToDelete = item.messages.id(messageId)
    if(!messageToDelete) throw new NotFound('Review not found')
    if(!messageToDelete.owner.equals(loggedInUserId)){
      console.log('NOT THE OWNER')
      throw new Unauthorized()
    }

    await messageToDelete.deleteOne()
    console.log(item)
    await item.save()

    return res.sendStatus(204)
  } catch (err) {
    return sendError(err, res)
  }
}
