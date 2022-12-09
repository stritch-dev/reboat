const server = require("../server.js")
const supertest = require("supertest")
const requestWithSupertest = supertest(server)

describe("Boat Endpoints", function () {
  it("GET / should return 'text/html'", async () => {
    const response = await requestWithSupertest.get("/")
    console.log(response)
    expect(response.status).toEqual(200)
    expect(response.type).toEqual("text/html")
    expect(response.text).toEqual("<h1>Hello World</h1>")

    })

})

