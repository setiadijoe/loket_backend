const event = require('./handler/event')
const {createLocation} = require('./handler/location')
const {createTicket} = require('./handler/ticket')
const transaction = require('./handler/transaction')

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
    { method: 'POST', path: '/event/create', config: event.createEvent },
    { method: 'POST', path: '/location/create', config: createLocation },
    { method: 'POST', path: '/event/ticket/create', config: createTicket },
    { method: 'GET', path: '/event/get_info/{eventId}', config: event.getInfo },
    { method: 'POST', path: '/transaction/purchase/{ticketId}', config: transaction.purchaseTicket },
    { method: 'GET', path: '/transaction/get_info/{transactionId}', config: transaction.getInfo }
    ])
  },
  name: 'routes-plugin'
}

module.exports = routes
