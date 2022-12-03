 const RequestLogger = (request, response, next) => {
  console.log('--------------------Hello')
   console.log('v---')
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('^---')
  next()
}

module.exports = { RequestLogger }