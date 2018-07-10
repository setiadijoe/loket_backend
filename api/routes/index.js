const {createEvent, getInfo} = require('./handler/event')
const {createLocation} = require('./handler/location')
const {createTicket} = require('./handler/ticket')
const {purchaseTicket} = require('./handler/transaction')

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
    },
    { method: 'POST', path: '/event/create', config: createEvent },
    { method: 'POST', path: '/location/create', config: createLocation },
    { method: 'POST', path: '/event/ticket/create', config: createTicket },
    { method: 'GET', path: '/event/get_info/{eventId}', config: getInfo },
    { method: 'POST', path: '/transaction/purchase/{ticketId}', config: purchaseTicket }
    ])
  },
  name: 'routes-plugin'
}

module.exports = routes
