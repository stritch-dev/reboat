require('dotenv').config()
const express = require('express')
const app = express()
const Boat = require("./models/boat")
const {ErrorHandler} =    require("./middleware/ErrorHandler")
const {UnknownEndpoint} = require("./middleware/UnknownEndpoint")
const {RequestLogger} =   require('./middleware/RequestLogger')

// Use
app.use(express.static('build'))
app.use(express.json())
app.use(RequestLogger)
app.use(UnknownEndpoint)
app.use(ErrorHandler) // Keep this as last "use" statement


// GET
app.get('/', (request, response) => {
 response.send("<h1>Hello World</h1>") })

app.get('/api/boats', (request, response, next) => {
 Boat.find({}).then(boats => {
   response.json(boats)
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
  const boat = boats.find(boat => boat.boat_name === boat_name)
  if(boat){ response.send(boat) } else { response.status(404).end() }
})

app.get('/api/boats/type/:boat_type', (request, response) => {
  const boat_type = request.params.boat_type
  const boat = boats.filter(boat => boat.boat_type === boat_type)
  if(boat){ response.send(boat) } else { response.status(404).end() }
})

// POST
app.post('/api/boats', (request, response) => {
  const boat = request.body
  boat.id = Date.now()
  boats = boats.concat(boat)
  response.json(note)
})

// DELETE
app.delete('/api/boats/:id', (request, response) => {
  const id = Number(request.params.id)
  boats = boats.filter(boat => boat.id !== id)
  response.status(204).end()
})


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

