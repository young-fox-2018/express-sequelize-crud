const Model = require ('../models/index.js')
class Controller {
  static findAll(req, res) {
      Model.Student.findAll()
          .then(function (student) {
              res.render('student.ejs', { data: student })
          })
          .catch(function (err) {
              res.send(err)
          })
  }

    static renderStudent(req,res){
          res.render('addStudent.ejs')
    }

    static addStudent(req ,res){
          let data = {
              firstname: req.body.firstname,
              lastname: req.body.lastname,
              email: req.body.email
          }
          Model.Student.create(data)
              .then(function () {
                  res.redirect('/student')
              })
              .catch(function (err) {
                  res.send(err.message)
                })
    }
    static renderEditTeacher(req, res) {
        let data= {
            where: {
                id: req.params.id
            }
        }
        Model.Student.findOne(data)
            .then(function (student) {
                res.render('studentedit.ejs', { data:student })
            })
            .catch(function (err) {
                res.send(err)
            })
  }
  static editTeacher(req, res) {
          let data = {
              firstname: req.body.first_name,
              lastname: req.body.last_name,
              email: req.body.email
          }
          Model.Student.update(data, {
              where: {
                  id: req.params.id
              }
          })
              .then(function () {
                  res.redirect('/student')
              })
              .catch(function (err) {
                  res.send(err)
              })
      }
      static deleteStudent(req, res) {
          let data = {
              where: {
                  id: req.params.id
              }
          }
          Model.Student.destroy(data)
              .then(function () {
                  res.redirect('/student')
              })
              .catch(function (err) {
                  res.send(err)
              })
  }



}
module.exports = Controller
