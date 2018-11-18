const Model = require('../models')

class SubjectController {
    static findAll(req, res) {
        Model.Subject.findAll()
            .then(function (subjects) {
                res.render('subject.ejs', { data: subjects })
            })
            .catch(function (err) {
                res.send(err)
            })
    }
    static renderAddSubject(req, res) {
        res.render('subject-add.ejs')
    }
    static addSubject(req, res) {
        let dataSubject = {
            subject_name: req.body.subject_name
        }
        Model.Subject.create(dataSubject)
            .then(function () {
                res.redirect('/subject')
            })
            .catch(function (err) {
                res.send(err.message)
            })
    }
    static renderEditSubject(req, res) {
        let dataSubject = {
            where: {
                id: req.params.id
            }
        }
        Model.Subject.findOne(dataSubject)
            .then(function (subject) {
                res.render('subject-edit.ejs', { data: subject })
            })
            .catch(function (err) {
                res.send(err)
            })
    }
    static editSubject(req, res) {
        let dataSubject = {
            subject_name: req.body.subject_name
        }
        Model.Subject.update(dataSubject, {
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
    static deleteSubject(req,res) {
        let dataSubject={
            where:{
                id:req.params.id
            }
        }
        Model.Subject.destroy(dataSubject)
            .then(function(){
                res.redirect('/subject')
            })
            .catch(function(err){
                res.send(err)
            })
    }
}

module.exports = SubjectController