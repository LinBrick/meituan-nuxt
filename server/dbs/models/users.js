import mongoose from 'mongoose'
const Schema = mongoose.Schema
const UserSchema = new Schema({
  mobilePhone: {
    type: String,
    unique: true,
    require: true
  },
  username: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  }
})

export default mongoose.model('User', UserSchema)
