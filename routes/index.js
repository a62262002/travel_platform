const travelController = require('../controllers/travelController.js')
module.exports = app => {
  app.get('/', (req, res) => res.redirect('/travels')
  )
  app.get('/travels', travelController.getTravels)
}
