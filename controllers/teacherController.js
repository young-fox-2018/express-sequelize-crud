const Model = require ('../models/index.js')
class Controller {
  static findAll(req, res) {
      Model.Teacher.findAll()
          .then(function (teacher) {
              res.render('teacher.ejs', { data: teacher })              
          })
          .catch(function (err) {
              res.send(err)
          })
  }

  static renderTeacher(req,res){
        res.render('addTeacher.ejs')
  }

  static addTeacher(req ,res){
        let data = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email
        }
        Model.Teacher.create(data)
            .then(function () {
                res.redirect('/teacher')
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
      Model.Teacher.findOne(data)
          .then(function (teacher) {
              res.render('teacheredit.ejs', { data: teacher })
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
        Model.Teacher.update(data, {
            where: {
                id: req.params.id
            }
        })
            .then(function () {
                res.redirect('/teacher')
            })
            .catch(function (err) {
                res.send(err)
            })
    }
    static deleteTeacher(req, res) {
        let data = {
            where: {
                id: req.params.id
            }
        }
        Model.Teacher.destroy(data)
            .then(function () {
                res.redirect('/teacher')
            })
            .catch(function (err) {
                res.send(err)
            })
}


}

module.exports = Controller
