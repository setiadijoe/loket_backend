const Joi = require('joi')
const { createEvent } = require('./../../controllers/event')

module.exports.createEvent = {
  validate: {
    payload: {
      eventName: Joi.string().required(),
      locationId: Joi.number().required()
    }
  },
  handler: createEvent
}
