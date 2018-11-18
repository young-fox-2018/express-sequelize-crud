const Model = require('../models')
const Student = Model.student

class ControllerStudent {
  static findAll(req, res) {
    Student.findAll()
      .then(function(dataStudent) {
        res.render('student', { data: dataStudent })
      })
      .catch(function(err) {
        res.send(err)
      })
  }

  static create(req, res) {
    let obj = {
      first_name: req.body.firstname,
      last_name: req.body.lastname,
      email: req.body.email
    }
    Student.create(obj)
      .then(function(data) {
        res.redirect('/student')
      })
      .catch(function(err) {
        res.send(err.message)
      })
  }
}

module.exports = ControllerStudent