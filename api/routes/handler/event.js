const Joi = require('joi')
const { createEvent, getInfo } = require('./../../controllers/event')

module.exports.createEvent = {
  validate: {
    payload: {
      eventName: Joi.string().required(),
      locationId: Joi.number().required()
    }
  },
  handler: createEvent,
  description: 'End Point for create an event with spesific location'
}

module.exports.getInfo = {
  validate: {
    params: {
      eventId: Joi.number().required()
    }
  },
  handler: getInfo,
  description: 'Endpoint for get info about the event'
}
