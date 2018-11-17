'use strict'
const express = require('express')
let app = express()
const routes  = require('./routes')
const Student = require('./routes/student')
const Teacher = require('./routes/teacher')
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/',routes)
app.use('/student' , Student)
app.use('/teacher' , Teacher)

app.listen(3000, () => {
  console.log('App listenign to port 3000')
})