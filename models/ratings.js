import mongoose from 'mongoose'

const sellerRatingsSchema = new mongoose.Schema({
  rating: { type: Number, required: true, min: 1, max: 5 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }, 
})

export default mongoose.model('Rating', sellerRatingsSchema)


