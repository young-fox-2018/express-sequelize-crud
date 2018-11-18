"use strict"

const StudentController = require('../controller/StudentController')
const routes = require('express').Router()
const View = require('../View')


routes.get('/', (req, resp) => {
    StudentController.getAll()
    .then((data) => {
        resp.render('../views/student/', {data : data})
    })
})

routes.get('/create', (req, resp) => {
    resp.render('../views/student/create.ejs')
})

routes.post('/',(req, resp) => {
    StudentController.add(req.body)
    .then(data => {
        resp.redirect('/students');
    })
    .catch(err => {
        resp.redirect('/students');
    })
})

routes.get('/edit/:id',(req, resp) => {
    StudentController.getOne(req.params.id)
    .then((data) => {
        resp.render('../views/student/edit.ejs', { data: data })
    })
    .catch((err) => {
        resp.redirect('/students')
    })
})

routes.post('/edit/:id',(req, resp) => {
    StudentController.edit(req.body, req.params.id)
    .then(data => {
        resp.redirect('/students')
    })
    .catch(err => {
        resp.redirect('/students')
    })
})

routes.get('/delete/:id', (req, resp) => {
    StudentController.delete(req.params)
        .then(data => {
            if (!data) {
                resp.redirect('/students')
            } else {
                resp.redirect('/students')
            }
        })
        .catch(err => {
            View.printError(err)
        })
})


module.exports = routes
