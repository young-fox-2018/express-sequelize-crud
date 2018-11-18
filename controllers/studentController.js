const Model = require('../models')


class StudentController {
    static findAll(req, res) {
        Model.Student.findAll()
            .then(function (student) {
                res.render('student-list.ejs', { data: student })
            })
            .catch(function (err) {
                res.send(err)
            })
    }
    static renderAddStudent(req, res) {
        res.render('student-add.ejs')
    }

    static addStudent(req, res) {
        let dataStudent = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        }
        Model.Student.create(dataStudent)
            .then(function () {
                res.redirect('/student')
            })
            .catch(function (err) {
                res.send(err.message)
            })
    }

    static renderEditStudent(req, res) {
        let dataStudent = {
            where: {
                id: req.params.id
            }
        }
        Model.Student.findOne(dataStudent)
            .then(function (student) {
                res.render('student-edit.ejs', { data: student })
            })
            .catch(function (err) {
                res.send(err)
            })
    }
    static editStudent(req, res) {
        let dataStudent = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
        }
        Model.Student.update(dataStudent, {
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
        let dataStudent = {
            where: {
                id: req.params.id
            }
        }
        Model.Student.destroy(dataStudent)
            .then(function () {
                res.redirect('/student')
            })
            .catch(function (err) {
                res.send(err)
            })
    }
}


module.exports = StudentController
