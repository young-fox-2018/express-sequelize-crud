"use strict"

const Controller = require('../controller/controller')
const route = require('express').Router()

route.get('/', (req, res)=> {
    Controller.readAllTeacherData()
        .then(data => {
            res.render('teacherView.ejs', {data : data})
        })  
})


module.exports = route