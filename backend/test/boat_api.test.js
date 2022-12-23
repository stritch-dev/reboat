const mongoose = require("mongoose")
const supertest =  require("supertest")
const app = require("../server")

const api = supertest(app)

test('there are  6 boats', async () => {
  const response = await api.get('/api/boats')
  expect(response.body).toHaveLength(6)
})

test('the boat is a Single' , () => {
   api.get('/api/boats')
  .then (response => expect(response.body[0].content).toBe('Single') )
     .catch( error => console.log(error))
     .done()


})

afterAll(() => {
console.log("========================================================================================================= closing mongoose connection")
  mongoose.connection.close()
})