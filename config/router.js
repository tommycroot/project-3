import express from 'express'
const router = express.Router()
// import { getItems, getSingleItem, createItem, updateItem, deleteItem} from '../controllers/items.js'
import { updateItem } from '../controllers/items.js'

// import { addRating, deleteRating } from '../controllers/reviews.js'
// import { addMessage, updateMessage, deleteMessage } from '../controllers/messages.js'
import { registerUser, loginUser } from '../controllers/auth.js'
import { secureRoute } from './secureRoute.js'
// import { profileView, getSingleProfile } from '../controllers/users.js'

// router.route('/items')
//   .get(getItems)
//   .post(secureRoute, createItem)

router.route('/items/:id')
  // .get(getSingleItem)
  .put(secureRoute, updateItem)
  // .delete(secureRoute, deleteItem)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

// router.route('/items/:id/reviews')
//   .post(secureRoute, addRating)

// router.route('/items/:itemId/reviews/:reviewId')
//   .delete(secureRoute, deleteRating)

// router.route('/items/:itemId/messages')
//   .post(secureRoute, addMessage)

// router.route('/items/:itemId/messages/:messageId')
//   .put(secureRoute, updateMessage)
//   .delete(secureRoute, deleteMessage)

// router.route('/profile')
//   .get(secureRoute, profileView)

// router.route('/profile')
//   .get(secureRoute, profileView)  

// router.route('/profile/:profileId')
//   .get(secureRoute, getSingleProfile)

export default router