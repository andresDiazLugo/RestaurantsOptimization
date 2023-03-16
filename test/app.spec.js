import app from '../dist/app.js'
import request from 'supertest'

// eslint-disable-next-line no-undef
describe('POST /user', function () {
  // eslint-disable-next-line no-undef
  it('Should response with status 200', async function () {
    const response = await request(app)
      .post('/user/signUp')
      .send({
        username: 'andresd',
        phone: '123456',
        email: 'andresd.ad5gmail.com',
        password: 'argentina18A'
      })

    // eslint-disable-next-line no-undef
    expect(response.status).toBe(200)
  })

  // eslint-disable-next-line no-undef
//   it('Should response in case of exits a register in the la base date of user ', async function () {
//     const response = await request(app)
//       .post('/user/signUp')
//       .send({
//         username: 'andresd',
//         phone: '123456',
//         email: 'andresd.ad5gmail.com',
//         password: 'argentina18A'
//       })
//     // eslint-disable-next-line no-undef
//     expect(response).toMatchObject([
//       // eslint-disable-next-line quotes
//       "error",
//       ['Ya existe un usuario con este nombre']
//     ])
//   })
})
