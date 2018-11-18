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

  static editForm(req, res) {
    let obj = {
      where: {
        id: req.params.id
      }
    }
    Teacher.findOne(obj)
      .then(function(dataTeacher) {
        res.render('edit-teacher', { data: dataTeacher })
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
    Teacher.update(obj, where)
      .then(function(data) {
        res.redirect('/teacher')
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
    Teacher.destroy(obj)
      .then(function(dataTeacher) {
        res.redirect('/teacher')
      })
      .catch(function(err) {
        res.send(err)
      })
  }
}

module.exports = ControllerTeacher