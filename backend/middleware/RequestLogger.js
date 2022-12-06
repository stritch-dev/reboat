 const RequestLogger = (request, response, next) => {
  console.log('\n\n--------------------')
  console.log('Request Logger')
  console.log('--------------------')
  console.log('v---')
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
   console.log('--------------------\n\n')
  next()
}

module.exports = { RequestLogger }