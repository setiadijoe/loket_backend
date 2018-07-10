const Joi = require('joi')
const { purchaseTicket, getInfo } = require('./../../controllers/transaction')

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

module.exports.getInfo = {
  validate: {
    params: {
      transactionId: Joi.number().required()
    }
  },
  handler: getInfo,
  description: 'Endpoint for get info of transaction'
}
