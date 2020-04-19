const travelController = require('../controllers/travelController.js')
const adminController = require('../controllers/adminController.js')
module.exports = app => {
  // 前台
  app.get('/', (req, res) => res.redirect('/travels')
  )
  app.get('/travels', travelController.getTravels)
  // 後台
  app.get('/admin', (req, res) => res.redirect('/admin/travels'))
  app.get('/admin/travels', adminController.getTravels)
}
