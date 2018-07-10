const Joi = require('joi')
const {createTicket} = require('./../../controllers/ticket')

module.exports.createTicket = {
  validate: {
    payload: {
      price: Joi.number().required(),
      quota: Joi.number().integer().required(),
      startDate: Joi.string().isoDate(),
      endDate: Joi.string().isoDate(),
      eventId: Joi.number().required(),
      ticketType: Joi.string().valid('regular', 'gold', 'platinum').required()
    }
  },
  handler: createTicket,
  description: 'Endpoint for create ticket for one event'
}
