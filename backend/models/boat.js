const mongoose = require('mongoose')
require('dotenv').config()

const url = process.env.MONGODB_URI

const boatSchema = new mongoose.Schema({
  boat_name: String,
  boat_type: String,
})

boatSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Boat = mongoose.model('Boat',boatSchema)

mongoose.connect(url)


module.exports = mongoose.model('Boat',boatSchema)