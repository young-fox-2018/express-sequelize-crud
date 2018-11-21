const Model = require ('../models/index.js')
class Controller {
  static findAll(req, res) {
      Model.Subject.findAll()
          .then(function (subject) {
              res.render('subject.ejs', { data: subject })
          })
          .catch(function (err) {
              res.send(err)
          })
  }

    static renderSubject(req,res){
          res.render('addSubject.ejs')
    }

    static addSubject(req ,res){
          let data = {
              subject_name: req.body.subject_name
          }
          // console.log(JSON.stringify(data),req.body.)
          Model.Subject.create(data)
              .then(function () {
                  res.redirect('/subject')
              })
              .catch(function (err) {
                  res.send(err.message)
                })
    }
    static renderEditSubject(req, res) {
        let data= {
            where: {
                id: req.params.id
            }
        }
        Model.Subject.findOne(data)
            .then(function (subject) {
                res.render('subjectedit.ejs', { data:subject })
            })
            .catch(function (err) {
                res.send(err)
            })
  }
  static editSubject(req, res) {
          let data = {
              subject_name: req.body.subject_name
              }
          Model.Subject.update(data, {
              where: {
                  id: req.params.id
              }
          })
              .then(function () {
                  res.redirect('/subject')
              })
              .catch(function (err) {
                  res.send(err)
              })
      }

      static deleteSubject(req, res) {
          let data = {
              where: {
                  id: req.params.id
              }
          }
          Model.Subject.destroy(data)
              .then(function () {
                  res.redirect('/subject')
              })
              .catch(function (err) {
                  res.send(err)
              })
  }



}
module.exports = Controller
