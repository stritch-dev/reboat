// const mongoose = require("mongoose")
// const supertest =  require("supertest")
// const app = require("../server")
//
// const api = supertest(app)
//
// test('there are  5 boats', async () => {
//   const response = await api.get('/api/boats')
//   expect(response.body).toHaveLength(5)
// })
//
// test('the boat is a Single' , async () => {
//    const response = await api.get('/api/boats')
//    console.log("body", response.body)
//    expect(response.body.boat_type).toEqual('Single')
// })
//
// afterAll(() => {
// console.log("========================================================================================================= closing mongoose connection")
//   mongoose.connection.close()
// })
