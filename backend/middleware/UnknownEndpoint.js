const UnknownEndpoint = (request, response) => {
  response.status(404).send({error: 'Unknown Endpoint'})
}
module.exports = {UnknownEndpoint}
