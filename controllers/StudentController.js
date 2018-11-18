const Model = require('../models/')

class StudentController {
    static findAll(req, res) {

        Model.Student.findAll()
            .then(data => {
                res.render('student.ejs', {data: data})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static add (req, res) {
        Model.Student.create(req.body)
            .then(data => {
                res.redirect('/student')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static delete(req, res) {
        Model.Student.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(data => {
                if(data) {
                    res.redirect('/student')
                } else {
                    res.send('Student id not found')
                }
            })
            .then(err => {
                res.send(err)
            })
    }

    static edit(req, res) {
        Model.Student.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(data => {
                if(data) {
                    res.render('edit.ejs', {data: data})
                } else {
                    res.send('id not found')
                }
            })
            .catch(err => {
                res.send(err)
            })
    }

    static update(req, res) {
        Model.Student.update(req.body, {
            where: {
                id: req.params.id
            }
        })
            .then(data => {
                if(data) {
                    res.redirect('/student')
                } else {
                    res.send('id not found')
                }
            })
            .catch(err => {
                res.send(err)
            })
    }
}


module.exports = StudentController