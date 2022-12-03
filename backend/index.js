require('dotenv').config()
const express = require('express')
const app = express()
const Boat = require("./models/boat")
import requestLogger from "./middleware/RequestLogger"

const unknownEndpoint = (request, response) => { response.status(404).send({ error: 'unknown endpoint' }) }

// Use
app.use(express.json())
app.use(unknownEndpoint)

// GET
app.get('/', (request, response) => {
 response.send("<h1>Hello World</h1>") })

app.get('/api/boats', (request, response, next) => {
 requestLogger(request,response,next)
 Boat.find({}).then(boats => {
   response.json(boats)
 })
})

app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})




app.get('/api/boats/:id', (request, response) => {
  const id = Number(request.params.id)
  const boat = boats.find(boat => boat.id === id)
  if(boat){ response.send(boat) } else { response.status(404).end() }
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

