const db = require('../models')
const Travel = db.Travel

const adminController = {
  getTravels: (req, res) => {
    return Travel.findAll().then(travels => {
      return res.render('admin/travels', { travels: travels })
    })
  },
  createRestaurant: (req, res) => {
    return res.render('admin/create')
  }
}

module.exports = adminController