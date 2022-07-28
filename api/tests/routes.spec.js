const request = require("supertest");
const app = require("../src/app");

const chai = require("chai");
const chaiHttp = require("chai-http");

// Definicion de afirmaciones
chai.should();
chai.use(chaiHttp);

// -----------------------------------------------------------
// Test usando supertest
// -----------------------------------------------------------

describe("Test: GET /iecho?text=test (usnado Supertest)", function () {
  it("Deberia devolver 200 Si paso parametros correctos", function (done) {
    request(app).get("/iecho?text=test").expect(200, done);
  });
  it("Deberia devolver 400 si los parametros son incorrectos ", function (done) {
    request(app).get("/iecho").expect(400, done);
  });
});

// -----------------------------------------------------------
// Test usando chai
// -----------------------------------------------------------

describe("Test: GET /iecho?text=test (usando Chai)", () => {
  it("Deberia devolver 200 Si paso parametros correctos", (done) => {
    chai
      .request(app)
      .get("/iecho?text=test")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it("Deveria devolver 400 si los parametros son incorrectos", (done) => {
    chai
      .request(app)
      .get("/iecho")
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
});
