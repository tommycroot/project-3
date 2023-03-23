import mongoose from 'mongoose'


//! Item Schema 

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 50 },
  category: { type: String, required: true, maxlength: 30 },
  description: { type: String, required: true, maxlength: 300 },
  location: { type: String, required: true, maxlength: 30 },
  condition: { type: String, required: true, maxlength: 300 },
  swapValue: { type: Number, required: true, min: 0.1, max: 999999 },
  image: { type: String, required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})


export default mongoose.model('Item', itemSchema)

