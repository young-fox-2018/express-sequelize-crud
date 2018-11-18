"use strict"

const TeacherController = require('../controller/TeacherController.js')
const route = require('express').Router()
const View = require('../View')

route.get('/', (req, res) => {
    TeacherController.getAll()
        .then(data => {
            res.render('../views/teacher', {data : data})
        })
        .catch(err => {
            View.printError(err)
        })
})

route.get('/delete/:id' , (req, res) => {
    TeacherController.delete(req.params.id)
        .then(data => {
            res.redirect('/teachers')
        })
        .catch(err => {
            console.log(err)
            res.redirect('/teachers')
        })
})


module.exports = route
