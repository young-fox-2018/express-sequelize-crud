const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const students = require('./routers/students')

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({}))

app.use('/students', students)
// app.use('/student/add', add)

app.listen(port, () => {
    console.log(`running on port: ${port}`);
})