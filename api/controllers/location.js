const Boom = require('boom')
const { createLocation } = require('./../services/location')

module.exports.createLocation = async (request, h) => {
  const {namePlace, address} = request.payload
  try {
    const location = await createLocation(namePlace, address)
    console.log(location)
    return location
  } catch (error) {
    console.error(error)
    return Boom.badData(error)
  }
}
