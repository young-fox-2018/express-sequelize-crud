"use strict"

const Controller = require('../controller/controller')
const routes = require('express').Router()
const alert = require('alert-node')
var confirm = require('confirm-dialog')

routes.get('/', (req, resp) => {
    resp.render('studentView.ejs')
})

routes.post('/',(req, resp) => {
    console.log(req.body)
    Controller.addStudent(req.body)
    .then(data => {
        const result = data.dataValues

        if (result.id > 0) {
            resp.render('studentDataSavedView.ejs')
        }
    })
    .catch(err => {
        console.log(err)
    })
})

routes.get('/edit/:id',(req, resp) => {
    resp.render('studentEditDataView.ejs')
})

routes.post('/edit/:id',(req, resp) => {
    Controller.editStudent(req.body, req.params.id)
        .then(data => {
            console.log(data)
        })
        .catch(err => {
           alert(err)
           window.stop()
        })
})

routes.get('/delete/:id', (req, resp) => {
    confirm('Are  you sure want to delete the data')
        .then(() => {
        Controller.deleteStudent(req.params)
            .then(data => {
                 console.log(data)   
                })
            .catch(err => {
                console.log(err)
            })
        })
        .catch(err => {
            console.log(err)
        })    
})


module.exports = routes