const Joi = require('joi')
const { purchaseTicket } = require('./../../controllers/transaction')

module.exports.purchaseTicket = {
  validate: {
    params: {
      ticketId: Joi.number().required()
    },
    payload: {
      name: Joi.string().required(),
      phoneNumber: Joi.string().required(),
      amountTicket: Joi.number().integer().required()
    }
  },
  handler: purchaseTicket,
  description: 'Endpoint for purchase ticket'
}
