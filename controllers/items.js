// * PUT route
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