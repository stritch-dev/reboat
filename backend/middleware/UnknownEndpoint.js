const UnknownEndpoint = (request, response) => {
  response.status(404).send({error: 'unknown endpoint'})
}

module.exports = {UnknownEndpoint}


const UnkownEndPoint = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}
module.exports = {ErrorHan