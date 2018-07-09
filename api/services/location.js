const Models = require('./../../models')

async function createLocation (namePlace, address) {
  return Models.Location.create({namePlace, address})
}

module.exports = {
  createLocation
}
