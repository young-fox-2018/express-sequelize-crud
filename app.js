'use strict'
const express = require('express')
let app = express()
const routes  = require('./routes')
const Student = require('./routes/student')
const Teacher = require('./routes/teacher')
const bodyParser = require('body-parser')
const port = 3330

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/',routes)
app.use('/student' , Student)
app.use('/teacher' , Teacher)

app.listen(port, () => {
  console.log(`App listening to port ${port}`)
})