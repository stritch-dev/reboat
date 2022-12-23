require('dotenv').config()
const express = require('express')
const app = express()
const server = app
const Boat = require("./models/boat")
const {ErrorHandler} = require("./middleware/ErrorHandler")
// const {UnknownEndpoint} = require("./middleware/UnknownEndpoint")
// const {RequestLogger} = require('./middleware/RequestLogger')

// Use
app.use(express.static('build'))
app.use(express.json())
// app.use(RequestLogger)
// app.use(UnknownEndpoint)
app.use(ErrorHandler) // Keep this as last "use" statement

// GET
app.get('/', (request, response) => {
  response.send("<h1>Hello World</h1>")
})

app.get('/api/boats', (request, response) => {
  console.log(" searching for boats")
  Boat.find().then(boats => {
    console.log("boats found", boats  )
    response.send(boats)
  })
})

app.get('/api/boats/:id', (request, response, next) => {
  Boat.findById(request.params.id)
    .then(boat => {
      if (boat) {
        response.json(boat)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.get('/api/boats/name/:boat_name', (request, response) => {
  const boat_name = request.params.boat_name

  const query  = Boat.where({ boat_name: boat_name });
  query.findOne(function (err, boat) {
    if (err) return ErrorHandler(err,request, response, null );
    if (boat) {
      // doc may be null if no document matched
      console.log("found boat", JSON.stringify(boat))
    }
  });


})

app.get('/api/boats/type/:boat_type', (request, response) => {
  const boat_type = request.params.boat_type
  const boat = Boat.filter(boat => boat.boat_type === boat_type)
  if (boat) {
    response.send(boat)
  } else {
    response.status(404).end()
  }
})

// POST
app.post('/api/boats', (request,response) => {
  Boat.create(request.body)
  response.sendStatus(204)
})

// DELETE
app.delete('/api/boats/:id', (request, response) => {
  const id = Number(request.params.id)
  Boat.findByIdAndDelete(id)
  response.status(204).end()
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = server
