import mongoose from 'mongoose'

//! User schema 
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxlength: 25 },
  location: { type: String, required: true, maxlength: 30 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

export default mongoose.model('User', userSchema)

