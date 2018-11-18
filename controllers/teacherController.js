const Model = require('../models')

class TeacherController {
    static findAll(req, res) {
        Model.Teacher.findAll()
            .then(function (data) {
                res.render('teacher.ejs', { data: data })
            })
            .catch(function (err) {
                res.send(err)
            })
    }
    static renderAddTeacher(req, res) {
        res.render('teacher-add.ejs')
    }
    static addTeacher(req, res) {
        let dataTeacher = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        }
        Model.Teacher.create(dataTeacher)
            .then(function () {
                res.redirect('/teacher')
            })
            .catch(function (err) {
                res.send(err.message)
            })
    }
    static renderEditTeacher(req, res) {
        let dataTeacher = {
            where: {
                id: req.params.id
            }
        }
        Model.Teacher.findOne(dataTeacher)
            .then(function (teacher) {
                res.render('teacher-edit.ejs', { data: teacher })
            })
            .catch(function (err) {
                res.send(err)
            })
    }
    static editTeacher(req, res) {
        let dataTeacher = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        }
        Model.Teacher.update(dataTeacher, {
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
        let dataTeacher = {
            where: {
                id: req.params.id
            }
        }
        Model.Teacher.destroy(dataTeacher)
            .then(function () {
                res.redirect('/teacher')
            })
            .catch(function (err) {
                res.send(err)
            })
    }
}


module.exports = TeacherController