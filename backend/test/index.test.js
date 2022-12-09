const server = require("../server.js")
const supertest = require("supertest")
const requestWithSupertest = supertest(server)

describe("Boat Endpoints", function () {
  it("GET / should return 'text/html'", async () => {
    const response = await requestWithSupertest.get("/")
    expect(response.status).toEqual(200)
    expect(response.type).toEqual("text/html")
    expect(response.text).toEqual("<h1>Hello World</h1>")
    })
  it("GET api/boats returns a list of boats", async () => {
    const response = await requestWithSupertest.get("/api/boats")
    // http://localhost:3001/api/boats
    const boats = '[{"boat_name":"The Journey","boat_type":"Single","id":"63835f77de19c84659b9a888"},{"boat_name":"Flow","boat_type":"Double","id":"6384cf56c1bb6d4387e8ce9f"},{"boat_name":"Flow","boat_type":"Double","id":"638567d8735a872dbbcf812c"},{"boat_name":"Peso","boat_type":"Double","id":"638567e54dfc3715b00a6631"},{"boat_name":"Epilspeed","boat_type":"Double","id":"6385686602aa266b5a8ecf70"},{"boat_name":"Quick","boat_type":"Double","id":"6385687a5aa655764359514f"}]'

      console.log(response)
    expect(response.status).toEqual(200)
    expect(response.type).toEqual("text/html")
    expect(response.text).toEqual(boats)
})

})

