const {createEvent} = require('./handler/event')
const {createLocation} = require('./handler/location')

const routes = {
  register: (server, options) => {
    server.route([{
      method: 'GET',
      path: '/',
      config: {
        handler: () => 'It works buddy',
        description: 'Root API',
        notes: 'return server status'
      }
    }, {
      method: 'POST',
      path: '/event/create',
      config: createEvent
    }, {
      method: 'POST',
      path: '/location/create',
      config: createLocation
    }
    ])
  },
  name: 'routes-plugin'
}

module.exports = routes
