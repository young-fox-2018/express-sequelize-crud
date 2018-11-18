'use strict'

const Controller = require('../controllers/Controller')
const View = require('../View.js')
const routes = require('express').Router()

routes.get('/', function(req, res) {
    Controller.readAllTeacherData()
        .then(data => {
            res.render('teacher.ejs', {data:data})
        })
        .catch((err) => {
            View.printError(err)
        })
})

routes.post('/', (req, res) => {
    res.send(req.body)
})

module.exports = routes