const Joi = require('joi')
const {createLocation} = require('./../../controllers/location')

module.exports.createLocation = {
  validate: {
    payload: {
      namePlace: Joi.string().required(),
      address: Joi.string().required()
    }
  },
  handler: createLocation,
  description: 'Create a location for events'
}
