const express = require('express')
let app = express()
const homeRoute = require('./routes')
const studentRoute = require('./routes/students')
const teacherRoute = require('./routes/teachers')
const subjectRoute = require('./routes/subjects')
let bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.set("view engine", "ejs")

app.use('/', homeRoute)
app.use('/students', studentRoute)
app.use('/teachers', teacherRoute)
app.use('/subjects', subjectRoute)

app.listen(3210,function(){
    console.log(`we're running on port 3210`)
})