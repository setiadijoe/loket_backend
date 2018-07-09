const {createEvent} = require('./handler/event')

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
    }
    ])
  },
  name: 'routes-plugin'
}

module.exports = routes
