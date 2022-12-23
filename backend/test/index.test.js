const server = require("../server")
const supertest = require("supertest")
const mongoose = require("mongoose")
const {request} = require("express");
const requestWithSupertest = supertest(server)

describe("Boat Endpoints", function () {

  it("POST adds boat. Returns 204.", async () => {
    const boat = {
      boat_name: "McBoatFace",
      boat_type: "Single"
    }
    await requestWithSupertest.post("/api/boats", boat)
      .expect(204)

    await requestWithSupertest.get("/api/boats/name/McBoatFace")
      .then( response => {
      expect(response.boat_name === "McBoatFace")
      })

  })

  it("GET / returns 'text/html'", async () => {
    await requestWithSupertest.get("/")
      .expect("<h1>Hello World</h1>")
      .expect(200)
  })

  it("GET api/boats returns a list of boats", async () => {
    const boats = '[{"boat_name":"The Journey","boat_type":"Single","id":"63835f77de19c84659b9a888"},{"boat_name":"Flow","boat_type":"Double","id":"6384cf56c1bb6d4387e8ce9f"},{"boat_name":"Flow","boat_type":"Double","id":"638567d8735a872dbbcf812c"},{"boat_name":"Peso","boat_type":"Double","id":"638567e54dfc3715b00a6631"},{"boat_name":"Epilspeed","boat_type":"Double","id":"6385686602aa266b5a8ecf70"},{"boat_name":"Quick","boat_type":"Double","id":"6385687a5aa655764359514f"}]'
     await requestWithSupertest.get("/api/boats")
       .expect(200)
       .then(response => {
         expect(response.type).toEqual("application/json")
         expect(response.text).toEqual(boats)
       })
  })

  afterEach(() => {
    mongoose.connection.close()
  })
})

