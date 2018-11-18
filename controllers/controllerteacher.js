const Model = require('../models')
const bodyParser = require('body-parser');
const Teacher = Model.teacher

class ControllerTeacher {
  static findAll(req, res) {
    Teacher.findAll()
      .then(function(dataTeacher) {
        res.render('teacher', { data: dataTeacher })
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
    Teacher.create(obj)
      .then(function(data) {
        res.redirect('/teacher')
      })
      .catch(function(err) {
        res.send(err.message)
      })
  }
}

module.exports = ControllerTeacher