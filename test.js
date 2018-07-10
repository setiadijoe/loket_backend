const transaction = require('./api/services/transaction')

transaction.insertTransactionTicket(1, 1, 80000, 1)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.error(err)
  })
