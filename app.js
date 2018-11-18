'use strict'

const app = require('express')()
const routes = require('./routes')
const student = require('./routes/student')
const teacher = require('./routes/teacher')
const port = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine', 'ejs')

app.use('/', routes)
app.use('/student', student)
app.use('/teacher', teacher)

app.listen(port, function() {
    console.log('Running.... on port: ', port)
})