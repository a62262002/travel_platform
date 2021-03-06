const travelController = require('../controllers/travelController.js')
const adminController = require('../controllers/adminController.js')
const userController = require('../controllers/userController.js')
module.exports = (app, passport) => {
  const authenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/signin')
  }
  const authenticatedAdmin = (req, res, next) => {
    if (req.isAuthenticated()) {
      if (req.user.role === "admin") {
        return next()
      }
      return res.redirect('/')
    }
    res.redirect('/signin')
  }
  // 前台
  app.get('/', (req, res) => res.redirect('/travels')
  )
  app.get('/travels', travelController.getTravels)
  // 後台
  app.get('/admin', (req, res) => res.redirect('/admin/travels'))
  app.get('/admin/travels', adminController.getTravels)
  app.get('/admin/travels/create', adminController.createRestaurant)

  // 登入＆註冊
  app.get('/signup', userController.signUpPage)
  app.post('/signup', userController.signUp)
  app.get('/signin', userController.signInPage)
  app.post('/signin', passport.authenticate('local', {
    failureRedirect: '/siginin', failureFlash: true
  }), userController.signIn)
  app.get('/logout', userController.logout)
}
