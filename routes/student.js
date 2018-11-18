"use strict"

const Controller = require('../controller/controller')
const routes = require('express').Router()
const View = require('../View')

routes.get('/', (req, resp) => {
    Controller.showAllStudents()
    .then((data) => {
        resp.render('showStudentsView.ejs', {data : data})
    })
})

routes.get('/create', (req, resp) => {
    resp.render('studentView.ejs')
})

routes.post('/',(req, resp) => {
    Controller.addStudent(req.body)
    .then(data => {
        const result = data.dataValues

        if (result.id > 0) {
            resp.redirect('/students');
        }
    })
    .catch(err => {
        const message = err.message

        View.printError(message)
    })
})

routes.get('/edit/:id',(req, resp) => {
    Controller.getOneStudent(req.params.id)
    .then((data) => {
        resp.render('studentEditDataView.ejs', { data: data })
    })
    .catch((err) => {
        resp.redirect('/students')
    })
})

routes.post('/edit/:id',(req, resp) => {
    Controller.editStudent(req.body, req.params.id)
    .then(data => {
        resp.redirect('/students')
    })
    .catch(err => {
        resp.redirect('/students')
    })
})

routes.get('/delete/:id', (req, resp) => {
    Controller.deleteStudent(req.params)
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
