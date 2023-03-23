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

}