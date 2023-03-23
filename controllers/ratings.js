import User from '../models/users.js'


//! Post rating 
export const addRating = async (req, res) => {
  try {
    const { id } = req.params
    const seller = await User.findById(id)

    if(!seller) throw new NotFound('Record Not Found')

    const ratingToAdd = { ...req.body, owner: req.loggedInUser._id }
    
    seller.ratings.push(ratingToAdd)
    
    await seller.save()

    return res.status(201).json()
  } catch (err) {
    return sendError(err, res)
  }
}

//! Delete rating 
export const deleteRating = async (req, res) => {
  try {
    const { id, ratingId } = req.params
    const loggedInUserId = req.loggedInUser._id
    const seller = await User.findById(id)

    if (!seller) throw new NotFound('Record Not Found')

    const ratingToDelete = seller.ratings.id(ratingId)
    if (!ratingToDelete) throw new NotFound('Rating Not Found')

    ratingToDelete.remove()
    await seller.save()

    return res.status(204).json()
  } catch (err) {
    return sendError(err, res)
  }
}
