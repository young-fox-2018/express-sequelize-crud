"use strict"

const Controller = require('../controller/controller')
const route = require('express').Router()
const View = require('../View')

route.get('/', (req, res) => {
    Controller.readAllTeacherData()
        .then(data => {
            res.render('teacherView.ejs', {data : data})
        })
        .catch(err => {
            View.printError(err)
        })
})

route.get('/delete/:id' , (req, res) => {
    Controller.deleteTeacher(req.params.id)
        .then(data => {
            res.redirect('/teachers')
        })
        .catch(err => {
            console.log(err)
            res.redirect('/teachers')
        })
})


module.exports = route
