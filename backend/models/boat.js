const mongoose = require('mongoose')
require('dotenv').config()

const url = process.env.MONGODB_URI

mongoose.connect(url).then(result =>{
  console.log("Connected to MongoDB.")
})
  .catch(error => {
    console.log("failed to connect to MongoDB:", error)
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

const Boat = mongoose.model('Boat',boatSchema)

Boat.find({}).then(result => {
  result.forEach(boat => {
    console.log("boat found from datasource ", boat)
  })
  mongoose.connection.close()
})