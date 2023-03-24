import express from 'express'
const router = express.Router()
import { getItems, createItem, deleteItem, updateItem, getSingleItem } from '../controllers/items.js'
import { addRating, deleteRating } from '../controllers/ratings.js'
import { addMessage, deleteMessage } from '../controllers/messages.js'
import { registerUser, loginUser } from '../controllers/auth.js'
import { secureRoute } from './secureRoute.js'
import { profileView, getSingleProfile } from '../controllers/profiles.js'

router.route('/items')
  .get(getItems)
  .post(secureRoute, createItem)

router.route('/items/:id')
  .get(getSingleItem)
  .put(secureRoute, updateItem)
  .delete(secureRoute, deleteItem)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/users/:userId/ratings')
  .post(secureRoute, addRating)

router.route('/users/:userId/ratings/:ratingId')
  .delete(secureRoute, deleteRating)

router.route('/items/:itemId/messages')
  .post(secureRoute, addMessage)

router.route('/items/:itemId/messages/:messageId')
  .delete(secureRoute, deleteMessage)

router.route('/profile')
  .get(secureRoute, profileView)

router.route('/profile/:profileId')
  .get(secureRoute, getSingleProfile)

export default router