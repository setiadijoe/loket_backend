const event = require('./../../api/controllers/event')

const dummyEventName = 'Dummy Event'
const dummyLocationId = 100000

describe('Event test request', () => {
  test('When receive not completed data ', async (done) => {
    const res = await event.createEvent(dummyEventName, null)
    console.log(res)
    expect(res.statusCode).toEqual(422)
    done()
  })
})