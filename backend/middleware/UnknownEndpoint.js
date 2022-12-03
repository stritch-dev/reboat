const UnknownEndpoint = (request, response) => {
  response.status(404).send({error: 'unknown endpoint'})
}

default export
UnknownEndpoint
