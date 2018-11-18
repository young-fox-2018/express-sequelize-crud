const Model = require('../models')
const bodyParser = require('body-parser');
const Subject = Model.subject

class ControllerSubject {
  static findAll(req, res) {
    Subject.findAll()
      .then(function(dataSubject) {
        res.render('subject', { data: dataSubject })
      })
      .catch(function(err) {
        res.send(err)
      })
  }

  static create(req, res) {
    let obj = {
      subject_name: req.body.subjectname
    }
    Subject.create(obj)
      .then(function(data) {
        res.redirect('/subject')
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
    Subject.findOne(obj)
      .then(function(dataSubject) {
        res.render('edit-subject', { data: dataSubject })
      })
      .catch(function(err) {
        res.send(err)
      })
  }

  static update(req, res) {
    let obj = {
      subject_name: req.body.subjectname
    }
    let where = {
      where: {
        id: req.params.id
      }
    }
    Subject.update(obj, where)
      .then(function(data) {
        res.redirect('/subject')
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
    Subject.destroy(obj)
      .then(function(dataSubject) {
        res.redirect('/subject')
      })
      .catch(function(err) {
        res.send(err)
      })
  }
}

module.exports = ControllerSubject