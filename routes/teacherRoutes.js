const routes = require('express').Router()
const TeacherController = require('../controllers/TeachersController')
routes.get('/teachers', (req, res) => {
    TeacherController.findAll()
        .then(dataTeacher => {
            res.render('teachers', { dataTeacher })
        })
        .catch(err => {
            res.send('404 Not found')
        })
})

routes.get('/teachers/add', (req, res) => {
    res.render('formAddTeacher')
})

routes.post('/teachers/add', (req, res) => {
    TeacherController.create(req.body)
        .then((data) => {
            res.redirect('/teachers')
        })
        .catch(err => {
            res.send('404 Not found')
        })
})

routes.get('/teachers/edit/:id', (req, res) => {
    TeacherController.findOne(req.params.id)
        .then(dataTeacher => {
            res.render('formEditTeacher', { dataTeacher })
        })
        .catch(err => {
            res.send('404 Not found')
        })
})

routes.post('/teachers/edit/:id', (req, res) => {
    TeacherController.update(req.body, req.params.id)
        .then(() => {
            res.redirect('/teachers')
        })
        .catch(err => {
            res.send('404 Not found')
        })
})

routes.get('/teachers/delete/:id', (req, res) => {
    TeacherController.delete(req.params.id)
        .then(() => {
            res.redirect('/teachers')
        })
        .catch(err => {
            res.send('404 Not found')
        })
})

module.exports = routes