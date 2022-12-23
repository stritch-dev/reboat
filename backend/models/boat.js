const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI)
  .then(result => {
    console.log("Connected to MongoDB")
  })
  .catch( error => {
    console.log("Error connecting to MongoDB", error.message)
  })

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

module.exports = mongoose.model('Boat',boatSchema)
