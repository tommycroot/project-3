import mongoose from 'mongoose'

const messageUserSchema = new mongoose.Schema({
  text: {type: String, required: true},
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true } 
})

export default mongoose.model('Message', messageUserSchema)
