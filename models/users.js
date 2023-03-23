import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

//! User schema 
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxlength: 25 },
  location: { type: String, required: true, maxlength: 30 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

userSchema.virtual('items', {
  ref: 'Item', 
  localField: '_id', 
  foreignField: 'owner' 
})



userSchema.set('toJSON', {
  virtuals: true,
  transform: function(doc, ret){
    delete ret.password
  }
})

userSchema
  .virtual('passwordConfirmation')
  .set(function(userPasswordConfirmation){
    this._passwordConfirmation = userPasswordConfirmation
  })

  userSchema.pre('validate', function(next){
    if (this.isModified('password') && this.password !== this._passwordConfirmation){
      this.invalidate('passwordConfirmation', 'Passwords do not match')
    }
    next()
  })

  userSchema.pre('save', function(next){
    if(this.isModified('password')){
      const salt = bcrypt.genSaltSync(12)
      this.password = bcrypt.hashSync(this.password, salt)
    }
    next()
  })

  userSchema.methods.validatePassword = function(plainTextPassword){
    return bcrypt.compare(plainTextPassword, this.password)
  }

  
export default mongoose.model('User', userSchema)

