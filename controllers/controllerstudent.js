const Model = require('../models')
const bodyParser = require('body-parser');
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
  static editForm(req, res) {
    let obj = {
      where: {
        id: req.params.id
      }
    }
    Student.findOne(obj)
      .then(function(dataStudent) {
        res.render('edit-student', { data: dataStudent })
      })
      .catch(function(err) {
        res.send(err)
      })
  }

  static update(req, res) {
    let obj = {
      first_name: req.body.firstname,
      last_name: req.body.lastname,
      email: req.body.email
    }
    let where = {
      where: {
        id: req.params.id
      }
    }
    Student.update(obj, where)
      .then(function(data) {
        res.redirect('/student')
      })
      .catch(function(err) {
        res.send(err.message)
      })
  }

  static delete(req, res) {
    let obj = {
      where: {
        id: req.params.id
      }
    }
    Student.destroy(obj)
      .then(function(dataStudent) {
        res.redirect('/student')
      })
      .catch(function(err) {
        res.send(err)
      })
  }
}

module.exports = ControllerStudent