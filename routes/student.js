"use strict"

const Controller = require('../controller/controller')
const routes = require('express').Router()
const alert = require('alert-node')
const View = require('../View')

routes.get('/', (req, resp) => {
    resp.render('studentView.ejs')
})

routes.post('/',(req, resp) => {
    Controller.addStudent(req.body)
    .then(data => {
        const result = data.dataValues
       
        if (result.id > 0) {
            resp.render('studentDataSavedView.ejs')
        }
    })
    .catch(err => {
        const message = err.message
        
        View.printError(message)
    })
})

routes.get('/edit/:id',(req, resp) => {
    resp.render('studentEditDataView.ejs')
})

routes.post('/edit/:id',(req, resp) => {
    Controller.editStudent(req.body, req.params.id)
        .then(data => {
            if (!data) {
                alert('Data not found')
            } else {
                resp.render('studentEditDataSuccess.ejs')
            }
          
        })
        .catch(err => {
           alert(err)
        })
})

routes.get('/delete/:id', (req, resp) => {
    Controller.deleteStudent(req.params)
        .then(data => {
            if (!data) {
                alert('Data not found')
            } else {
                alert('Data successfully deleted')
            }  
        })
        .catch(err => {
            View.printError(err)
        })
})


module.exports = routes