const routes = require('express').Router()
const { Teacher } = require('../models')
routes.get('/teachers', (req, res) => {
    Teacher.findAll()
        .then((dataTeachers) => {
            res.render('teachers', { dataTeachers })
        })
})

routes.get('/teachers/add', (req, res) => {
    res.render('formAddTeacher')
})

module.exports = routes