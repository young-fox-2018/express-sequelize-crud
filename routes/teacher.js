"use strict"

const Controller = require('../controller/controller')
const route = require('express').Router()
const View = require('../View')

route.get('/', (req, res)=> {
    Controller.readAllTeacherData()
        .then(data => {
            res.render('teacherView.ejs', {data : data})
        })
        .catcj(err => {
            View.printError(err)
        }) 
})


module.exports = route