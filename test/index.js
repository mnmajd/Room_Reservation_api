// ___ Modules ___ //
require('mocha')
const chai = require('chai')
const chaiHttp = require('chai-http')

// ___ Init ___ //
const server = require('../server')

chai.use(chaiHttp)
const expect = chai.expect

describe('Test 1 GET request /api/v1/apartment', () => {
  it('Should return all apartment', (done) => {
    chai
      .request(server)
      .get('/api/v1/apartment')
      .end((err, response) => {
        expect(response).to.have.status(200)
        expect(response).to.have.header('X-Powered-By', 'Express')
        expect(response).to.have.header('Content-Type', 'application/json; charset=utf-8')

        done()
      })
  })
})
describe('Test 2 GET request /api/v1/room', () => {
  it('Should return all rooms', (done) => {
    chai
      .request(server)
      .get('/api/v1/room')
      .end((err, response) => {
        expect(response).to.have.status(200)
        expect(response).to.have.header('X-Powered-By', 'Express')
        expect(response).to.have.header('Content-Type', 'application/json; charset=utf-8')

        done()
      })
  })
})
describe('Test 3 GET request /api/v1/client', () => {
  it('Should return all clients', (done) => {
    chai
      .request(server)
      .get('/api/v1/client')
      .end((err, response) => {
        expect(response).to.have.status(200)
        expect(response).to.have.header('X-Powered-By', 'Express')
        expect(response).to.have.header('Content-Type', 'application/json; charset=utf-8')

        done()
      })
  })
})