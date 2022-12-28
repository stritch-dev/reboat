require('dotenv').config()
const express = require('express')
const server = express()
const cors = require("cors")
const Boat = require("./models/boat")
const {ErrorHandler} = require("./middleware/ErrorHandler")
// const {UnknownEndpoint} = require("./middleware/UnknownEndpoint")
// const {RequestLogger} = require('./middleware/RequestLogger')

// Use
server.use(express.static('build'))
server.use(express.json())
// app.use(RequestLogger)
// app.use(UnknownEndpoint)

server.use(cors())
server.use(ErrorHandler) // Keep this as last "use" statement

// GET
server.get('/', (request, response) => {
  response.send("<h1>Hello World</h1>")
})

server.get('/api/boats', (request, response) => {
  Boat.find().then(boats => {
    response.send(boats)
  })
})

server.get('/api/boats/:id', (request, response, next) => {
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

server.get('/api/boats/name/:boat_name', (request, response) => {
  const query  = Boat.where({ boat_name: request.params.boat_name });
  query.find(function (err, boats) {
    if (err) return ErrorHandler(err,request, response, null );
    if (boats) {
      // doc may be null if no document matched
      console.log("found boat", JSON.stringify(boats))
      response.send(boats)
    }
  });
})

server.get('/api/boats/type/:boat_type', (request, response) => {
  const query = Boat.where({boat_type: request.params.boat_type})
  query.find( function (err, boats) {
    if (err) return ErrorHandler(err, request, response, null)
    if (boats)  response.send(boats)
    else (response.status(404).end())
  })
})

// POST
server.post('/api/boats', (request,response) => {
  Boat.create(request.body)
  response.sendStatus(204)
})

// DELETE
server.delete('/api/boats/:id', (request, response) => {
  const id = request.params.id
  Boat.findByIdAndDelete(id, function(err,docs) {
    if(err){
      console.log(err)
    } else {
      console.log("Deleted", docs)
    }
  })
  response.status(204).end()
})

const PORT = process.env.PORT
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = server
