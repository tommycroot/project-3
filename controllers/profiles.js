import User from '../models/users.js'
import { sendError, NotFound } from '../config/errors.js'

// * GET LOGGED IN USER'S OWN PROFILE

export const profileView = async (req, res) => {
  try {
    console.log('PROF ROUTE HIT')

    const profile = await req.loggedInUser.populate('items')

    console.log(profile)

    return res.json(profile)

  } catch (err) {
    sendError(err, res)
  }
}

//* GET A DIFFERENT USER'S PROFILE

export const getSingleProfile = async (req, res) => {
  try {
    console.log('SINGLE ROUTE HIT')

    const { profileId } = req.params

    console.log(profileId)

    const profile = await User.findById(profileId).populate('items')

    if (!profile) throw new NotFound('Profile not found')

    console.log(profile)

  } catch (err) {
    sendError(err, res)
  }

}